import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Register</h2>

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
        <p className="text-center text-gray-700 mt-4">
          Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
