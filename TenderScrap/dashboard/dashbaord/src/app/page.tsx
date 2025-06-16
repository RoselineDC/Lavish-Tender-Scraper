"use client";

import React, { useState } from "react";
import UpNavBar from "@/components/Navbar/Navbar";
import {
  Search,
  LayoutDashboard,
  Table,
  ChartSpline,
  BookType,
  SquarePen,
  Mail,
  Files,
  Wrench,
  CalendarDays,
} from "lucide-react";

// import { Table } from "lucide-react";
// import Dashboard from "../components/Dashboard/dashboard";
// import Image from "next/image";

import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarItem,
} from "@/components/Navbar/sidebar";
export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div c">
      <div className="flex-1 flex flex-col">
        <UpNavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to e-Tenders
          </h1>
          <p className="text-gray-600">
            This is your dashboard. Use the menu on the left to navigate through
            Charts, Tenders, Forms, and more.
          </p>
        </main>
      </div>
      <div className="flex  overflow-hidden">
        {showSidebar && (
          <Sidebar>
            <div className="bg-gray-800 text-white p-4 rounded-b-md shadow-sm">
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/profilr.jpg" // Update path as needed
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
              <div className="text-gray-400 font-small text-lg">Main Menu</div>
            </SidebarHeader>

            <SidebarBody>
              <SidebarItem
                label="Dashboard"
                icon={<LayoutDashboard className="w-5 h-5" />}
              />
              <SidebarItem
                label="Charts"
                icon={<ChartSpline className="w-5 h-5" />}
              >
                <div className="bg-gray-800 p-2 rounded-md w-full">
                  <div className="ml-6 space-y-2 text-fuchsia-400">
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on Bar Chart")}
                    >
                      Weekly progress
                    </div>
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on Line Chart")}
                    >
                      Monthly progress
                    </div>
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on Pie Chart")}
                    >
                      Progress Report
                    </div>
                  </div>
                </div>
              </SidebarItem>
              <SidebarItem
                label="TENDERS"
                icon={<BookType className="w-5 h-5" />}
              >
                <div className="bg-gray-800 p-2 rounded-md w-full">
                  <div className="ml-6 space-y-2 text-fuchsia-400">
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on Transnet")}
                    >
                      transnet
                    </div>
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on CSIR")}
                    >
                      csir
                    </div>
                    <div
                      className="hover:text-white cursor-pointer"
                      onClick={() => alert("Clicked on oTHERS")}
                    >
                      others
                    </div>
                  </div>
                </div>
              </SidebarItem>
              <SidebarItem
                label="Forms"
                icon={<SquarePen className="w-5 h-5" />}
              />
              <SidebarItem
                label="Mailbox"
                icon={<Mail className="w-5 h-5" />}
              />
              <SidebarItem
                label="Documents"
                icon={<Files className="w-5 h-5" />}
              />
              <SidebarItem
                label="Calender"
                icon={<CalendarDays className="w-5 h-5" />}
              />
              <SidebarItem
                label="Settings"
                icon={<Wrench className="w-5 h-5" />}
              />
            </SidebarBody>
          </Sidebar>
        )}
      </div>
    </>
  );
}
