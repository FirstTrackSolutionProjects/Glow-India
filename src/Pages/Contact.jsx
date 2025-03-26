// import React from "react";
// import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-lg w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
        
       
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Contact Us</h2>

       
//         <form className="space-y-5">
         
//           <div>
//             <label className="block text-gray-700 font-medium flex items-center">
//               <FaUser className="mr-2 text-black" /> Name
//             </label>
//             <input 
//               type="text" 
//               className="w-full p-3 border rounded-lg" 
//               placeholder="Enter your name" 
//             />
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-medium flex items-center">
//               <FaEnvelope className="mr-2 text-black" /> Email
//             </label>
//             <input 
//               type="email" 
//               className="w-full p-3 border rounded-lg" 
//               placeholder="Enter your email" 
//             />
//           </div>

//           {/* Message Input */}
//           <div>
//             <label className="block text-gray-700 font-medium flex items-center">
//               <FaCommentDots className="mr-2 text-black" /> Message
//             </label>
//             <textarea 
//               className="w-full p-3 border rounded-lg" 
//               rows="4" 
//               placeholder="Your message"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button className="w-full flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md">
//             <FaPaperPlane className="mr-2" /> Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* Image First */}
      <div className="w-full mb-8">
        <img 
          src="/assets/contact.jpg"  
          alt="Office Location" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Phone Section */}
      <div className="mb-8">
        <FaPhoneAlt className="text-4xl text-red-800 mx-auto mb-3" />
        <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-500 transition duration-300">
          <a href="tel:+919439565249">+91 9439565249</a> / <a href="tel:+919337545049">9337545049</a>
        </h3>
        <p className="text-gray-700">Talk to a Customer Service Representative for help with our site, app, or finding an agent.</p>
      </div>

      {/* Message Section */}
      <div className="mb-8">
        <FaEnvelope className="text-4xl text-red-800 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-900">Message us</h3>
        <a href="mailto:info@Glowindia.co.in" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300">
          info@Glowindia.co.in
        </a>
        <p className="text-gray-700 mt-2">Send our Customer Service Team questions about our site, app, or finding an agent.</p>
      </div>

      {/* Address Section */}
      <div className="mb-8">
        <FaMapMarkerAlt className="text-4xl text-red-800 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-900">Our Office</h3>
        <p className="text-gray-700">CHP -29/30, Kanan Vihar, Phase 1, Patia, Bhubaneswar, Odisha -751002</p>
      </div>
    </div>
  );
};

export default Contact;
