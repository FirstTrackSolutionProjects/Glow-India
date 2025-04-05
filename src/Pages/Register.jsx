import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-white p-8 rounded-lg shadow-lg">


       {/* Login Image */}
       <div className="w-full mt-22">
          <img
            src="assets/register.jpg"
            alt="Login"
            className="w-full h-60 object-cover rounded-t-lg"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 m-5">Register</h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <span className="px-3 text-gray-500"><FaUser /></span>
            <input type="text" placeholder="Your Full Name" className="w-full p-3 focus:outline-none" />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <span className="px-3 text-gray-500"><FaEnvelope /></span>
            <input type="email" placeholder="you@example.com" className="w-full p-3 focus:outline-none" />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <span className="px-3 text-gray-500"><FaLock /></span>
            <input type="password" placeholder="Password" className="w-full p-3 focus:outline-none" />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <span className="px-3 text-gray-500"><FaLock /></span>
            <input type="password" placeholder="Confirm Password" className="w-full p-3 focus:outline-none" />
          </div>

          {/* Mobile Number */}
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
            <span className="px-3 text-gray-500"><FaPhone /></span>
            <input type="tel" placeholder="1234567890" className="w-full p-3 focus:outline-none" />
          </div>

          {/* Register Button */}
          <button className="w-full bg-rose-900 text-white py-3 rounded-lg font-semibold  transition">
            Register
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-700 mt-4 mb-22">
          Already have an account? 
          <span 
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          > Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
