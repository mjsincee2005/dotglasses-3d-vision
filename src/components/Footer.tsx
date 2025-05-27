
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer className="glass-effect py-16 mt-24 border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-gradient mb-4">DotGlasses</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing vision, one pair at a time. Experience the future of eyewear with our cutting-edge 3D technology.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/collections" className="text-gray-400 hover:text-primary transition-colors">Collections</a></li>
              <li><a href="/virtual-try-on" className="text-gray-400 hover:text-primary transition-colors">Virtual Try-On</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Prescription</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest designs and exclusive offers</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm">Premium Quality</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">Secure Shopping</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Truck className="w-5 h-5 text-primary" />
            <span className="text-sm">Fast Delivery</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-gray-400">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-gray-400">hello@dotglasses.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-gray-400">San Francisco, CA</span>
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 DotGlasses. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
