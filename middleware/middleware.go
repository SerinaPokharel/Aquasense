package middleware

import (
	"net/http"
	"aquasense/config"
	"github.com/dgrijalva/jwt-go"
	"fmt"
)

func AuthenticationMiddleware(r *mux.Router, cfg *config.AppConfig) mux.MiddlewareFunc {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			tokenString := r.Header.Get("Authorization")
			if tokenString == "" {
				http.Error(w, "Authorization token is missing", http.StatusUnauthorized)
				return
			}

			token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
				return []byte(cfg.JWTSecretKey), nil
			})

			if err != nil || !token.Valid {
				http.Error(w, "Invalid or expired token", http.StatusUnauthorized)
				return
			}

			if claims, ok := token.Claims.(jwt.MapClaims); ok {
				fmt.Printf("User ID: %v\n", claims["user_id"])
			}

			next.ServeHTTP(w, r)
		}
	}
}
