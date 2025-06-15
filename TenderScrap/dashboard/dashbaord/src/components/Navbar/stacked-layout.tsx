import React from 'react';

export const StackedLayout = ({ navbar, sidebar, children }: {
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen">
      {sidebar}
      <div className="flex flex-col flex-1">
        {navbar}
        <main className="p-6 overflow-auto flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};