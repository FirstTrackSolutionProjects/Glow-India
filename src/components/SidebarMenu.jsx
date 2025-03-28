import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className={`fixed max-h-[100vh] top-0 right-0 h-full w-80 bg-teal-800 text-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-sm z-50 overflow-y-auto max-h-screen`}
>

      {/* Close Button */}
      <div className="p-4 text-xl font-semibold border-b border-gray-400 flex justify-end items-center">
        <button onClick={toggleSidebar} className="text-black p-2 hover:text-red-500 transition duration-300">
          <FaTimes size={24} />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="p-4 space-y-2">
        {/* Home Button with onClick */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300 ">
          <button
            onClick={() => {
              navigate('/');
              toggleSidebar();
            }}
            className="block w-full text-left cursor-pointer"
          >
            Home
          </button>
        </li>

        {/* Static Links */}
        {['About'].map((item) => (
          <li key={item} className="hover:bg-yellow-200 p-2 rounded transition duration-300">
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
        ))}

         {/* Dropdown: Properties */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
         <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleDropdown("Properties")}
          >
          Properties{" "}
          <FaChevronDown
            className={`${
           activeDropdown === "Properties" ? "rotate-180" : ""
            } transition-transform duration-300`}
        />
      </div>
      {activeDropdown === "Properties" && (
        <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
        {["Simplex", "Duplex", "Cottage", "Land", "Apartment"].map(
        (item) => (
          <li
            key={item}
            className="hover:bg-gray-200 p-2 rounded transition duration-300"
          >
            <Link
              to={`/property/${item.toLowerCase().replace(" ", "-")}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
          )
        )}
        </ul>
          )}
        </li>


        {/* Dropdown: Location */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('Location')}>
            Location <FaChevronDown className={`${activeDropdown === 'Location' ? 'rotate-180' : ''} transition-transform duration-300`} />
          </div>
          {activeDropdown === 'Location' && (
            <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              {['Puri', 'Cuttack', 'Bhubaneswar'].map((item) => (
                <li key={item} className="hover:bg-gray-200 p-2 rounded transition duration-300">
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleSidebar}
                    className="block w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Static Links */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
          <Link to="/blog" onClick={toggleSidebar} className="block w-full">
            Blog
          </Link>
        </li>

        {/* Dropdown: Events */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown('Event')}>
            Event <FaChevronDown className={`${activeDropdown === 'Event' ? 'rotate-180' : ''} transition-transform duration-300`} />
          </div>
          {activeDropdown === 'Event' && (
            <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              {['Upcoming Event', 'Past Event'].map((item) => (
                <li key={item} className="hover:bg-gray-200 p-2 rounded transition duration-300">
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleSidebar}
                    className="block w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Dropdown: Upcoming Projects */}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
      <div
        className="flex justify-between items-center cursor-pointer"
         onClick={() => toggleDropdown('Projects')}
      >
        Projects
        <FaChevronDown
          className={`${activeDropdown === 'Projects' ?     'rotate-180' : ''} transition-transform     duration-300`}
        />
            </div>
      {activeDropdown === 'Projects' && (
        <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
          <li className="hover:bg-gray-200 p-2 rounded transition duration-300">
            <Link to="/current-projects" onClick=   {toggleSidebar} className="block w-full">
              Current Projects
            </Link>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded    transition duration-300">
            <Link to="/new-projects" onClick=   {toggleSidebar} className="block w-full">
          New Projects
            </Link>
          </li>
          <li className="hover:bg-gray-200 p-2 rounded    transition duration-300">
            <Link to="/mission-2030" onClick=   {toggleSidebar} className="block w-full">
              Mission 2030
            </Link>
            </li>
            </ul>
             )}
            </li>


        {/* Remaining Static Links */}
        {['Career', 'Contact', ].map((item) => (
          <li key={item} className="hover:bg-yellow-200 p-2 rounded transition duration-300">
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="hover:bg-yellow-200 p-2 rounded transition duration-300">
        <button
         onClick={() => {
          navigate('/login/signup');
          toggleSidebar(); 
        }}
         className="block w-full text-left"
        >
        Login/SignUp
      </button>
      </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;