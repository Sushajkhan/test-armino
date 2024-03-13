import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import WeatherMain from "../components/WeatherMain";
import Humidity from "../components/Humidity";
import Precipitation from "../components/Precipitation";
import Wind from "../components/Wind";
import Forecast from "../components/Forecast";
import { AuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";

const WeatherHome = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <div>
          <SearchBar />
          {/* <WeatherMain /> */}
          <Forecast />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default WeatherHome;
