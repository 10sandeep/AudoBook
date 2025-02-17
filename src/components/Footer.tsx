import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-bold">COMPANY</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">GENERAL</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Partner Program</a></li>
            <li><a href="#" className="hover:underline">Kuku FM for Business</a></li>
            <li><a href="#" className="hover:underline">Creator Login</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">LEGAL</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Payments Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Piracy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Report Abuse (DMCA)</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">GENRES</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Love</a></li>
            <li><a href="#" className="hover:underline">Personal Finance</a></li>
            <li><a href="#" className="hover:underline">Historical</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Religion</a></li>
            <li><a href="#" className="hover:underline">Self Help</a></li>
            <li><a href="#" className="hover:underline">All Genres</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        <p>&copy; 2025 AudoBook @All Rights Reserved</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-gray-200 text-2xl"><FaFacebook /></a>
          <a href="#" className="text-white hover:text-gray-200 text-2xl"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-gray-200 text-2xl"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-gray-200 text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-white hover:text-gray-200 text-2xl"><FaYoutube /></a>
        </div>
    </footer>
  );
};

export default Footer;
