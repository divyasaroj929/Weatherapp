import { useState } from "react";
import "./App.css";
import Weather from "./COMPONENTS/Weather";
const api = {
  key: "fcf1ff081291ca0c2f0ebb5a035c8636",
  base: "https://api.openweathermap.org/data/2.5",
};

const buildDate = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

function App() {
  // const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});
  // console.log("bu");
  // const Search = (e) => {
  //   console.log("heyyy");

  //   if (e.key === "enter") {
  //     fetch`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fcf1ff081291ca0c2f0ebb5a035c8636`
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setQuery("");
  //         setWeather(result);
  //       });
  //   }
  // };

  return (
    <>
      {/* <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "app.warm"
              : "app"
            : "app"
        }
      >
        <main>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyUp={Search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name},{weather.sys.country}
                </div>
                <div className="date">{buildDate(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}'C</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
      </div> */}
      <Weather />
    </>
  );
}

export default App;
