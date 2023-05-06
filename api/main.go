package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"github.com/rs/cors"
)

func getSongs(rw http.ResponseWriter, r *http.Request)  {
	fmt.Println(r.Header["Access-Control-Allow-Origin"])
	content, _ := ioutil.ReadFile("./db.json")
	fmt.Println("HIT SERVER")
	rw.Write(content)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/songs", getSongs)

	handler := cors.Default().Handler(mux)
	http.ListenAndServe(":8080", handler)
}
