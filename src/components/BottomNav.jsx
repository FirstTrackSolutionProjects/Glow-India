import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";

const BottomNav = () => {
  const location = useLocation();
  

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/current-projects", icon: <FaBuilding /> },
    { name: "Career", path: "/career", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Account", path: "/account", icon: <FaUserCircle /> },
  ];

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md md:hidden z-50">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 px-2 py-2">
          <div className="flex justify-between items-center">
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                      active
                        ? "bg-green-600 text-white shadow-lg scale-110"
                        : "text-gray-500 hover:bg-green-100 hover:text-green-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`text-[11px] mt-1 font-medium ${
                      active ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Account */}
            <Link
  to="/account"
  className="flex flex-col items-center flex-1"
>
  <div
    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
      location.pathname === "/account"
        ? "bg-blue-600 text-white shadow-lg scale-110"
        : "text-gray-500 hover:bg-blue-100 hover:text-blue-600"
    }`}
  >
    <FaUserCircle />
  </div>

  <span
    className={`text-[11px] mt-1 font-medium ${
      location.pathname === "/account"
        ? "text-blue-600"
        : "text-gray-500"
    }`}
  >
    Account
  </span>
</Link>
          </div>
        </div>
      </div>

  
    </>
  );
};

export default BottomNav;







// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaBuilding,
//   FaBriefcase,
//   FaPhoneAlt,
//   FaUserCircle,
//   FaTimes,
// } from "react-icons/fa";

// const BottomNav = () => {
//   const location = useLocation();
//   const [showLogin, setShowLogin] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/", icon: <FaHome /> },
//     { name: "Projects", path: "/current-projects", icon: <FaBuilding /> },
//     { name: "Career", path: "/career", icon: <FaBriefcase /> },
//     { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
//   ];

//   return (
//     <>
//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t md:hidden z-50">
//         <div className="flex justify-around py-2">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`flex flex-col items-center text-xs ${
//                 location.pathname === item.path
//                   ? "text-green-600"
//                   : "text-gray-500"
//               }`}
//             >
//               <div className="text-xl">{item.icon}</div>
//               <span>{item.name}</span>
//             </Link>
//           ))}

//           {/* Account Button */}
//           <button
//             onClick={() => setShowLogin(true)}
//             className="flex flex-col items-center text-xs text-gray-500"
//           >
//             <div className="text-xl">
//               <FaUserCircle />
//             </div>
//             <span>Account</span>
//           </button>
//         </div>
//       </div>

//       {/* Login Popup */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[100]">
//           <div className="bg-white rounded-xl w-80 p-6 relative shadow-xl">
//             {/* Close */}
//             <button
//               onClick={() => setShowLogin(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
//             >
//               <FaTimes size={20} />
//             </button>

//             <h2 className="text-xl font-bold text-center mb-6">
//               Login As
//             </h2>

//             <div className="space-y-4">
//               {/* Admin Login */}
//               <Link
//                 to="/admin-login"
//                 onClick={() => setShowLogin(false)}
//                 className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
//               >
//                 Admin Login
//               </Link>

//               {/* Member Login */}
//               <Link
//                 to="/member-login"
//                 onClick={() => setShowLogin(false)}
//                 className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
//               >
//                 Member Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BottomNav;