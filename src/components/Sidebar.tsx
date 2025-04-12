
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  User, 
  CreditCard, 
  TrendingUp, 
  Trophy, 
  Lightbulb, 
  Settings, 
  Heart
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#0d2d4e] to-[#1c2a71] text-white flex flex-col">
      {/* Logo section */}
      <div className="p-5 flex items-center gap-2">
        <CreditCard className="h-7 w-7 text-[#88e0ff]" />
        <h1 className="text-2xl font-bold text-white">CardMatch Pro</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-8">
        <ul className="space-y-3 px-5">
          <li>
            <Link to="/" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <Home className="h-5 w-5 text-[#88e0ff]" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <User className="h-5 w-5 text-[#88e0ff]" />
              <span>My Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/recommendations" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <div className="h-5 w-5 text-[#4ce089] flex items-center justify-center">
                <span className="text-xl">✓</span>
              </div>
              <span>Recommendations</span>
            </Link>
          </li>
          <li>
            <Link to="/cards" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <CreditCard className="h-5 w-5 text-[#88e0ff]" />
              <span>My Cards</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <TrendingUp className="h-5 w-5 text-[#88e0ff]" />
              <span>Spending Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/rewards" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <Trophy className="h-5 w-5 text-[#ffd700]" />
              <span>Rewards Tracker</span>
            </Link>
          </li>
          <li>
            <Link to="/learning" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <Lightbulb className="h-5 w-5 text-[#e6ac00]" />
              <span>Learning Center</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-3 py-2 hover:text-[#88e0ff] transition-colors">
              <Settings className="h-5 w-5 text-[#88e0ff]" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-5 flex flex-col items-center text-sm text-center">
        <Heart className="h-4 w-4 text-[#ff6b8a] mb-1" />
        <p>© 2025 CardMatch Pro</p>
      </div>
    </div>
  );
};

export default Sidebar;
