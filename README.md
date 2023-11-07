<br/>
<p align="center">
  <a href="https://github.com/Aryanstha/Aquasense">
    <img src="https://github.com/Aryanstha/Aquasense/blob/main/logo.png?raw=true" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">AquaSense💧</h3>

  <p align="center">
    Smart IoT Water Quality Monitoring and Billing System
    <br/>
    <br/>
    <a href="https://github.com/Aryanstha/Aquasense">View Demo</a>
    .
    <a href="https://github.com/Aryanstha/Aquasense/issues">Report Bug</a>
    .
    <a href="https://github.com/Aryanstha/Aquasense/issues">Request Feature</a>
  </p>
</p>

![Contributors](https://img.shields.io/github/contributors/Aryanstha/Aquasense?color=dark-green) ![Forks](https://img.shields.io/github/forks/Aryanstha/Aquasense?style=social) ![Stargazers](https://img.shields.io/github/stars/Aryanstha/Aquasense?style=social) ![Issues](https://img.shields.io/github/issues/Aryanstha/Aquasense) ![License](https://img.shields.io/github/license/Aryanstha/Aquasense)

## About The Project

![Screen Shot](images/screenshot.png)

AquaSense💧 is an innovative IoT project designed to monitor water quality and provide a meter billing system for water supply. This system combines the power of IoT technology, data analytics, and smart billing to ensure the efficient management and distribution of clean water.

# Components
1. <b>IoT Devices and Sensors:</b>
- These are distributed throughout the water supply network to monitor water quality parameters, such as pH, turbidity, chlorine levels, and temperature.
- Sensors collect real-time data and transmit it to the central server.
2. <b>Data Acquisition Layer:</b>
- Responsible for collecting data from IoT sensors.
- Ensures data integrity and reliability.
- Use of communication protocols like MQTT, HTTP, or CoAP.
3. <b>Data Processing Layer:</b>
- Receives raw data from the data acquisition layer.
- Performs real-time data processing and analysis.
- Detects anomalies and trends in water quality.
4. <b>Database Layer:</b>
- Stores user data, billing records, and historical water quality data.
- Utilizes a database system, such as CockroachDB.
- Ensures data persistence and reliability.
5. <b>Web Application Layer:</b>
- Provides a web-based interface for users and administrators.
- Users can register, log in, and access water quality and billing information.
- Administrators can monitor the system and respond to alerts.
6. <b>User Management and Authentication:</b>
- Manages user accounts and authentication.
- Provides secure access to user-specific data.
- Implements JWT-based authentication for user access.
7. <b>Alerts & Notification:</b>
- Monitors water quality data for anomalies and potential issues.
- Sends alerts and notifications to users and administrators via email or push notifications.

# Workflow
1. Node MCU and IoT sensors continuously monitor water quality parameters, collecting real-time data.
2. Data is transmitted to the central server through the data acquisition layer.
3. The data processing layer analyzes incoming data, identifies anomalies, and trends, and generates alerts if necessary.
4. Processed data is stored in the database, allowing for historical data retrieval and billing calculations.
5. The web application layer provides user registration, log-in, and access to data visualization and billing information.
6. Users and administrators receive alerts and notifications as necessary.

# Features
* <b> Water Quality Monitoring:</b> AquaSense employs various sensors and IoT devices to continuously monitor water quality, including parameters such as pH, turbidity, chlorine levels, and temperature.
* <b>Real-time Data:</b> The system collects real-time data from distributed sensors, allowing for immediate detection of water quality issues.
* <b>User Registration:</b> Users can register and manage their accounts to access water usage and billing information.
* <b>Secure Authentication:</b> The system uses JWT-based authentication to secure user access to their accounts and data.
* <b>Metered Billing:</b> A smart billing system calculates water consumption based on real-time sensor data, ensuring accurate and fair billing.
* <b>Alerts and Notifications:</b> AquaSense can send alerts and notifications to users and administrators in case of water quality issues or unusual consumption patterns.
* <b>Historical Data:</b> Users can access historical water quality and usage data to track their consumption and monitor trends.
* <b>Scalability:</b> The architecture allows for the addition of more IoT sensors and users to scale with the growing demand.

# Contributing
Contributions to AquaSense are welcome! If you have ideas for enhancements or bug fixes, please submit a pull request.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
For any inquiries or feedback, please contact the project maintainer:
- Aryan Shrestha
- Email: aryanstha4859@gmail.com
- Website: aryanstha.me

AquaSense is a project with the mission to improve water quality monitoring and billing systems for a sustainable future




## Built With

<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://www.chartjs.org" target="_blank" rel="noreferrer"> <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40"/> </a> <a href="https://www.cockroachlabs.com/product/cockroachdb/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/cockroachdb.svg" alt="cockroachdb" width="40" height="40"/> </a> <a href="https://golang.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go" width="40" height="40"/> </a> </p>

## Getting Started

To get started with AquaSense, follow these steps:
1. <b>Prerequisites:</b> Ensure you have the required hardware for water quality monitoring and IoT sensors.
2. <b>Installation:</b>Set up the IoT devices and sensors in your water supply network. Configure the database connection in the `config` package.
3. <b>Build and Run:</b>Build the AquaSense project and start the web application using `go run main.go`.
4. <b>User Registration:</b> Users can register for AquaSense accounts to access their water usage and billing information.
5. <b>Monitor Water Quality:</b> Access real-time water quality data and historical information through the web interface.
6. <b>Billing System:</b> AquaSense's smart billing system ensures accurate billing based on sensor data and payment gateway integration.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Aryanstha/Aquasense/blob/main/LICENSE.md) for more information.

## Authors

* **Aryan Shrestha** - *Backend  Developer* - [Aryan Shrestha](https://github.com/aryanstha/) - *Backend development*
