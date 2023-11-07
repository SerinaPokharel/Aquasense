package config

type AppConfig struct {
	DBConnectionURL string
	JWTSecretKey    string

	// Other configuration options
}

func LoadConfig() *AppConfig {
	// Load configuration from environment variables or a config file
	// Set DBConnectionURL and other options

	return &AppConfig{
		DBConnectionURL: "postgresql://aryan:Yh0LWLTrYE7HAoNp8IoQaA@aryan-cluster-7052.8nk.cockroachlabs.cloud:26257/Iot?sslmode=verify-full",
		JWTSecretKey:    "secret",
		// Set other configuration options as needed
	}
}
