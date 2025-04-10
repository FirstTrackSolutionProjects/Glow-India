import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
   
    if (email === "admin@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200" >
      <div className="bg-white p-8 rounded-lg shadow-lg w-150 text-center">

         {/* Login Image */}
         <div className="w-full mb-4">
          <img
            src="assets/login.jpg"
            alt="Login"
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-900 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          New User?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Create a new account!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;