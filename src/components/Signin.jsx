// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
   
//     if (email === "admin@example.com" && password === "password") {
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials. Try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200" >
//       <div className="bg-white p-8 rounded-lg shadow-lg w-150 text-center">

//          {/* Login Image */}
//          <div className="w-full mb-4">
//           <img
//             src="assets/login.jpg"
//             alt="Login"
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//         </div>

//         <h2 className="text-2xl font-bold mb-6">Sign in</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <FaEnvelope className="text-gray-500 mr-2" />
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full bg-transparent outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <FaLock className="text-gray-500 mr-2" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full bg-transparent outline-none"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-rose-900 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition"
//           >
//             Sign in
//           </button>
//         </form>

//         <p className="text-sm text-gray-600 mt-4">
//           New User?{" "}
//           <Link to="/register" className="text-blue-600 font-medium">
//             Create a new account!
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "password") {
      navigate("/");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-teal-100 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">

        {/* Image */}
        <img
          src="/assets/login.jpg"
          alt="Login"
          className="w-full h-52 object-cover"
        />

        {/* Form */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-center text-green-700">
            Sign In
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Welcome back! Please login.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label className="font-medium">Email</label>

              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaEnvelope className="text-gray-500 mr-3" />

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="font-medium">Password</label>

              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaLock className="text-gray-500 mr-3" />

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#" className="text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign In
            </button>
          </form>

          {/* Register */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;