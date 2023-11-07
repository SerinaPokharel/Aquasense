package main

import (
	"aquasense/config"
	"aquasense/controllers"
	"aquasense/middleware"
	"aquasense/utils"
	"github.com/gorilla/mux"
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

	sensorController := controllers.SensorController{DB: db}

	r := mux.NewRouter()

	// Middleware for JWT Authentication
	authMiddleware := middleware.AuthenticationMiddleware(r, cfg)

	// Define API Endpoints with the authMiddleware
	r.HandleFunc("/api/sensor-data", sensorController.CreateSensorData).Methods("POST")
	r.HandleFunc("/api/signup", sensorController.SignUp).Methods("POST")
	r.HandleFunc("/api/login", sensorController.Login).Methods("POST")

	http.Handle("/", r)

	log.Println("Server started on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("Server error: ", err)
	}
}
