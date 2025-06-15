import React, { useState } from 'react'
// Make sure the file exists at ../components/Navbar.tsx or ../components/Navbar/index.tsx
import Navbarimport Sidebar from '../components/Sidebar'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Navbar onToggle={() => setShowSidebar(!showSidebar)} />
        <main className="p-4">
          <h2>Wel