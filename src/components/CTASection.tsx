
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Users, Star, Globe, HandHeart, Gift } from "lucide-react";

const CTASection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Philippines",
      content: "I couldn't afford glasses for years. VisionForAll changed my life - now I can see my children's faces clearly!",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      location: "Egypt",
      content: "Free glasses helped me continue my studies. Education became possible again thanks to clear vision.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      location: "Kenya",
      content: "As a teacher, I needed glasses to help my students. This program made it possible to keep teaching.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Lives Changed" },
    { icon: Globe, value: "120", label: "Countries Served" },
    { icon: Heart, value: "100%", label: "Free Service" },
    { icon: HandHeart, value: "24/7", label: "Support Available" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-transparent to-green-400/20"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group">
                <Card className="glass-effect p-6 hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <Card className="glass-effect p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[currentTestimonial].rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <blockquote className="text-lg text-gray-300 mb-4 italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            <div className="text-white font-semibold">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-gray-400 text-sm">
              {testimonials[currentTestimonial].location}
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-400 w-8' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Main CTA */}
        <Card className="glass-effect p-12 max-w-5xl mx-auto relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 via-green-400/10 to-red-400/10 animate-pulse"></div>
          
          <div className="relative z-10">
            <Badge className="mb-6 glass-effect text-red-400 border-red-400/30 animate-bounce">
              <Heart className="w-4 h-4 mr-2" />
              Free Vision for Everyone
            </Badge>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to See the <span className="text-gradient animate-[gradient_2s_ease-in-out_infinite]">World Clearly</span>?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands who've received free glasses through our mission. 
              <span className="text-gradient font-semibold"> Clear vision should never be a luxury.</span>
            </p>
            
            <Separator className="my-8 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
            
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Link to="/virtual-try-on" className="group">
                <Button size="lg" className="text-lg px-10 py-6 pulse-glow bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 transform group-hover:scale-105 transition-all duration-300">
                  <Gift className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Your Free Glasses
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              
              <Link to="/about" className="group">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-lg px-10 py-6 text-green-400 hover:bg-green-400/10 border border-green-400/30 transform group-hover:scale-105 transition-all duration-300"
                >
                  <HandHeart className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Support Our Mission
                </Button>
              </Link>
            </div>

            {/* Service Features */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                100% Free Service
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Global Shipping Included
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                Prescription Lenses Available
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
