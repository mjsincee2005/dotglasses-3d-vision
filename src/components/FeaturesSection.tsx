
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Sparkles, Zap, Eye, Shield, Cpu } from "lucide-react";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Target,
      title: "AI-Powered Precision Fit",
      description: "Advanced neural networks analyze your facial structure for perfect fitting",
      color: "from-blue-500 to-cyan-500",
      badge: "AI Technology"
    },
    {
      icon: Sparkles,
      title: "Premium Craftsmanship",
      description: "Hand-crafted with aerospace-grade materials and Swiss precision",
      color: "from-purple-500 to-pink-500",
      badge: "Premium Quality"
    },
    {
      icon: Eye,
      title: "Augmented Reality",
      description: "Try on thousands of frames with photorealistic AR rendering",
      color: "from-emerald-500 to-teal-500",
      badge: "AR Experience"
    },
    {
      icon: Shield,
      title: "Blue Light Protection",
      description: "Advanced coating blocks 99.9% of harmful blue light emissions",
      color: "from-orange-500 to-red-500",
      badge: "Eye Protection"
    },
    {
      icon: Cpu,
      title: "Smart Integration",
      description: "IoT-enabled frames with health monitoring and notifications",
      color: "from-indigo-500 to-purple-500",
      badge: "Smart Tech"
    },
    {
      icon: Zap,
      title: "Instant Customization",
      description: "Real-time lens adjustments and frame modifications",
      color: "from-yellow-500 to-orange-500",
      badge: "Customizable"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <Badge className="mb-6 glass-effect text-primary border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Revolutionary Features
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="text-gradient">Why Choose</span>
            <br />
            <span className="text-white">DotGlasses?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect fusion of cutting-edge technology, premium craftsmanship, and timeless design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`group relative glass-effect p-8 text-center hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isVisible ? 'scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <Badge className="absolute top-4 right-4 text-xs bg-primary/20 text-primary border-primary/30">
                  {feature.badge}
                </Badge>

                {/* Icon */}
                <div className={`relative z-10 mb-6 transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110 rotate-12' : ''
                }`}>
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${feature.color} p-4 shadow-2xl`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className={`text-center ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Card className="glass-effect p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Experience the Future?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our exclusive beta program and be among the first to experience next-generation eyewear technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="pulse-glow bg-gradient-to-r from-primary to-secondary">
                  <Zap className="w-5 h-5 mr-2" />
                  Join Beta Program
                </Button>
                <Button size="lg" variant="outline" className="glass-effect border-primary/30">
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
