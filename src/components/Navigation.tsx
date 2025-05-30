
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Users } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
              👁️ VisionForAll
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/virtual-try-on" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Get Free Glasses
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/collections" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Our Frames
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                Our Mission
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-red-400/10">
                  <Heart className="w-5 h-5 text-red-400" />
                </Button>
                <Button className="pulse-glow bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
        <div className={`absolute right-0 top-0 h-full w-80 glass-effect p-6 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-16 space-y-6">
            <Link
              to="/virtual-try-on"
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Get Free Glasses
            </Link>
            <Link
              to="/collections"
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Our Frames
            </Link>
            <Link
              to="/about"
              className="block text-lg text-gray-300 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Our Mission
            </Link>
            <div className="pt-6 space-y-4">
              <Button variant="outline" className="w-full border-green-400/30 text-green-400">
                <Users className="w-4 h-4 mr-2" />
                Volunteer
              </Button>
              <Button className="w-full pulse-glow bg-gradient-to-r from-red-500 to-green-500">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
