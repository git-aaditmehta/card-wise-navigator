
import React from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
};

export default Layout;
