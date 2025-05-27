
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useThreeJS } from "@/hooks/useThreeJS";
import { ArrowDown, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const { canvasRef, isLoaded } = useThreeJS();
  const [currentModel, setCurrentModel] = useState(0);
  
  const models = [
    { name: "Classic", icon: "🕶️", color: "#60a5fa" },
    { name: "Modern", icon: "👓", color: "#a855f7" },
    { name: "Sport", icon: "🥽", color: "#ec4899" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModel((prev) => (prev + 1) % models.length);
    }, 4000);

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
          <Sparkles className="w-8 h-8 text-primary opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-300">
          <Zap className="w-6 h-6 text-secondary opacity-40" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`space-y-8 ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
            {/* Model Selector */}
            <div className="flex justify-center space-x-4 mb-8">
              {models.map((model, index) => (
                <Button
                  key={model.name}
                  variant={currentModel === index ? "default" : "outline"}
                  size="sm"
                  className={`transition-all duration-300 ${
                    currentModel === index ? 'pulse-glow scale-110' : 'glass-effect'
                  }`}
                  onClick={() => setCurrentModel(index)}
                >
                  <span className="mr-2">{model.icon}</span>
                  {model.name}
                </Button>
              ))}
            </div>

            <Badge className="glass-effect text-primary border-primary/30 mb-4 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              Experience Next-Gen 3D Vision Technology
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
              <span className="text-gradient animate-[gradient_3s_ease-in-out_infinite]">Revolutionary</span>
              <br />
              <span className="text-white drop-shadow-2xl">Eyewear</span>
              <br />
              <span className="text-gradient animate-[gradient_3s_ease-in-out_infinite_reverse]">Experience</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in the future of eyewear shopping with our stunning 3D technology. 
              <span className="text-gradient font-semibold"> See, feel, and experience</span> glasses like never before.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto my-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <div className="text-gray-400">Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">99%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Link to="/virtual-try-on">
                <Button size="lg" className="text-lg px-10 py-6 pulse-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 transform hover:scale-105 transition-all duration-300">
                  <span className="mr-2">🥽</span>
                  Try Virtual Fitting
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/collections">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-6 glass-effect border-primary/30 text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">👁️</span>
                  Explore Collection
                </Button>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToFeatures}>
              <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="text-gray-400 text-sm">Discover More</span>
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
