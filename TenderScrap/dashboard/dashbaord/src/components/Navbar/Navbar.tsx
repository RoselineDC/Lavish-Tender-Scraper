'use client';

import { FaBars, FaEnvelope, FaBell, FaFlag, FaCog } from 'react-icons/fa';
import React, { useState } from 'react';

export default function UpNavBar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      <div>
      {/* Sidebar */}
      {showSidebar && (
        <aside className="w-64 h-screen overflow-y-auto bg-gray-900 text-white fixed top-0 left-0 z-50">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>
          <div className="px-2">
            <ul>
              <li className="py-2 px-4 hover:bg-gray-800 cursor-pointer">Dashboard</li>
              <li className="py-2 px-4 hover:bg-gray-800 cursor-pointer">Settings</li>
            </ul>
          </div>
        </aside>
       
      )}
    </div>
    <header className="bg-gray-500 px-4 py-2 flex justify-between items-center">
      
      {/* Left menu icon */}
      <div className="text-white text-xl" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Center title */}
      <div className="text-white font-semibold text-lg">
        e<span className="font-normal">-Tenders</span>
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
