import React from "react";
import { FaUserShield, FaUsers, FaUserCircle } from "react-icons/fa";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
      <img
          src="/assets/login.jpg"
          alt="Login"
          className="w-full h-52 object-cover"
        />

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center">
            <FaUserCircle size={55} />
          </div>

          <h2 className="text-3xl font-bold mt-4">
            Welcome
          </h2>

          <p className="mt-2 text-green-100">
            Please choose your login type
          </p>
        </div>

        {/* Buttons */}
<div className="p-6 space-y-5">

  {/* Admin Login */}
  <a
    href="https://myglowindia.com/admin_cpanel"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
  >
    <FaUserShield />
    Admin Login
  </a>

  {/* Member Login */}
  <a
    href="https://myglowindia.com/member"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
  >
    <FaUsers />
    Member Login
  </a>

</div>

      </div>
    </div>
  );
};

export default Account;