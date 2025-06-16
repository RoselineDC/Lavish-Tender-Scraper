"use client";

import React, { useState } from "react";
import UpNavBar from "@/components/Navbar/Navbar";
import { Search } from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarItem,
} from "@/components/Navbar/sidebar";
export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="flex-1 flex flex-col">
        <UpNavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="flex-1 overflow-y-auto">
          {/* <h1 className="text-xl">Welcome to e-Tenders</h1> */}
        </main>
      </div>
      <div className="flex  overflow-hidden">
        {showSidebar && (
          <Sidebar>
            <div className="bg-gray-800 text-white p-4 rounded-b-md shadow-sm">
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/profile.jpg" // Update path as needed
                  alt="Profile"
                  className="w-12 h-12 rounded-full border border-white"
                />
                <div>
                  <h3 className="font-semibold text-sm">Lynne Dangazela</h3>
                  <p className="flex items-center text-green-400 text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-1" />
                    Online
                  </p>
                </div>
              </div>

              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 pl-10 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <SidebarHeader>
              <div className="text-white font-semibold text-lg">Main Menu</div>
            </SidebarHeader>

            <SidebarBody>
              <SidebarItem label="Profile">
                <div className="bg-gray-800 text-white p-4 rounded-b-md shadow-sm">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-4">
                    {/* User Avatar */}
                    <img
                      src="/profilr.jpg"
                      alt="Profile"
                      className="w-8 h-8 rounded-full border border-white"
                    />
                    <div>
                      <h3 className="font-semibold text-sm">Lynne Dangazela</h3>
                      <p className="flex items-center text-green-400 text-xs">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-1" />
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Search Box */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 pl-10 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </SidebarItem>
              <SidebarItem label="Dashboard" />
              <SidebarItem label="Settings" />
              <SidebarItem label="Profile" />
              <SidebarItem label="Notifications" />
            </SidebarBody>
          </Sidebar>
        )}
      </div>
    </>
  );
}
