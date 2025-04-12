
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 right-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-end">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button className="bg-gradient-to-r from-[#0d2d4e] to-[#1c2a71] hover:opacity-90">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Button className="bg-gradient-to-r from-[#0d2d4e] to-[#1c2a71] hover:opacity-90 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
