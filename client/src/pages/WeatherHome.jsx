import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherMain from "../components/WeatherMain";
import Humidity from "../components/Humidity";
import Precipitation from "../components/Precipitation";
import Wind from "../components/Wind";
import Forecast from "../components/Forecast";

const WeatherHome = () => {
  return (
    <>
      <div>
        <SearchBar />
        <WeatherMain />
        <Forecast />
      </div>
    </>
  );
};

export default WeatherHome;
