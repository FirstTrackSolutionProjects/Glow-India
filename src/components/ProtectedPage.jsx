// import React, { useState } from "react";

// const ProtectedPage = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [inputPassword, setInputPassword] = useState("");

//   const correctPassword = "joinus123";

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (inputPassword === correctPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Incorrect password. Please try again.");
//     }
//   };

//   if (isAuthenticated) {
//     return <>{children}</>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handlePasswordSubmit}
//         className="bg-white shadow-md rounded-md p-6 w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
//           Enter Password :
//         </h2>
//         <input
//           type="password"
//           placeholder="Password"
//           value={inputPassword}
//           onChange={(e) => setInputPassword(e.target.value)}
//           className="border border-gray-300 p-2 rounded-md w-full mb-4"
//         />
//         <button
//           type="submit"
//           className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProtectedPage;

import React, { useState } from "react";

const ProtectedPage = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const password = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === password) {
      setAuthorized(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-teal-700 mb-2">
             Private Access Only
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            This content is password protected. Please enter the password to proceed.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <label className="block text-lg font-semibold text-gray-800">
              Enter Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;
