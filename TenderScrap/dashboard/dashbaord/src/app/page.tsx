'use client'

import React, { useState } from 'react'
import UpNavBar from '@/components/Navbar/Navbar'
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarItem,
} from '@/components/Navbar/sidebar'
export default function Page() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex  overflow-hidden">
      {showSidebar && (
        <Sidebar>
          <SidebarHeader>Menu</SidebarHeader>
          <SidebarBody>
            <SidebarItem label="Dashboard" />
            <SidebarItem label="Settings" />
          </SidebarBody>
        </Sidebar>
      )}
    </div>
  )
}
