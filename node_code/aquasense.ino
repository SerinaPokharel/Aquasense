#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// WiFi credentials
const char *ssid = "IOT@2.4";
const char *password = "12345678";
const char *serverUrl = "http://10.20.97.192:3001/api/sendData";

// pH Sensor variables
#define SENSOR A0
#define OFFSET 0.00
#define SAMPLING_INTERVAL 20
#define PRINT_INTERVAL 800
#define ARRAY_LENGTH  40
int PH_ARRAY[ARRAY_LENGTH];
int PH_ARRAY_INDEX = 0;
float VOLTAGE;

// Flow sensor variables
double flow;
int flowsensor = 2;
unsigned long currentTime;
unsigned long lastTime;
unsigned long pulse_freq;

void setup() {
  pinMode(flowsensor, INPUT);
  Serial.begin(9600);
  Serial.println("Connecting to WiFi...");

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Trying to connect to WiFi...");
  }
  Serial.println("Connected to WiFi");

  attachInterrupt(digitalPinToInterrupt(flowsensor), pulse, RISING); // Setup Interrupt for flow sensor
  currentTime = millis();
  lastTime = currentTime;
}

void loop() {
  readAndProcessPHSensor();
  readAndProcessFlowSensor();
  sendData();
}

void readAndProcessPHSensor() {
  static unsigned long SAMPLING_TIME = millis();
  if (millis() - SAMPLING_TIME > SAMPLING_INTERVAL) {
    PH_ARRAY[PH_ARRAY_INDEX++] = analogRead(SENSOR);
    if (PH_ARRAY_INDEX == ARRAY_LENGTH) PH_ARRAY_INDEX = 0;
    VOLTAGE = AVERAGE_ARRAY(PH_ARRAY, ARRAY_LENGTH) * 5.0 / 1024;
    SAMPLING_TIME = millis();
  }
}

double AVERAGE_ARRAY(int* ARR, int NUMBER) {
  // Your existing AVERAGE_ARRAY function code
}

void readAndProcessFlowSensor() {
  currentTime = millis();
  // Every second, calculate and print L/Min
  if (currentTime >= (lastTime + 1000)) {
    flow = (pulse_freq / 7.5);
    pulse_freq = 0;
    lastTime = currentTime;
  }
}

void pulse() {
  pulse_freq++;
}

void sendData() {
  if (millis() - lastTime > 10000) { // Send data every 10 seconds
    WiFiClient client;
    HTTPClient http;
    http.begin(client, serverUrl);
    http.addHeader("Content-Type", "application/json");

    String jsonData = "{\"phValue\": " + String(VOLTAGE) + ", \"flowRate\": " + String(flow) + "}";

    int httpResponseCode = http.POST(jsonData);

    if (httpResponseCode > 0) {
      Serial.println(http.getString());
    } else {
      Serial.println("Error sending data");
    }

    http.end();
    lastTime = millis();
  }
}
