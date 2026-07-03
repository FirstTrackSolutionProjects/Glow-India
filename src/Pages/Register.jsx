// import React from "react";
// import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-[600px] bg-white p-8 rounded-lg shadow-lg text-center">


//        {/* Login Image */}
//        {/* <div className="w-full">
//           <img
//             src="assets/register.jpg"
//             alt="Login"
//             className="w-full h-60 object-cover rounded-lg"
//           />
//         </div> */}

//         <h2 className="text-3xl font-bold text-center text-gray-900 m-5">Register</h2>

//         <form className="space-y-4">
//           {/* Full Name */}
//           <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
//             <span className="px-3 text-gray-500"><FaUser /></span>
//             <input type="text" placeholder="Your Full Name" className="w-full p-3 focus:outline-none" />
//           </div>

//             {/* Mobile Number */}
//             <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
//             <span className="px-3 text-gray-500"><FaPhone /></span>
//             <input type="tel" placeholder="1234567890" className="w-full p-3 focus:outline-none" />
//           </div>


//           {/* Email */}
//           <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
//             <span className="px-3 text-gray-500"><FaEnvelope /></span>
//             <input type="email" placeholder="you@example.com" className="w-full p-3 focus:outline-none" />
//           </div>

//           {/* Password */}
//           <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
//             <span className="px-3 text-gray-500"><FaLock /></span>
//             <input type="password" placeholder="Password" className="w-full p-3 focus:outline-none" />
//           </div>

//           {/* Confirm Password */}
//           <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
//             <span className="px-3 text-gray-500"><FaLock /></span>
//             <input type="password" placeholder="Confirm Password" className="w-full p-3 focus:outline-none" />
//           </div>

        
//           {/* Register Button */}
//           <button className="w-full bg-rose-900 text-white py-3 rounded-lg font-semibold  transition">
//             Register
//           </button>
//         </form>

//         {/* Sign In Link */}
//         <p className="text-center text-gray-700 mt-5">
//           Already have an account? 
//           <span 
//             className="text-blue-600 font-semibold hover:underline cursor-pointer"
//             onClick={() => navigate("/login")}
//           > Sign In</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-teal-100 px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md overflow-hidden">

        {/* Image */}
        <img
          src="/assets/register.jpg"
          alt="Register"
          className="w-full h-52 object-cover"
        />

        {/* Form */}
        <div className="p-6">

          <h2 className="text-3xl font-bold text-center text-green-700">
            Register
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-6">
            Create your account to continue.
          </p>

          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="font-medium">Full Name</label>
              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="font-medium">Mobile Number</label>
              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaPhone className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email</label>
              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full outline-none"
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
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-medium">Confirm Password</label>
              <div className="flex items-center border rounded-lg px-3 py-3 mt-2">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <span>I agree to the Terms & Conditions</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Register
            </button>
          </form>

          {/* Sign In */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;