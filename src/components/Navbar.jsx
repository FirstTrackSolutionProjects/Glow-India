import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-gradient-to-r from-rose-200  to-rose-400  text-white shadow-lg animate-gradient-x mb-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.jpg" alt="Logo" className="h-16 w-auto object-cover text-4xl font-bold border-4 border-black -ml-2" />
          <h1 className="text-2xl font-bold drop-shadow-lg mt-6">
             <span className="text-blue-800">GLOW</span> <span className="text-black">INDIA</span>
          </h1>

        </div>
        <nav className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>

          {/* Properties Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center space-x-1">
              <span>Properties</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/simplex" className="block px-4 py-2 hover:bg-blue-800">Simplex</Link>
              <Link to="/duplex" className="block px-4 py-2 hover:bg-blue-800">Duplex</Link>
              <Link to="/bungalow" className="block px-4 py-2 hover:bg-blue-800">Bungalow</Link>
              <Link to="/land-plot" className="block px-4 py-2 hover:bg-blue-800">Land/Plot</Link>
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center space-x-1">
              <span>Location</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/puri" className="block px-4 py-2 hover:bg-blue-800">Puri</Link>
              <Link to="/cuttack" className="block px-4 py-2 hover:bg-blue-800">Cuttack</Link>
              <Link to="/bbsr" className="block px-4 py-2 hover:bg-blue-800">Bhubaneswar</Link>
            </div>
          </div>

          <Link to="/blog" className="hover:text-gray-200">Blog</Link>

          {/* Events Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center space-x-1">
              <span>Events</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/upcoming-events" className="block px-4 py-2 hover:bg-blue-800">Upcoming Events</Link>
              <Link to="/past-events" className="block px-4 py-2 hover:bg-blue-800">Past Events</Link>
            </div>
          </div>

          <Link to="/career" className="hover:text-gray-200">Career</Link>
          <Link to="/investment" className="hover:text-gray-200">Investment</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/login" className="hover:text-gray-200">Login/signup</Link>
        </nav>
        <button onClick={toggleSidebar} className="md:hidden text-white">
      <FaBars size={28} className="hover:scale-110 transform transition-all duration-300" />
    </button>
      </div>
      <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Navbar;

