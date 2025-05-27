
import React from 'react';
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Why Choose</span> DotGlasses?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of cutting-edge technology and timeless style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Precision Fit</h3>
            <p className="text-gray-300">
              Advanced 3D scanning technology ensures every pair fits perfectly to your unique facial structure.
            </p>
          </Card>

          <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Premium Materials</h3>
            <p className="text-gray-300">
              Crafted from the finest materials with attention to every detail for lasting comfort and style.
            </p>
          </Card>

          <Card className="glass-effect p-8 text-center hover:scale-105 transition-all duration-500 scale-in" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Virtual Reality</h3>
            <p className="text-gray-300">
              Try on thousands of frames virtually with our revolutionary AR technology before you buy.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
