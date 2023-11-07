package utils

import (
	"aquasense/config"
	"database/sql"
	_ "github.com/lib/pq" // Import the PostgreSQL driver for CockroachDB
)

func ConnectToDatabase(cfg *config.AppConfig) (*sql.DB, error) {
	db, err := sql.Open("postgres", cfg.DBConnectionURL) // Use "postgres" as the driver name
	if err != nil {
		return nil, err
	}
	return db, nil
}
