'use client';

import { FaBars, FaEnvelope, FaBell, FaFlag, FaCog } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-blue-600 px-4 py-2 flex justify-between items-center">
      {/* Left menu icon */}
      <div className="text-white text-xl">
        <FaBars />
      </div>

      {/* Center title */}
      <div className="text-white font-semibold text-lg">
        Admin<span className="font-normal">LTE</span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Mail Icon with badge */}
        <div className="relative text-white">
          <FaEnvelope />
          <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full px-1.5 text-white">4</span>
        </div>

        {/* Notification Icon with badge */}
        <div className="relative text-white">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-orange-400 text-xs rounded-full px-1.5 text-white">10</span>
        </div>

        {/* Flag Icon with badge */}
        <div className="relative text-white">
          <FaFlag />
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1.5 text-white">9</span>
        </div>

        {/* User Avatar */}
        <img
          src="/avatar.jpg" // Replace with your image path
          alt="User"
          className="w-8 h-8 rounded-full border border-white"
        />

        {/* Settings Icon */}
        <FaCog className="text-white" />
      </div>
    </header>
  );
}
