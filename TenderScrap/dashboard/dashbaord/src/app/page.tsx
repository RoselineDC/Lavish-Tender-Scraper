import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Navbar onToggle={() => setShowSidebar(!showSidebar)} />
        <main className="p-4">
          <h2>Welcome to the homepage!</h2>
        </main>
      </div>
    </div>
  )
}
