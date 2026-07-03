import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaPhoneAlt,
} from "react-icons/fa";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/current-projects", icon: <FaBuilding /> },
    { name: "Career", path: "/career", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t md:hidden z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-xs ${
              location.pathname === item.path
                ? "text-green-600"
                : "text-gray-500"
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;