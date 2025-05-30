
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
  Heart,
  Shield,
  Globe
} from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer className="glass-effect py-16 mt-24 border-t border-red-400/20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-gradient mb-4">👁️ VisionForAll</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing free prescription glasses to those in need worldwide. Clear vision is a human right, not a privilege.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-red-400/10 hover:text-red-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-red-400/10 hover:text-red-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-red-400/10 hover:text-red-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-red-400/10 hover:text-red-400">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get Help</h3>
            <ul className="space-y-3">
              <li><a href="/virtual-try-on" className="text-gray-400 hover:text-red-400 transition-colors">Apply for Free Glasses</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-red-400 transition-colors">Browse Available Frames</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-red-400 transition-colors">Eligibility Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Prescription Upload</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Support Our Mission</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Make a Donation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Corporate Sponsorship</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Fundraise</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Get updates on our impact and mission</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-red-500 to-green-500">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm">100% Free Service</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm">Privacy Protected</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Global Reach</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Phone className="w-5 h-5 text-red-400" />
            <span className="text-gray-400">+1 (555) VISION-1</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Mail className="w-5 h-5 text-red-400" />
            <span className="text-gray-400">help@visionforall.org</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-gray-400">Global Organization</span>
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 VisionForAll. All rights reserved. Registered 501(c)(3) nonprofit organization.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
