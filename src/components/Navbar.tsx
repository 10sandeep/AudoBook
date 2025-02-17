import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, User } from 'lucide-react';
import { useStore } from '../store/useStore';
import Logo from './assets/logo.png'; // Ensure the correct path
import PlayStore from './assets/play store.png';

export function Navbar() {
  const { darkMode, toggleDarkMode, user } = useStore();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[80%] 
      bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/30 dark:border-gray-700 
      shadow-lg rounded-full px-6 py-2 z-50 transition-all">
      
      <div className="flex justify-between items-center h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-12 drop-shadow-md" />
          <span className="text-2xl font-extrabold text-gray-800 dark:text-white">
            <span className="text-pink-500">Audo</span>Book
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search audiobooks & podcasts..."
              className="w-full px-4 py-2 pl-10 rounded-full bg-white/20 dark:bg-black/20 
              text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 
              shadow-md placeholder-gray-500 dark:placeholder-gray-400 transition-all"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-300" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">

          {/* Download App */}
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-pink-700 
            text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            <img src={PlayStore} alt="Play Store" className="h-6 w-6" />
            <span className="font-semibold">Download App</span>
          </button>

          {/* Free Trial */}
          <button className="px-5 py-2 bg-pink-700 text-white font-bold rounded-full shadow-md 
            hover:bg-pink-800 transition-all duration-300">
            Free Trial
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-all"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-500 dark:text-white" />
            )}
          </button>

          {/* User Profile/Login */}
          {user ? (
            <Link to="/profile" className="flex items-center space-x-2">
              <img
                src={user.avatar_url || 'https://via.placeholder.com/32'}
                alt={user.full_name}
                className="h-9 w-9 rounded-full border-2 border-pink-500 shadow-md"
              />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 text-gray-800 dark:text-white 
              font-medium rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition-all"
            >
              <User className="h-6 w-6 text-gray-500 dark:text-white" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
