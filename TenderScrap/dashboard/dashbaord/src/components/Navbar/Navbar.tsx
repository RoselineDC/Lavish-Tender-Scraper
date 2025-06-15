import React from 'react';

econst Navbar = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">{children}</nav>
);

export const NavbarItem = ({ children, href = '#', className = '', ...props }: any) => (
  <a href={href} className={`mx-2 flex items-center space-x-1 ${className}`} {...props}>
    {children}
  </a>
);

export const NavbarDivider = ({ className = '' }: { className?: string }) => <div className={`w-px h-6 bg-gray-300 ${className}`} />;
export const NavbarSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => <div className={`flex items-center space-x-2 ${className}`}>{children}</div>;
export const NavbarSpacer = () => <div className="flex-1" />;
export const NavbarLabel = ({ children }: { children: React.ReactNode }) => <span>{children}</span>;

