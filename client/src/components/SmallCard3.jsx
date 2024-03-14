import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const SmallCard3 = () => {
  const { weatherData } = useContext(WeatherContext);
  let visibility = "0";
  if (weatherData && weatherData.visibility) {
    visibility = (weatherData.visibility * 0.000621371).toFixed(2);
  }
  return (
    <div>
      <div className="flex flex-col items-center p-8 rounded-lg w-60 sm:px-12 text-white bg-black">
        <div className="">
          <h2 className="text-xl font-semibold mb-10">Air Pressure</h2>
          <h1 className="text-6xl flex">
            {visibility} <span className="text-lg mt-7"> miles</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SmallCard3;
