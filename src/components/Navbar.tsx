import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, User } from 'lucide-react';
import { useStore } from '../store/useStore';
import Logo from './assets/logo.png'; // Ensure the correct path
import PlayStore from './assets/play store.png';

export function Navbar() {
  const { darkMode, toggleDarkMode, user } = useStore();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-secondary shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <img src={Logo} alt="Logo" className="h-8 w-9" />
            <span className="text-2xl font-bold text-primary text-pink-800">
              <span className="text-slate-400">Audo</span>Book
            </span>
          </Link>

          {/* Download App Button with Play Store Icon */}
          <div className="-m-20 flex items-center">
            <button className="flex items-center space-x-2 border border-pink-700 px-4 py-2 rounded-full font-semibold text-pink-700">
              <img src={PlayStore} alt="Play Store" className="h-6 w-6" />
              <span>DOWNLOAD APP</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search audiobooks and podcasts..."
                className="w-full px-4 py-2 rounded-full bg-secondary/100 dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-foreground/60" />
            </div>
          </div>

          {/* Free Trial Button */}
          <div className="-m-20">
            <button className="px-4 py-2 m-2 rounded-full bg-pink-700 text-white font-serif font-bold">
              FREE TRIAL
            </button>
          </div>

          {/* Dark Mode Toggle & User Profile/Login */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-background/50"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-foreground/60" />
              ) : (
                <Moon className="h-5 w-5 text-foreground/60" />
              )}
            </button>

            {user ? (
              <Link
                to="/profile"
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-background/50"
              >
                <img
                  src={user.avatar_url || 'https://via.placeholder.com/32'}
                  alt={user.full_name}
                  className="h-8 w-8 rounded-full"
                />
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-background/50"
              >
                <User className="h-5 w-5 text-foreground/60" />
                <span className="text-sm font-medium text-slate-500">
                  Sign In
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
