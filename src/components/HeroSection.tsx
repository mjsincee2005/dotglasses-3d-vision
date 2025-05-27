
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useThreeJS } from "@/hooks/useThreeJS";

const HeroSection = () => {
  const { canvasRef, isLoaded } = useThreeJS();

  return (
    <>
      <canvas
        ref={canvasRef}
        id="three-canvas"
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className={`space-y-8 ${isLoaded ? 'slide-up' : 'opacity-0'}`}>
            <Badge className="glass-effect text-primary border-primary/30 mb-4">
              🚀 Experience 3D Vision Technology
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="text-gradient">Revolutionary</span>
              <br />
              <span className="text-white">Eyewear</span>
              <br />
              <span className="text-gradient">Experience</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the future of eyewear shopping with our stunning 3D technology. 
              See, feel, and experience glasses like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link to="/virtual-try-on">
                <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
                  🥽 Try Virtual Fitting
                </Button>
              </Link>
              <Link to="/collections">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 glass-effect border-primary/30 text-primary hover:bg-primary/10">
                  👁️ Explore Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
