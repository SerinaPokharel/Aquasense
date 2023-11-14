package main

import (
	"aquasense/config"
	"aquasense/utils"
	"log"
	"net/http"
)

func main() {
	cfg := config.LoadConfig()
	db, err := utils.ConnectToDatabase(cfg)
	if err != nil {
		log.Fatal("Error connecting to the database:", err)
	}
	defer db.Close()
	// login and register routing with html
	http.HandleFunc("/login", loginHandler)
	http.HandleFunc("/register", registerHandler)

	log.Println("Server started on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Server error: ", err)
	}
}
