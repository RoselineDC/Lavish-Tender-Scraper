'use client'
import React, { useState } from 'react'

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="w-64 h-[2] overflow-y-auto bg-gray-900 text-white">{children}</aside>
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

export const SidebarItem = ({
  icon,
  label,
  href,
  badge,
  children,
}: {
  icon?: React.ReactNode
  label: string
  href?: string
  badge?: React.ReactNode
  children?: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)
  const hasChildren = !!children

  return (
    <div>
      <button
        onClick={() => (hasChildren ? setOpen(!open) : null)}
        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800 focus:outline-none"
      >
        <span className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </span>
        <span className="flex items-center space-x-1">
          {badge}
          {hasChildren && <span>{open ? '▾' : '▸'}</span>}
        </span>
      </button>
      {hasChildren && open && <div className="pl-8">{children}</div>}
    </div>
  )
}
