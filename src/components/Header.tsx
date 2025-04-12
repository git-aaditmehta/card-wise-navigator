
import React, { useState } from 'react';
import { Menu, X, CreditCard, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <CreditCard className="h-7 w-7 text-cardwise-teal-500" />
            <h1 className="text-xl font-bold text-cardwise-blue-500">CardWise</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Home</Link>
          <Link to="#features" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Features</Link>
          <Link to="#compare" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Compare Cards</Link>
          <Link to="/learning-center" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Learning Center
          </Link>
          <Link to="#profile" className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors">Create Profile</Link>
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
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2" 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="#features" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2" 
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="#compare" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2"
              onClick={toggleMenu}
            >
              Compare Cards
            </Link>
            <Link 
              to="/learning-center" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2 flex items-center gap-1"
              onClick={toggleMenu}
            >
              <BookOpen className="h-4 w-4" />
              Learning Center
            </Link>
            <Link 
              to="#profile" 
              className="text-foreground/80 hover:text-cardwise-teal-500 transition-colors py-2"
              onClick={toggleMenu}
            >
              Create Profile
            </Link>
            <Button className="bg-cardwise-teal-500 hover:bg-cardwise-teal-600 w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
