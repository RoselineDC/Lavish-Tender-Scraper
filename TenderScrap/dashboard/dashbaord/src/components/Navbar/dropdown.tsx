import React, { ReactNode } from 'react';

export const Dropdown = ({ children }: { children: ReactNode }) => (
  <div className="relative inline-block text-left">{children}</div>
);

export const DropdownButton = ({ children, as: Component = 'button', className = '' }: any) => (
  <Component className={`flex items-center space-x-2 cursor-pointer ${className}`}>{children}</Component>
);

export const DropdownMenu = ({ children, className = '', anchor = 'bottom' }: any) => (
  <div className={`absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${className}`}>{children}</div>
);

export const DropdownItem = ({ children, href = '#' }: { children: ReactNode; href?: string }) => (
  <a href={href} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </a>
);

export const DropdownDivider = () => <hr className="my-1 border-gray-200" />;
export const DropdownLabel = ({ children }: { children: ReactNode }) => <span className="ml-2">{children}</span>;

