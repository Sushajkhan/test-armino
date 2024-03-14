import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { WeatherProvider } from "./context/WeatherContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
