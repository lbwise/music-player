package server

import (
	_ "net/http"
)

type Router struct {
	server *Server
	prefix string
}

func (r *Router) Run(port string) {
	r.server.Run(port)
}

func (r *Router) AddRoute(route string, handler Handler, method string) {
	prefixedRoute := r.prefix + route
	r.server.addRoute(prefixedRoute, handler, method)
}

func (r *Router) NewGroup(prefix string) *Router{
	return &Router{
		server: r.server,
		prefix: prefix,
	}
}

func (r Router) GET(route string, handler Handler) {
	r.AddRoute(route, handler, "GET")
}

func (r Router) POST(route string, handler Handler) {
	r.AddRoute(route, handler, "POST")
}

func (r Router) PUT(route string, handler Handler) {
	r.AddRoute(route, handler, "PUT")
}

func (r Router) PATCH(route string, handler Handler) {
	r.AddRoute(route, handler, "PATCH")
}