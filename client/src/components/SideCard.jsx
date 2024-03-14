import { CalendarDays, LocateFixed, MapPin, Pin } from "lucide-react";
import WeatherContext from "../context/WeatherContext";
import { useContext, useState } from "react";
import {
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayCloudyWindy,
  WiDayRain,
  WiDayShowers,
  WiDaySunnyOvercast,
  WiDayThunderstorm,
  WiFog,
  WiNightAltSnow,
} from "weather-icons-react";
import { API_KEY, BASE_API_URL, BASE_URL } from "../utils/apiConfig";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const SideCard = () => {
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  // Access current Location and update weather
  const handleLocationClick = async () => {
    try {
      if (navigator.geolocation) {
        const position = await getCurrentPosition();
        success(position);
      } else {
        console.log("Geolocation not supported");
      }
    } catch (error) {
      console.log("Unable to retrieve your location");
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const success = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocation({ lat, lon });
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
    console.log(weatherData);

    try {
      const response = await axios.get(
        `${BASE_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      const data = response.data;
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get weather icon based on Description
  const getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return <WiDaySunnyOvercast />;
      case "few clouds":
        return <WiDayCloudy />;
      case "scattered clouds":
        return <WiDayCloudyHigh />;
      case "broken clouds":
        return <WiDayCloudyWindy />;
      case "shower rain":
        return <WiDayShowers />;
      case "rain":
        return <WiDayRain />;
      case "thunderstorm":
        return <WiDayThunderstorm />;
      case "snow":
        return <WiNightAltSnow />;
      case "mist":
        return <WiFog />;
      default:
        return null;
    }
  };

  // Default values for temperature and date
  let temp = "00.00";
  const { day, date } = getFormattedDayAndDate();

  // Formatted day and date
  function getFormattedDayAndDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();
    return {
      day: today.toLocaleDateString("en-US", { weekday: "long" }),
      date: today.toLocaleDateString("en-US", options),
    };
  }

  // Weather description based on temperature
  function getWeatherDescription(temp) {
    if (temp < -10) {
      return "Brrr! It's freezing cold out there!";
    } else if (temp < 0) {
      return "Bundle up, it's chilly!";
    } else if (temp < 10) {
      return "A bit cool today, grab a jacket.";
    } else if (temp < 20) {
      return "Nice weather for a stroll.";
    } else if (temp < 30) {
      return "Enjoy the warmth!";
    } else if (temp < 35) {
      return "Stay hydrated, it's getting hot!";
    } else if (temp < 40) {
      return "It's scorching out there!";
    } else {
      return "Extreme heat warning!";
    }
  }

  // Set the temperature and description
  if (weatherData && weatherData.main && weatherData.main.temp) {
    temp = (weatherData.main.temp - 273.15).toFixed(2);
  }
  const description = getWeatherDescription(temp);

  // Weather icon based on weather description
  let weatherIcon = null;
  if (
    weatherData &&
    weatherData.weather &&
    weatherData.weather[0]?.description
  ) {
    weatherIcon = getWeatherIcon(weatherData.weather[0].description);
  }

  let city = undefined;
  let userId = undefined;

  if (weatherData?.name) {
    city = weatherData.name;
  }
  if (user?.data?._id) {
    userId = user?.data?._id;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userId);

    try {
      const url = `${BASE_URL}/api/user/location/save`;
      const response = await axios.post(
        url,
        { city, userId },
        {
          withCredentials: true, // Set withCredentials to true
        }
      );

      if (response.status == 201) {
        console.log("location saved ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full md:w-1/3 h-screen">
      <div
        className="h-full flex flex-col items-center w-full overflow-hidden rounded-3xl bg-black p-6"
        id="widget"
      >
        <div className="w-max-content h-full rounded-full">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex w-full justify-between text-sm text-blue-50 gap-20">
              <div className="flex gap-2 font-semibold">{day}</div>
              <div className="flex gap-2">
                <CalendarDays />
                {date}
              </div>
            </div>
            <button
              onClick={handleLocationClick}
              className="flex justify-center gap-3 text-white mt-10 mb-6"
            >
              <LocateFixed /> <span>Access your Location</span>
            </button>
            <div className="flex w-full justify-center mt-2">
              {weatherIcon && (
                <div className="mr-16 transform w-32 duration-200 hover:scale-105 text-white">
                  <div className="text-[200px]">{weatherIcon}</div>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col items-center">
              <h2 className="text-7xl font-extrabold text-white">
                {temp}
                <sup className="text-5xl font-medium">o</sup>
              </h2>
              <p className="text-white font-bold mt-4 flex gap-2">
                <MapPin />
                {weatherData.name}
              </p>
            </div>
            <div className="mt-20 flex w-full justify-center text-sm text-blue-50">
              <p className="text-lg font-mono">{description}</p>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-20 group relative rounded-2xl inline-flex items-center overflow-hidden bg-white px-8 py-3 text-black focus:outline-none active:bg-gray-800 active:text-white w-[210px]"
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
      </div>
    </div>
  );
};

export default SideCard;
