'use client'
import React, { useState } from 'react'

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="w-64 h-[calc(100vh-64px)] md:h-[calc(-100vh+80px)] lg:h-[100vh] overflow-y-auto bg-gray-500 text-white">{children}</aside>
)

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b border-gray-700">{children}</div>
)

export const SidebarBody = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2">{children}</div>
)

export const SidebarSection = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

export const SidebarLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-400 uppercase font-bold px-4 py-2">{children}</div>
)

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-4 h-4" />,
    children: [
      { label: "Dashboard v1", icon: <></> },
      { label: "Dashboard v2", icon: <></> },
    ],
  },
  {
    label: "Layout Options",
    icon: <Square className="w-4 h-4" />,
    badge: "4",
  },
  {
    label: "Widgets",
    icon: <Grid className="w-4 h-4" />,
    badge: "new",
  },
  {
    label: "Charts",
    icon: <BarChart2 className="w-4 h-4" />,
  },
  {
    label: "UI Elements",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    label: "Forms",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    label: "Tables",
    icon: <Square className="w-4 h-4" />,
  },
  {
    label: "Calendar",
    icon: <Calendar className="w-4 h-4" />,
    badge: "17",
  },
  {
    label: "Mailbox",
    icon: <Mail className="w-4 h-4" />,
    badge: "5",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <aside className="w-64 h-screen bg-[#222d32] text-white flex flex-col">
      {/* Profile */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-700">
        <img
          src="/profilr.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Alexander Pierce</p>
          <span className="text-xs text-green-400">● Online</span>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-2">
        <div className="bg-[#1a2226] p-2 rounded flex items-center">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm w-full outline-none text-white"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
        <p className="text-xs uppercase text-gray-400 mt-4 px-2">
          Main Navigation
        </p>
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() =>
                setOpen(open === item.label ? null : item.label)
              }
              className="w-full flex items-center justify-between p-2 hover:bg-[#1e282c] rounded"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
              {item.children && (
                open === item.label ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
              {!item.children && item.badge && (
                <span
                  className={`text-xs ml-auto px-2 py-0.5 rounded ${
                    item.badge === "new"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>

            {/* Subitems */}
            {open === item.label && item.children && (
              <div className="ml-6 space-y-1">
                {item.children.map((sub) => (
                  <div
                    key={sub.label}
                    className="p-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}