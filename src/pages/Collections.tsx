
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter, Search } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Classic Frames",
      description: "Timeless designs that never go out of style",
      image: "🕶️",
      price: "$299",
      category: "Classic"
    },
    {
      id: 2,
      name: "Modern Edge",
      description: "Contemporary frames for the modern professional",
      image: "👓",
      price: "$399",
      category: "Modern"
    },
    {
      id: 3,
      name: "Vintage Collection",
      description: "Retro-inspired frames with a modern twist",
      image: "🥽",
      price: "$349",
      category: "Vintage"
    },
    {
      id: 4,
      name: "Sport Elite",
      description: "High-performance frames for active lifestyles",
      image: "🕶️",
      price: "$449",
      category: "Sport"
    },
    {
      id: 5,
      name: "Designer Series",
      description: "Premium luxury frames crafted by renowned designers",
      image: "👓",
      price: "$599",
      category: "Luxury"
    },
    {
      id: 6,
      name: "Blue Light Shield",
      description: "Advanced protection for digital screen users",
      image: "🥽",
      price: "$279",
      category: "Tech"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient">
              DotGlasses
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/collections" className="text-white font-medium">Collections</Link>
              <Link to="/virtual-try-on" className="text-gray-300 hover:text-white transition-colors">Virtual Try-On</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient">Our Collections</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our curated selection of premium eyewear designed for every style and occasion
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" className="glass-effect border-primary/30">
              <Filter className="w-4 h-4 mr-2" />
              All Categories
            </Button>
            <Button variant="ghost" className="text-gray-300">Classic</Button>
            <Button variant="ghost" className="text-gray-300">Modern</Button>
            <Button variant="ghost" className="text-gray-300">Vintage</Button>
            <Button variant="ghost" className="text-gray-300">Sport</Button>
            <Button variant="ghost" className="text-gray-300">Luxury</Button>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <Card key={item.id} className="glass-effect p-6 hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{item.image}</div>
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    {item.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3 text-white">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">{item.price}</span>
                    <Button size="sm" className="pulse-glow">
                      Try On
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="glass-effect p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Can't Find Your Perfect Frame?
              </h2>
              <p className="text-gray-300 mb-6">
                Try our virtual fitting tool to see how any frame looks on you
              </p>
              <Link to="/virtual-try-on">
                <Button size="lg" className="pulse-glow">
                  🥽 Virtual Try-On
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
