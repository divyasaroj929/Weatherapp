import { useState } from "react";
import "./App.css";
import Weather from "./COMPONENTS/Weather";
const api = {
  key: "fcf1ff081291ca0c2f0ebb5a035c8636",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  return (
    <>
      <Weather />
    </>
  );
}

export default App;
