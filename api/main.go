package main

import (
	s "github.com/lbwise/music-player/api/server"
)

func main() {
	server := s.NewServer()
	api := server.NewGroup("/api/v1")
	createApiRoutes(api)	
	server.GET("*", notFoundRoute)
	server.Run(":8080")
}

func notFoundRoute(p *s.Packet) {
	p.WriteString("Unable to find what you were looking for. :(", 404)
}
