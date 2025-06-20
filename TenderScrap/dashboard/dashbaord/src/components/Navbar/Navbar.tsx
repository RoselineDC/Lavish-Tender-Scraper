'use client';

import { FaBars, FaEnvelope, FaBell, FaFlag, FaCog } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image'; 
import Dashboard from '../../app/dashboard/dashboard'; // Adjust the import path as necessary
export default function UpNavBar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <><div className="bg-gray-500 px-4 py-2 flex items-center justify-center">
       <div className="text-white font-semibold text-lg">
        e<span className="font-normal">-Tenders</span>
      </div>
    </div>
    <header className="bg-gray-400 px-4 py-2 flex justify-between items-center">
      
      {/* Left menu icon */}
      <div className="text-white text-xl" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Center title */}
     

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
          src="/profilr.jpg" 
          alt="Profile"
          className="w-8 h-8 rounded-full border border-white"
        /><p>
        <span className="text-white font-semibold">Lynne</span>
        </p>

        {/* Settings Icon */}
        <FaCog className="text-white" />
      </div>
    </header>
   
    </>
  );
}
