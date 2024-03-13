import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeatherHome from "./pages/WeatherHome";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<WeatherHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
