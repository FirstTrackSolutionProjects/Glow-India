// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Signin = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "admin@example.com" && password === "password") {
//       navigate("/");
//     } else {
//       alert("Invalid Email or Password!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-teal-100 px-4 py-8">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">

//         {/* Image */}
//         <img
//           src="/assets/login.jpg"
//           alt="Login"
//           className="w-full h-52 object-cover"
//         />

//         {/* Form */}
//         <div className="p-6">
//           <h2 className="text-3xl font-bold text-center text-green-700">
//             Sign In
//           </h2>

//           <p className="text-center text-gray-500 mt-2 mb-6">
//             Welcome back! Please login.
//           </p>

//           <form onSubmit={handleLogin} className="space-y-5">

//             {/* Email */}
//             <div>
//               <label className="font-medium">Email</label>

//               <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
//                 <FaEnvelope className="text-gray-500 mr-3" />

//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   className="w-full outline-none"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="font-medium">Password</label>

//               <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
//                 <FaLock className="text-gray-500 mr-3" />

//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="w-full outline-none"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Remember Me */}
//             <div className="flex justify-between items-center text-sm">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" />
//                 Remember Me
//               </label>

//               <a href="#" className="text-green-600 hover:underline">
//                 Forgot Password?
//               </a>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Register */}
//           <p className="text-center mt-6 text-gray-600">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-green-600 font-semibold hover:underline"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;





import React from "react";
import { FaUserShield, FaUsers, FaUserCircle } from "react-icons/fa";

const  Signin= () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

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

export default Signin;