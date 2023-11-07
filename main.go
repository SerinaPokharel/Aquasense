// main.go

package main

import (
	"aquasense/config"
	"aquasense/controllers"
	"aquasense/middleware"
	"aquasense/utils"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	cfg := config.LoadConfig()
	db, err := utils.ConnectToDatabase(cfg)
	if err != nil {
		// Handle database connection error
	}
	defer db.Close()

	userController := controllers.NewUserController(db, cfg.JWTSecretKey)
	authMiddleware := middleware.AuthenticationMiddleware(cfg)

	r := mux.NewRouter()

	r.HandleFunc("/api/signup", userController.RegisterUser).Methods("POST")
	r.HandleFunc("/api/login", userController.Login).Methods("POST")
	r.Handle("/api/secure-data", authMiddleware(userController.SecureData)).Methods("GET")

	http.Handle("/", r)
	http.ListenAndServe(":8080", nil)
}
