"use client";

import React, { useState } from "react";
import UpNavBar from "@/components/Navbar/Navbar";
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
            <SidebarHeader>Menu</SidebarHeader>
            <SidebarBody>
              <SidebarItem label="Profile">
   
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
