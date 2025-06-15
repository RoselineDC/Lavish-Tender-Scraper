import React from 'react';

export const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="w-64 h-full border-r bg-white shadow-sm hidden lg:block">{children}</aside>
);

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b">{children}</div>
);

export const SidebarBody = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 overflow-y-auto">{children}</div>
);

export const SidebarItem = ({ children, href = '#' }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
    {children}
  </a>
);

export const SidebarSection = ({ children }: { children: React.ReactNode }) => <div className="mb-4">{children}</div>;
export const SidebarLabel = ({ children }: { children: React.ReactNode }) => <span className="ml-2">{children}</span>;


