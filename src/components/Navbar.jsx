import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // ✅ Added
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName)); // ✅ Added
  };

  return (
    <header className="bg-gradient-to-r from-rose-200  to-rose-400  text-white shadow-lg animate-gradient-x h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center p-2 ">
        {/* logo */}
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="h-12 w-auto object-cover text-4xl font-bold border-4 border-black"
          />
          <h1 className="text-lg font-bold drop-shadow-lg flex flex-col justify-between leading-5">
            <p className="text-blue-800 ">GLOW</p>
            <p className="text-black">INDIA</p>
          </h1>
        </div>

        <nav className="space-x-6 hidden md:flex items-center">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="block w-full text-left cursor-pointer"
          >
            Home
          </button>

          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>

          {/* Properties Dropdown
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center space-x-1">
              <span>Properties</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <Link to="/simplex" className="block px-4 py-2 hover:bg-blue-800">Simplex</Link>
              <Link to="/duplex" className="block px-4 py-2 hover:bg-blue-800">Duplex</Link>
              <Link to="/bungalow" className="block px-4 py-2 hover:bg-blue-800">Bungalow</Link>
              <Link to="/land-plot" className="block px-4 py-2 hover:bg-blue-800">Land/Plot</Link>
            </div>
          </div>
          */}

          {/* Location Dropdown */}
          {/* <div className="relative group z-50">
            <button className="hover:text-gray-200 flex items-center space-x-1 ">
              <span>Location</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/puri" className="block px-4 py-2 hover:bg-blue-800">Puri</Link>
              <Link to="/cuttack" className="block px-4 py-2 hover:bg-blue-800">Cuttack</Link>
              <Link to="/bbsr" className="block px-4 py-2 hover:bg-blue-800">Bhubaneswar</Link>
            </div>
          </div> */}

          <Link to="/blog" className="hover:text-gray-200">
            Blog
          </Link>

          {/* Events Dropdown */}
          <div className="relative group z-50">
            <button className="hover:text-gray-200 flex items-center space-x-1 ">
              <span>Event</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                to="/upcoming-event"
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Upcoming Event
              </Link>
              <Link
                to="/past-event"
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Past Event
              </Link>
            </div>
          </div>

          {/* Dropdown: Projects */}
            <div className="relative group z-50">
            <button className="hover:text-gray-200 flex items-center space-x-1 ">
              <span>Projects</span> <FaChevronDown />
            </button>
            <div className="absolute left-0 mt-1 bg-blue-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                to="/current-projects"
                className="block px-4 py-2 hover:bg-blue-800"
              >
               Current Projects
              </Link>
              <Link
                to="/new-projects"
                className="block px-4 py-2 hover:bg-blue-800"
              >
                New Projects
              </Link>
              <Link
                to="/mission2030"
                className="block px-4 py-2 hover:bg-blue-800"
              >
                Mission 2030
              </Link>
            </div>
          </div>

          <Link to="/career" className="hover:text-gray-200">
            Career
          </Link>

          {/* <Link to="/investment" className="hover:text-gray-200">Investment</Link> */}

          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>

          {/* FIXED LOGIN BUTTON */}
          <button
            onClick={() => navigate("/signin")}
            className="hover:text-gray-200 cursor-pointer  whitespace-nowrap"
          >
           Sign in
          </button>

          <Link
            to="/join-us"
            className="hover:text-gray-200 inline-block whitespace-nowrap"
          >
            Join Us
          </Link>
        </nav>

        <button onClick={toggleSidebar} className="md:hidden text-white">
          <FaBars
            size={28}
            className="hover:scale-110 transform transition-all duration-300"
          />
        </button>
      </div>

      <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Navbar;
