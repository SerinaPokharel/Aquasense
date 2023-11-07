package models

// UserAuthentication represents the user login data.
type UserAuthentication struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
