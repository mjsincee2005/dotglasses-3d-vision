
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useThreeJS } from "@/hooks/useThreeJS";
import { ArrowDown, Heart, Users, Gift } from "lucide-react";

const HeroSection = () => {
  const { canvasRef, isLoaded } = useThreeJS();
  const [currentImpact, setCurrentImpact] = useState(0);
  
  const impactStats = [
    { number: "50,000+", text: "Lives Changed", icon: "👁️" },
    { number: "120", text: "Countries Served", icon: "🌍" },
    { number: "Free", text: "For Everyone", icon: "💝" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImpact((prev) => (prev + 1) % impactStats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        id="three-canvas"
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Heart className="w-8 h-8 text-red-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-300">
          <Gift className="w-6 h-6 text-green-400 opacity-40" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`space-y-8 ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
            {/* Impact Indicator */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-full p-6 border border-red-500/30">
                <div className="text-4xl mb-2">{impactStats[currentImpact].icon}</div>
                <div className="text-2xl font-bold text-gradient">{impactStats[currentImpact].number}</div>
                <div className="text-sm text-gray-300">{impactStats[currentImpact].text}</div>
              </div>
            </div>

            <Badge className="glass-effect text-red-400 border-red-400/30 mb-4 animate-pulse">
              <Heart className="w-4 h-4 mr-2" />
              Changing Lives Through Clear Vision
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
              <span className="text-gradient animate-[gradient_3s_ease-in-out_infinite]">Free</span>
              <br />
              <span className="text-white drop-shadow-2xl">Glasses</span>
              <br />
              <span className="text-gradient animate-[gradient_3s_ease-in-out_infinite_reverse]">For All</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everyone deserves clear vision. We provide free prescription glasses to those who need them most.
              <span className="text-gradient font-semibold"> No cost, no barriers, just better sight.</span>
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto my-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-gray-400">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">120</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-gray-400">Free</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link to="/virtual-try-on">
                <Button size="lg" className="text-lg px-10 py-6 pulse-glow bg-gradient-to-r from-red-500 to-green-500 hover:from-red-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Free Glasses
                  <Gift className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-6 glass-effect border-green-400/30 text-green-400 hover:bg-green-400/10 transform hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Learn Our Mission
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToFeatures}>
              <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-gray-400 text-sm">Discover How We Help</span>
                <ArrowDown className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
