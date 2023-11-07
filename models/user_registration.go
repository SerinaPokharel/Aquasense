package models

// UserRegistration represents the user registration data.
type UserRegistration struct {
	HouseNo   string `json:"house_no"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Address   string `json:"address"`
	Username  string `json:"username"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}
