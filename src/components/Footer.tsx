
import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-effect py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient mb-4">DotGlasses</div>
          <p className="text-gray-400 mb-6">Revolutionizing vision, one pair at a time.</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
