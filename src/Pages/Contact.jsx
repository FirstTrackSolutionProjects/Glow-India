// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 text-center relative">
//       {/* Image First */}
//       <div className="w-full mb-8">
//         <img 
//           src="/assets/contact.jpg"  
//           alt="Office Location" 
//           className="w-full h-auto rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Phone Section */}
//       <div className="mb-8">
//         <FaPhoneAlt className="text-4xl text-red-800 mx-auto mb-3" />
//         <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-500 transition duration-300">
//           <a href="tel:+919337545249">+91  9337545249</a> 
//         </h3>
//         <p className="text-gray-700">Talk to a Customer Service Representative for help with our site, app, or finding an agent.</p>
//       </div>

//       {/* Message Section */}
//       <div className="mb-8">
//         <FaEnvelope className="text-4xl text-red-800 mx-auto mb-3" />
//         <h3 className="text-2xl font-bold text-gray-900">Message us</h3>
//         <a href="mailto:info@Glowindia.co.in" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-300">
//           info@glowindia.co.in
//         </a>
//         <p className="text-gray-700 mt-2">Send our Customer Service Team questions about our site, app, or finding an agent.</p>
//       </div>

//       {/* Address Section */}
//       <div className="mb-8">
//         <FaMapMarkerAlt className="text-4xl text-red-800 mx-auto mb-3" />
//         <h3 className="text-2xl font-bold text-gray-900">Our Office</h3>
//         <p className="text-gray-700">CHP -29/30, Kanan Vihar, Phase 1, Patia, Bhubaneswar, Odisha -751002</p>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a 
//         href="https://wa.me/919337545249?text=Hello,%20I%20am%20interested%20in%20your%20real%20estate%20services." 
//         target="_blank" 
//         rel="noopener noreferrer" 
//         className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
//       >
//         <FaWhatsapp size={28} />
//       </a>
//     </div>
//   );
// };

// export default Contact;






import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-16 text-center text-white">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          We're always here to help you find your dream property.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div>
            <img
              src="/assets/contact.jpg"
              alt="Office"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-3xl text-emerald-600" />
                <div>
                  <h2 className="text-xl font-bold">Call Us</h2>
                  <a
                    href="tel:+919337545249"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    +91 9337545249
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-3xl text-emerald-600" />
                <div>
                  <h2 className="text-xl font-bold">Email</h2>
                  <a
                    href="mailto:info@glowindia.co.in"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    info@glowindia.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-3xl text-emerald-600" />
                <div>
                  <h2 className="text-xl font-bold">Office Address</h2>
                  <p className="text-gray-600">
                    CHP-29/30, Kanan Vihar Phase-1, Patia,
                    Bhubaneswar, Odisha - 751024
                  </p>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919337545249?text=Hello%20Glow%20India%20Parivar"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  );
};

export default Contact;