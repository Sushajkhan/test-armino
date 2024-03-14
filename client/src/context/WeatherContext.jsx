import { createContext, useState } from "react";

// Create the WeatherContext
const WeatherContext = createContext();

// Create the WeatherProvider
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
