'use client'

import React, { useState } from 'react'
import UpNavBar from '@/components/Navbar/Navbar'
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarItem,
} from '@/components/Navbar/sidebar/
export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex">
      {showSidebar && (
        <Sidebar>
          <SidebarHeader>Menu</SidebarHeader>
          <SidebarBody>
            <SidebarItem label="Dashboard" />
            <SidebarItem label="Settings" />
          </SidebarBody>
        </Sidebar>
      )}

      <div className="flex-1">
        <UpNavBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main className="p-4">
          <h1 className="text-xl">Welcome to e-Tenders</h1>
        </main>
      </div>
    </div>
  )
}
