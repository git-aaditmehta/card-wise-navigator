
import React from 'react';
import CollapsibleSidebar from './CollapsibleSidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <CollapsibleSidebar />
      <div className="transition-all duration-300 flex-1 ml-64 md:ml-64 sm:ml-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
