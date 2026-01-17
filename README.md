# 🌦️ Weather Bliss — Weather Application

> **Weather Bliss, No Hit or Miss!** 🥶☀️
> A clean, responsive, and user-friendly weather application that lets you search for any city and instantly view its **temperature, local time, date, weather condition, and animated weather icon** — all powered by a real-time weather API.

---

## ✨ Features

* 🔍 **Search by City Name** — Find weather for any city worldwide
* 🌡️ **Live Temperature Display** — Shows current temperature in °C
* 🕒 **Local Time & Date** — Automatically updates based on the city
* 🌤️ **Weather Condition & Icon** — Sunny, Cloudy, Rainy, etc.
* ⏳ **Loading Spinner in Button** — Professional loading animation while fetching data
* 🎨 **Clean & Responsive UI** — Looks great on desktop and mobile
* ⚡ **Fast API Fetching** — Powered by WeatherAPI

---

## 🖥️ Preview

> *Simple. Clean. Powerful.*
> Type a city name, click **Search**, and watch the weather update in real-time!

---

## 🛠️ Tech Stack

| Technology           | Usage                        |
| -------------------- | ---------------------------- |
| **HTML5**            | Structure of the application |
| **CSS3**             | Styling, layout & animations |
| **JavaScript (ES6)** | API calls & DOM manipulation |
| **WeatherAPI**       | Live weather data source     |

---

## 📂 Project Structure

```bash
Weather-App/
│
├── index.html      # Main HTML file
├── style.css      # Styling & animations
├── script.js      # API logic & DOM updates
├── README.md      # Project documentation
└── image.gif        # (Optional) Images / Logo
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/USP2003/weather-app.git
cd weather-app
```

### 2️⃣ Open the Project

Simply open `index.html` in your browser:

```bash
open index.html
```

OR

* Right-click → Open With → Browser

---

## 🔑 API Setup

This project uses **WeatherAPI**.

### Get Your Free API Key:

1. Go to 👉 [https://www.weatherapi.com/](https://www.weatherapi.com/)
2. Sign up for a free account
3. Copy your API key

### Add it in `script.js`

```js
const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}&aqi=no`;
```

---

## 🧠 How It Works

1. User enters a **city name**
2. Clicks the **Search** button
3. Button switches to a **loading spinner** ⏳
4. App fetches data from **WeatherAPI**
5. UI updates with:

   * 🌡️ Temperature
   * 📍 Location
   * 🕒 Time
   * 📅 Date
   * 🌤️ Condition & Icon
6. Button returns to normal state

---

## 🌟 Future Enhancements

* 📍 Auto-detect user location
* 🌙 Dark mode toggle
* 📅 7-day weather forecast
* 🌬️ Wind speed & humidity display
* 🗺️ Google Maps integration

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 👨‍💻 Author

**Urvi Suresh Patil**
🎓 Electronics & Telecommunication Engineer | Cybersecurity & Emerging Tech Enthusiast

---

## 💬 Feedback

If you like this project, give it a ⭐ on GitHub!
Have suggestions? Feel free to open an issue or reach out.

---

> *"Code the weather, master the climate of creativity."* 🌍🔥
