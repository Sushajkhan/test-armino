import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/apiConfig";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { loading, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${BASE_URL}/api/user/login`;
      const response = await axios.post(url, credentials, {
        withCredentials: true, // Set withCredentials to true
      });
      // const data = await response.json();

      if (response.status == 200) {
        dispatch({ type: "LOGIN", payload: response });

        console.log("login success");
        navigate("/home");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-8 md:p-14"
          >
            <span className="mb-3 text-3xl font-bold">Login</span>
            <span className="font-light text-gray-400 mb-8">
              Login to see the Weather Details
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-[#171717] hover:text-white "
            >
              Login
            </button>

            <div className="text-center text-gray-400">
              Dont'have an account?
              <span className="font-bold text-black">
                <Link to="/register">
                  <span></span>Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
