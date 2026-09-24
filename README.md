# 🌤️ Weather App

<h3 align="center">Modern React Weather Forecast Application</h3>

<p align="center">
  Search • Explore • Check Weather
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-blue?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/WeatherAPI-REST_API-green?style=for-the-badge" alt="WeatherAPI">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript" alt="JavaScript">
</p>

---

# 🌐 Overview

**Weather App** is a responsive weather forecasting application built using **React.js, Vite, Tailwind CSS, and WeatherAPI**.

The application allows users to search for a city and view its current weather information, including temperature, weather condition, wind status, humidity, visibility, air pressure, location, and local time.

The project demonstrates **React state management, API integration, reusable components, conditional rendering, and responsive UI development**.

---

# ✨ Features

## 🌡️ Weather Information

* Search weather by city name
* Current temperature display
* Weather condition display
* Day/Night indicator
* Local date and time
* Location and country information

## 📊 Today's Highlights

* 💨 Wind Status
* 💧 Humidity
* 👁️ Visibility
* 🌡️ Air Pressure
* Wind direction
* Humidity progress indicator

## ⚡ React Features

* React functional components
* `useState` for state management
* `useEffect` for API requests
* Props for component communication
* Conditional rendering
* Reusable components

## 🎨 UI Features

* Responsive interface
* Tailwind CSS styling
* Interactive hover effects
* Clean weather dashboard
* Modern dark-themed design

---

# 🏗️ Application Flow

```text
                         User
                           │
                           ▼
                    Enter City Name
                           │
                           ▼
                    React State
                       useState
                           │
                           ▼
                      useEffect
                           │
                           ▼
                    WeatherAPI
                           │
                           ▼
                     JSON Response
                           │
                           ▼
                  weatherData State
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
        Temperature                 Highlights
              │                         │
              ▼                         ▼
       Main Weather Data        Weather Statistics
```

---

# 🌦️ API Integration

The application uses **WeatherAPI** to retrieve current weather information.

### API Endpoint

```text
https://api.weatherapi.com/v1/current.json
```

The request contains:

```text
?key=API_KEY&q=CITY&aqi=no
```

### Example

```text
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=New%20Delhi&aqi=no
```

### API Flow

```text
React Application
       │
       ▼
fetch()
       │
       ▼
WeatherAPI
       │
       ▼
JSON Weather Data
       │
       ▼
setWeatherData()
       │
       ▼
React UI Update
```

---

# 🧩 Component Architecture

```text
App.jsx
 │
 ├── Temperature.jsx
 │      ├── City Search
 │      ├── Temperature
 │      ├── Weather Condition
 │      ├── Day/Night Icon
 │      └── Location Information
 │
 └── Highlights.jsx
        ├── Wind Status
        ├── Humidity
        ├── Visibility
        └── Air Pressure
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS

## API

* WeatherAPI
* REST API
* Fetch API
* JSON

## Build Tools

* Vite
* PostCSS
* Autoprefixer

## Development Tools

* Git
* GitHub
* ESLint
* VS Code

---

# 📂 Project Structure

```text
weather-app/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── Highlights.jsx
│   ├── Temperature.jsx
│   ├── index.css
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# ⚙️ React State Management

The application uses React's `useState` hook to manage:

```jsx
const [city, setCity] = useState("New Delhi");

const [weatherData, setWeatherData] = useState(null);
```

### City State

Stores the city entered by the user.

### Weather Data State

Stores the weather information received from the API.

---

# 🔄 API Request Handling

The application uses `useEffect()` to fetch weather data whenever the city changes.

```jsx
useEffect(() => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data);
    });
}, [city]);
```

The dependency:

```text
[city]
```

ensures that the API request runs again whenever the user searches for another city.

---

# 🧱 Reusable Components

## Temperature Component

Responsible for displaying:

* City search input
* Temperature
* Weather condition
* Day/Night icon
* Location
* Country
* Local time

## Highlights Component

A reusable component used to display:

* Wind Status
* Humidity
* Visibility
* Air Pressure

Different weather values are passed through props.

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/rira1403github/weather-app.git
cd weather-app
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

The application will start on the local Vite development server.

---

# 🔐 API Key Security

The WeatherAPI key should **not be exposed in frontend source code** in a production application.

For a production version, the API request should ideally go through a backend/server-side service so the API key remains private.

```text
Frontend
   │
   ▼
Backend API
   │
   ▼
WeatherAPI
```

> ⚠️ If an API key has already been committed to a public GitHub repository, rotate/revoke that key and replace it with a new one.

---

# 🧠 Key Learning

Through this project, I worked with:

* React functional components
* React `useState`
* React `useEffect`
* Props and component communication
* REST API integration
* Fetch API
* JSON data handling
* Conditional rendering
* Reusable components
* Tailwind CSS
* Vite
* API error handling
* Dynamic UI updates

---

# 🔮 Future Improvements

* 📍 Current location weather using Geolocation API
* 📅 7-day weather forecast
* 🌡️ Celsius/Fahrenheit toggle
* 🔍 Better search suggestions
* 🌙 Improved weather icons
* 📱 Enhanced mobile responsiveness
* ⚠️ Better error and loading states
* 💾 Search history
* 🌧️ Hourly weather forecast
* 🌍 Multiple location support

---

# 👨‍💻 Author

### Md Saad Ali

**CSE Graduate | Full-Stack Developer | AI/ML Enthusiast**

<p>
  <a href="https://github.com/saad0918">
    <img src="https://img.shields.io/badge/GitHub-saad0918-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>

<p align="center">
  <b>🌤️ Search. Check. Stay Updated. 🚀</b>
</p>
