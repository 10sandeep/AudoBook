import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import { X } from "lucide-react";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { darkMode } = useStore();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign up with:", { email, password });
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? "bg-black" : "bg-gray-100"}`}>
      <div className={`relative p-6 rounded-lg shadow-lg w-96 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        {/* Close Button */}
        <button onClick={() => navigate(-1)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:ring-pink-500" : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-pink-500"}`}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:ring-pink-500" : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-pink-500"}`}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-800 border-gray-600 text-white focus:ring-pink-500" : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-pink-500"}`}
            required
          />
          <button className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700 transition">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-pink-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
