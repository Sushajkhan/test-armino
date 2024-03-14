import { useContext, useState } from "react";
import { LogOut, Map, UserCog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { API_KEY, BASE_API_URL, BASE_URL } from "../utils/apiConfig";
import WeatherContext from "../context/WeatherContext";
import { toast } from "sonner";

const Header = ({ handleWeatherData }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user, dispatch } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const url = `${BASE_URL}/api/user/logout`;
      const response = await axios.post(url, {
        withCredentials: true, // Set withCredentials to true
      });

      if (response.status == 200) {
        dispatch({ type: "LOGOUT", payload: response });

        toast.success("logged out");
        navigate("/login");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  const [query, setQuery] = useState("");
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  const handleWeatherSearch = async (e) => {
    e.preventDefault();
    try {
      const city = query;
      const response = await fetch(
        `${BASE_API_URL}?q=${city}&appid=${API_KEY}`
      );
      const result = await response.json();
      setWeatherData(result);
      console.log(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col p-2 py-6 m-h-screen">
        <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky">
          <div
            className=" cursor-pointer  border-black border-2 rounded-[100px]"
            onClick={handleMenuToggler}
          >
            <img
              className="object-cover w-10 h-10 rounded-full "
              src="https://st.depositphotos.com/11576988/52897/v/450/depositphotos_528971950-stock-illustration-male-silhouette-person-black-symbol.jpg"
              alt=""
            />
          </div>

          <div
            className={` rounded-sm bg-background ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <div
              className="absolute start-0 z-20 mt-10 w-56 rounded-lg border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <Link
                  to="/bookmarks"
                  href="#"
                  className="flex w-full gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  <Map />
                  Saved Locations
                </Link>

                <button
                  onClick={handleLogOut}
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  <LogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
          <form
            action=""
            className=" rounded-full w-full  leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs sm:ml-10 md:ml-10"
            onSubmit={handleWeatherSearch}
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="  rounded-full w-full ml-10 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs sm:ml-10 md:ml-10"
              type="text"
              placeholder="Search"
              value={query}
            />
          </form>

          <div className="bg-black p-2 hover:bg-[#171717] cursor-pointer mx-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
