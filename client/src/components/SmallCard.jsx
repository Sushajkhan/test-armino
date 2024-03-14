import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const SmallCard = () => {
  const { weatherData } = useContext(WeatherContext);
  let humidity = "0";
  if (weatherData && weatherData.main && weatherData.main.humidity) {
    humidity = weatherData.main.humidity;
  }
  return (
    <div>
      <div className="flex flex-col items-center p-8 rounded-xl w-full md:w-60 sm:w-60 sm:px-12 text-white bg-black">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-10">Humidity</h2>
          <h1 className="text-6xl ">{humidity} %</h1>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
