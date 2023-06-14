package main

import (
	"io"
	"fmt"	
	s "github.com/lbwise/music-player/api/server"
	pa "github.com/gordonklaus/portaudio"
)

func createApiRoutes(router *s.Router) {
	router.GET("/songs", getSongs)
	// router.POST("/songs", addSong)
	router.GET("/songs/track", getTrack)
	// router.GET("/search", getSearch)
}

type Track struct {
	Artist string `json:"artist"`
	Album string `json:"album"`
	Song string `json:"song"`
}

func getTrack(p *s.Packet) {
	songLoc := "../songs/Circles.mp3"
	io.ReadByte()
}

func getSongs(p *s.Packet) {
	fmt.Println(p.Req.Header["Access-Control-Allow-Origin"])
	content, _ := io.ReadAll("./db.json")
	p.WriteJSON(content, 200)
}


