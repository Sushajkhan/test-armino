import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeatherHome from "./pages/WeatherHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<WeatherHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
