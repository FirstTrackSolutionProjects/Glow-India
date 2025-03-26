import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 py-10 mt-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex-shrink-0">
            <img src="/assets/logo.jpg" alt="Logo" className="h-20 w-auto object-contain" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold drop-shadow-lg">
              <span className="text-blue-800">GLOW</span> <span className="text-black">INDIA</span>
            </h1>
            <p className="text-sm mt-2">
              We are committed to redefining modern living with exceptional real estate developments that blend innovation, luxury, and functionality.
            </p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/career" className="text-black">Career</Link></li>
            <li><Link to="/about" className="text-black">About</Link></li>
            <li><Link to="/blog" className="text-black">Blog</Link></li>
            <li><Link to="/terms" className="text-black">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="text-black">Privacy & Policy</Link></li>
            <li><Link to="/contact" className="text-black">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
        <h1 className="text-2xl font-bold drop-shadow-lg">
              <span className="text-blue-800">GLOW</span> <span className="text-black">INDIA</span> <span className="text-gray-700 block md:inline">CORPORATE OFFICE</span>
            </h1>
          <ul className="space-y-2 text-sm mt-3">
            <li className="flex items-center"><span className="mr-2">📞</span> +91 9439565249 / 9337545049</li>
            <li className="flex items-center"><span className="mr-2">📧</span> info@GlowIndia.co.in</li>
            <li className="flex items-center"><span className="mr-2">📍</span> CHP -29/30, Kanan Vihar, Phase 1, Patia, Bhubaneswar, Odisha -751002</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto px-4 mt-6 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-blue-400 text-lg"><FaFacebookF /></a>
          <a href="#" className="text-black hover:text-blue-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-black hover:text-blue-400 text-lg"><FaInstagram /></a>
          <a href="#" className="text-black hover:text-blue-400 text-lg"><FaLinkedinIn /></a>
          <a href="#" className="text-black hover:text-red-500 text-lg"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
        <p>Copyright © 2025 Glow India. All Rights Reserved.</p>
        <p>Developed by First Track Solution Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
