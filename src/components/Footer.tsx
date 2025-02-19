import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Section */}
        <div>
          <h2 className="text-lg font-poppins font-semibold">COMPANY</h2>
          <ul className="mt-2 font-poppins  space-y-2">
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Our Team</a></li>
          </ul>
        </div>

        {/* General Section */}
        <div>
          <h2 className="text-lg font-poppins font-semibold">GENERAL</h2>
          <ul className="mt-2 font-poppins space-y-2">
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Help & Support</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Partner Program</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">AudoBook for Business</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Creator Login</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="text-lg font-poppins font-semibold">LEGAL</h2>
          <ul className="mt-2 font-poppins  space-y-2">
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Payments Policy</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Piracy Policy</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Report Abuse (DMCA)</a></li>
          </ul>
        </div>

        {/* Genres Section */}
        <div>
          <h2 className="text-lg font-poppins font-semibold">GENRES</h2>
          <ul className="mt-2 font-poppins space-y-2">
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Love</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Personal Finance</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Historical</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Information</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Career</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Religion</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">Self Help</a></li>
            <li><a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition">All Genres</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright & Social Links */}
      <div className="text-center font-poppins font-bold mt-8 text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 AudoBook @ All Rights Reserved</p>
      </div>

      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
          <FaYoutube size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
