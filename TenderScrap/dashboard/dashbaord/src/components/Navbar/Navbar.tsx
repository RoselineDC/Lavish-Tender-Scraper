import React from 'react';

const Navbar = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">{children}</nav>
);

export default Navbar;
\

