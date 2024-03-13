import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/apiConfig";
import axios from "axios";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${BASE_URL}/api/user/register`;
      const { data: res } = await axios.post(url, credentials);
      console.log(res.message);
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 300 &&
        err.response.status <= 500
      ) {
        console.log(err.response.data.message);
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
            <span className="mb-3 text-3xl font-bold">Create an Acoount!</span>
            <span className="font-light text-gray-400 mb-8">
              Please enter your details
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="userName"
                id="username"
                onChange={handleChange}
                // value={credentials.username}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                onChange={handleChange}
                // value={credentials.email}
                required
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
                // value={credentials.password}
                required
              />
            </div>

            <button
              // disabled={loading}
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-[#171717] hover:text-white"
            >
              Register{" "}
            </button>

            <div className="text-center text-gray-400">
              Already have an account?
              <span className="font-bold text-black">
                <Link to="/login">Login</Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
