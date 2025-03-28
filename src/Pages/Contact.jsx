import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center relative">
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
          <a href="tel:+919337545049">+91  9337545049</a> 
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

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919337545049?text=Hello,%20I%20am%20interested%20in%20your%20real%20estate%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Contact;
