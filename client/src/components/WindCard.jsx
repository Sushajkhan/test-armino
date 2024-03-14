import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WindCard = () => {
  const { weatherData } = useContext(WeatherContext);
  let wind = "0";
  if (weatherData && weatherData.wind && weatherData.wind.speed) {
    wind = (weatherData.wind.speed * 2.23694).toFixed(2);
  }
  return (
    <div>
      <div className="flex flex-col items-center p-8 rounded-xl w-full md:w-60 sm:w-60  sm:px-12 text-white bg-black">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-10">Wind Speed</h2>
          <h1 className="text-6xl flex ">
            {wind} <span className="text-lg mt-7">mph</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WindCard;
