
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  CreditCard, 
  TrendingUp, 
  Trophy, 
  Lightbulb, 
  Settings, 
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';

const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { path: '/', name: 'Dashboard', icon: Home },
    { path: '/profile', name: 'My Profile', icon: User },
    { path: '/recommendations', name: 'Recommendations', icon: () => (
      <div className="h-5 w-5 text-[#4ce089] flex items-center justify-center">
        <span className="text-xl">✓</span>
      </div>
    )},
    { path: '/cards', name: 'My Cards', icon: CreditCard },
    { path: '/analytics', name: 'Spending Analytics', icon: TrendingUp },
    { path: '/rewards', name: 'Rewards Tracker', icon: Trophy, iconColor: 'text-[#ffd700]' },
    { path: '/learning', name: 'Learning Center', icon: Lightbulb, iconColor: 'text-[#e6ac00]' },
    { path: '/settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-screen bg-gradient-to-b from-[#0d2d4e] to-[#1c2a71] text-white flex flex-col transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      {/* Toggle button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-20 bg-[#0d2d4e] text-white p-1 rounded-full shadow-md z-50"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      
      {/* Logo section */}
      <div className={cn(
        "p-5 flex items-center gap-2", 
        isCollapsed ? "justify-center" : ""
      )}>
        <CreditCard className="h-7 w-7 text-[#88e0ff]" />
        {!isCollapsed && <h1 className="text-2xl font-bold text-white">CardMatch Pro</h1>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-8">
        <ul className={cn(
          "space-y-3", 
          isCollapsed ? "px-2" : "px-5"
        )}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={cn(
                    "flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors rounded-md",
                    isActive ? "bg-white/10" : "",
                    isCollapsed ? "justify-center px-2" : "px-3"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  {typeof IconComponent === 'function' ? 
                    <IconComponent /> : 
                    <IconComponent className={cn("h-5 w-5 text-[#88e0ff]", item.iconColor)} />
                  }
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className={cn(
        "p-5 flex flex-col items-center text-sm text-center",
        isCollapsed ? "px-2" : ""
      )}>
        <Heart className="h-4 w-4 text-[#ff6b8a] mb-1" />
        {!isCollapsed && <p>© 2025 CardMatch Pro</p>}
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
