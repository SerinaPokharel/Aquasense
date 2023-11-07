package models

type SensorData struct {
	DeviceID string `json:"device_id"`
	Temp     string `json:"temp"`
	Humid    string `json:"humid"`
	Ph       string `json:"ph"`
	Turb     string `json:"turb"`
	Depth    string `json:"depth"`
}
