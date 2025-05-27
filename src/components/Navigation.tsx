
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            DotGlasses
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
            <Link to="/virtual-try-on" className="text-gray-300 hover:text-white transition-colors">Virtual Try-On</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Button className="pulse-glow">Shop Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
