import React, { useEffect, useRef, useState } from "react";
import { BiStreetView } from "react-icons/bi";
import "./Style.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("raipur");

  const timer = useRef();
  useEffect(() => {
    // const apiCall = async () => {
    //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fcf1ff081291ca0c2f0ebb5a035c8636`;
    //   const responce = await fetch(url);
    //   console.log(responce);
    //   const resjson = await responce.json();
    //   console.log(resjson);
    if (timer) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      let apiCall = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fcf1ff081291ca0c2f0ebb5a035c8636`;
        const responce = await fetch(url);
        console.log(responce);
        const resjson = await responce.json();
        console.log(resjson, "hjj");
        setCity(resjson.main);
      };
      // setCity(resjson.main);
      apiCall();

      console.log("call");
    }, 4000);
    // };
    // apiCall();
  }, [search]);
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

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="text"
            className="input-filed"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            // value={search}
          />
        </div>

        {!city ? (
          <p>not found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <BiStreetView className="street" />
                {search}
              </h2>
              <h1 className="tempcrture">{city.temp}&deg;C</h1>
              <div className="info-bottom">
                <h3 className="tempcrture-max">
                  min : {city.temp_min}&deg;Cel | max : {city.temp_max}&deg;Cel
                </h3>
                <div className="date">{buildDate(new Date())}</div>
              </div>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
