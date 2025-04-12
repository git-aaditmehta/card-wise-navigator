
import React, { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="h-7 w-7 text-cardwise-teal-500" />
          <h1 className="text-xl font-bold text-cardwise-blue-500">CardWise</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Features</a>
          <a href="#compare" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Compare Cards</a>
          <a href="#profile" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Create Profile</a>
          <Button className="bg-cardwise-teal-500 hover:bg-cardwise-teal-600">Get Started</Button>
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
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2" 
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#compare" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2"
              onClick={toggleMenu}
            >
              Compare Cards
            </a>
            <a 
              href="#profile" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2"
              onClick={toggleMenu}
            >
              Create Profile
            </a>
            <Button className="bg-cardwise-teal-500 hover:bg-cardwise-teal-600 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
