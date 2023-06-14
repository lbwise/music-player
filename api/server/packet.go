package server

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"
	"net/url"
	_ "regexp"
)

type Packet struct {
	Req *http.Request
	Res http.ResponseWriter
	Params
	Url url.URL
}

func (p *Packet) WriteString(res string, status int) {
	p.Res.WriteHeader(status)
	p.Res.Write([]byte(res))
}

func (p *Packet) WriteJSON(res any, status int) error {
	encodedRes, err := json.Marshal(res)
	if err != nil {
		return errors.New("Unable to encode json")
	}
	p.Res.Write(encodedRes)
	return nil
}

func (p *Packet) ParseJSON(body io.ReadCloser, dataType any) error {
	data, err := io.ReadAll(body)
	if err != nil {
		return errors.New("Unable to read body")
	}
	err = json.Unmarshal(data, dataType)
	if err != nil {
		return errors.New("Unable to unmarshal body")
	}
	return nil

}

type Params struct {
	params map[string]string
} 

// func (p *Params) Get(param string) {
// 	return p[param] 
// }