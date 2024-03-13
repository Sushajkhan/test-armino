import { CalendarDays, Clock, MapPin, Pin } from "lucide-react";
import Humidity from "./Humidity";
import Precipitation from "./Precipitation";
import Wind from "./Wind";
import Forecast from "./Forecast";

const WeatherMain = () => {
  return (
    <div className="flex gap-20 ">
      <div
        className="relative flex mx-6 flex-col  items-center w-full md:w-1/4 overflow-hidden rounded-3xl bg-black p-6 "
        id="widget"
      >
        <div className="absolute -bottom-20  z-10 h-96 rounded-full"></div>
        <div className="z-10 w-full flex flex-col">
          <div className="flex w-full justify-between text-sm text-blue-50 ">
            <div className="flex gap-2 font-semibold">Friday</div>
            <div className="flex gap-2">
              <Clock />
              14.00
            </div>
            <div className="flex gap-2">
              <CalendarDays />
              10.05.23
            </div>
          </div>
          <div className="flex w-full justify-center mt-10">
            <img
              src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_19-512.png"
              className="tranform my-6 w-32 duration-200 hover:scale-105"
            />
          </div>
          <div className="flex w-full flex-col items-center  ">
            <h2 className="text-7xl font-extrabold text-white ">
              32<sup className="text-5xl font-medium">o</sup>
            </h2>
            <p className="text-white font-bold mt-4 flex gap-2 ">
              <MapPin />
              Miami
            </p>
          </div>
          <div className="mt-10 flex w-full justify-center text-sm text-blue-50">
            <p className="text-xs">Description</p>
          </div>
          <button
            className="mt-5 group relative rounded-xl  inline-flex items-center overflow-hidden  bg-white px-8 py-3 text-black focus:outline-none  active:bg-gray-800 active:text-white"
            href="#"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <Pin />
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              Bookmark Location
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Humidity />
        <Precipitation />
        <Wind />
      </div>
    </div>
  );
};

export default WeatherMain;
