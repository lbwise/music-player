package server

import (
	"fmt"
	"log"
	"net/http"
	_ "net/url"
	"regexp"
	_ "errors"
)

type Handler func(context *Packet)

type HttpHandler func(rw http.ResponseWriter, r *http.Request)


type Route struct {
	Handler HttpHandler
	Route string
	Method string
}

func NewServer() *Router {
	return &Router{
		prefix: "/",
		server: &Server{
			server: http.NewServeMux(),
		},
	}
}

type Server struct {
	Logs *log.Logger
	Routes []Route
	server *http.ServeMux
}

func (s *Server) addRoute(route string, handler Handler, method string) {
	wrappedHandler, _ := s.wrapHandler(route, handler)
	s.server.HandleFunc(route, wrappedHandler)
	s.Routes = append(s.Routes, Route{
		Route: route, 
		Handler: wrappedHandler,
		Method: method,	
	})
}

func (s *Server) wrapHandler(route string, handler Handler) (HttpHandler, error){
	fmt.Println(route)
	regex, err := regexp.Compile(":(.*)/")
	if err != nil {
		return nil, err
	}
	matches := regex.FindStringSubmatch(route)
	fmt.Println(matches)
	data := regex.SubexpIndex("track")
	fmt.Println("data", data)
	wrapper := func(rw http.ResponseWriter, r *http.Request) {
		packet := &Packet{
			Req: r,
			Res: rw,
		}
		handler(packet)
	}
	return wrapper, nil
}

func (s *Server) Run(port string) {
	fmt.Println(fmt.Sprintf("CURRENTLY LISTENING ON localhost%s\n", port))
	routes := fmt.Sprintf("ROUTES:\n")
	for _, route := range s.Routes {
		routes += fmt.Sprintf("%s %s\n", route.Method, route.Route) 
	}
	fmt.Println(routes)
	http.ListenAndServe(port, s.server)
}
