"use client";
import React, { useState } from "react";

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="w-64 h-[calc(100vh-64px)] md:h-[calc(-100vh+80px)] lg:h-[100vh] overflow-y-auto bg-gray-900 text-white">
    {children}
  </aside>
);

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b border-gray-700">{children}</div>
);

export const SidebarBody = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2">{children}</div>
);

export const SidebarSection = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

export const SidebarLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-gray-400 uppercase font-bold px-4 py-2">
    {children}
  </div>
);

export const SidebarItem = ({
  icon,
  label,
  href,
  badge,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!children;
  const content = (
    <div
      className="flex items-center justify-between px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
      onClick={() => hasChildren && setOpen(!open)}
    >
      <div className="flex items-center space-x-2">
        {icon && <span className="w-5 h-5">{icon}</span>}
        <span className="text-sm">{label}</span>
      </div>
      {badge && <span>{badge}</span>}
    </div>
  );

  return (
    <div>
      <button
        onClick={() => hasChildren && setOpen(!open)} // ✅ Cleaned logic
        className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-gray-800 focus:outline-none" // ✅ Added `text-white` for clarity
      >
        {/* Left section: icon + label */}
        <span className="flex items-center space-x-2">
          {icon && <span className="w-5 h-5">{icon}</span>}{" "}
          {/* ✅ Safe render + consistent sizing */}
          <span>{label}</span>
        </span>

        {/* Right section: badge + arrow */}
        <span className="flex items-center space-x-1">
          {badge}
          {hasChildren && <span>{open ? "▾" : "▸"}</span>}
        </span>
      </button>

      {/* Dropdown area */}
      {hasChildren && open && <div className="pl-8">{children}</div>}
    </div>
  );
};
