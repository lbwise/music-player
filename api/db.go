package main

import (
	_ "github.com/lbwise/music-player/api/server"
)

func NewDB(connString string) *DB {
	return &DB{
		db: connString,
	}
}

type DB struct {
	db string
}

func (db *DB) ReadOne() (any, error) {
	return nil, nil
}

func (db *DB) ReadMany() (any, error) {
	return nil, nil
}

func (db *DB) InsertOne() {}

func (db *DB) InsertMany() {}

func (db *DB) UpdateOne() {}

func (db *DB) UpdateMany() {}

func (db *DB) DeleteOne() {}

func (db *DB) DeleteMany() {}