import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Moon, Sun, User, Menu } from "lucide-react";
import { useStore } from "../store/useStore";
import Logo from "./assets/logo.png";
import PlayStore from "./assets/play store.png";

export function Navbar() {
  const { darkMode, toggleDarkMode, user } = useStore();
  const [searchText, setSearchText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[80%] 
        bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-gray-300/50 dark:border-gray-600/50 
        shadow-md rounded-full px-4 py-2 z-50 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-8 w-10" />
            <span className="text-xl font-poppins font-bold text-gray-800 dark:text-white">
              <span className="text-pink-500">Audo</span>Book
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex font-poppins flex-1 max-w-sm mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-2 pl-10 pr-10 rounded-full bg-white/30 dark:bg-black/20 
              text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 
              border border-gray-300/50 hover:border-pink-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-300" />
            {searchText && (
              <button
                onClick={() => setSearchText("")}
                className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-300 hover:text-pink-500"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Download App */}
          <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-700 
            text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300">
            <img src={PlayStore} alt="Play Store" className="h-6 w-6" />
            <span className="font-poppins font-semibold">Download</span>
          </button>

          {/* Free Trial */}
          <button className="px-4 py-2 bg-pink-600 text-white font-poppins font-semibold rounded-full shadow-md hover:bg-pink-700">
            Free Trial
          </button>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-500 dark:text-white" />}
          </button>

          {/* Show Login/Signup OR User Profile */}
          {user ? (
            <Link to="/profile">
              <img src={user.avatar_url || 'https://via.placeholder.com/32'} alt={user.full_name} className="h-9 w-9 rounded-full border-2 border-pink-500" />
            </Link>
          ) : (
            <Link 
              to="/signin" 
              className="px-4 py-2 bg-gray-800 text-white font-poppins font-semibold rounded-full shadow-md hover:bg-gray-900">
              Login / Signup
            </Link>
          )}
        </div>
      </nav>
      
      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="w-64 bg-white dark:bg-gray-900 p-5 shadow-lg h-full">
            <button className="mb-5 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 dark:text-white font-bold text-lg">Home</Link>
              <Link to="/categories" className="text-gray-800 dark:text-white font-bold text-lg">Categories</Link>
              <Link to="/about" className="text-gray-800 dark:text-white font-bold text-lg">About</Link>
              <button className="px-4 py-2 bg-pink-600 text-white font-bold rounded-full shadow-md hover:bg-pink-700">Free Trial</button>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-500 dark:text-white" />}
              </button>
              {/* Show Login/Signup in Sidebar */}
              {!user && (
                <Link 
                  to="/signin" 
                  className="px-4 py-2 bg-gray-800 text-white font-poppins font-semibold rounded-full shadow-md hover:bg-gray-900">
                  Login / Signup
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
