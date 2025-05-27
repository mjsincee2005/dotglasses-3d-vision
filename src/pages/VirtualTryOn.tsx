
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, Upload, RotateCw, Download } from "lucide-react";

const VirtualTryOn = () => {
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [cameraActive, setCameraActive] = useState(false);

  const frames = [
    { id: 1, name: "Classic Black", emoji: "🕶️", color: "bg-gray-800" },
    { id: 2, name: "Modern Blue", emoji: "👓", color: "bg-blue-600" },
    { id: 3, name: "Vintage Gold", emoji: "🥽", color: "bg-yellow-600" },
    { id: 4, name: "Sport Red", emoji: "🕶️", color: "bg-red-600" },
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
              <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
              <Link to="/virtual-try-on" className="text-white font-medium">Virtual Try-On</Link>
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
              <span className="text-gradient">Virtual Try-On</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience our revolutionary AR technology to see how frames look on you before you buy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Camera/Preview Section */}
            <div className="space-y-6">
              <Card className="glass-effect p-6">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  {cameraActive ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl mb-4">👤</div>
                        <div className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
                          {frames[selectedFrame].emoji}
                        </div>
                        <p className="text-white">Camera Active - Try-On Preview</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <Camera className="w-16 h-16 mx-auto mb-4" />
                      <p>Camera preview will appear here</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => setCameraActive(!cameraActive)}
                    className={cameraActive ? "bg-red-600 hover:bg-red-700" : "pulse-glow"}
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    {cameraActive ? "Stop Camera" : "Start Camera"}
                  </Button>
                  <Button variant="outline" className="glass-effect border-primary/30">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <Button variant="outline" className="glass-effect border-primary/30">
                    <Download className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </Card>

              {/* Instructions */}
              <Card className="glass-effect p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient">How it works</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Badge className="mr-3 bg-primary/20 text-primary border-primary/30">1</Badge>
                    <span>Allow camera access or upload a photo</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-3 bg-primary/20 text-primary border-primary/30">2</Badge>
                    <span>Select frames from our collection</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-3 bg-primary/20 text-primary border-primary/30">3</Badge>
                    <span>See real-time try-on results</span>
                  </div>
                  <div className="flex items-center">
                    <Badge className="mr-3 bg-primary/20 text-primary border-primary/30">4</Badge>
                    <span>Save and share your favorite looks</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Frame Selection */}
            <div className="space-y-6">
              <Card className="glass-effect p-6">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Select Frame</h3>
                <div className="grid grid-cols-2 gap-4">
                  {frames.map((frame, index) => (
                    <Card 
                      key={frame.id}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedFrame === index 
                          ? 'ring-2 ring-primary bg-primary/10' 
                          : 'glass-effect hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedFrame(index)}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2">{frame.emoji}</div>
                        <h4 className="font-semibold text-white">{frame.name}</h4>
                        <div className={`w-full h-2 rounded mt-2 ${frame.color}`}></div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="glass-effect p-6">
                <h3 className="text-xl font-bold mb-4 text-gradient">Adjustment Tools</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Frame Size</label>
                    <input type="range" className="w-full accent-primary" min="80" max="120" defaultValue="100" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Vertical Position</label>
                    <input type="range" className="w-full accent-primary" min="-20" max="20" defaultValue="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Rotation</label>
                    <input type="range" className="w-full accent-primary" min="-15" max="15" defaultValue="0" />
                  </div>
                  <Button variant="outline" className="w-full glass-effect border-primary/30">
                    <RotateCw className="w-4 h-4 mr-2" />
                    Reset Adjustments
                  </Button>
                </div>
              </Card>

              <Card className="glass-effect p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-white">Like this frame?</h3>
                <p className="text-gray-300 mb-4">Add it to your cart or save for later</p>
                <div className="flex gap-3">
                  <Button className="flex-1 pulse-glow">Add to Cart</Button>
                  <Button variant="outline" className="flex-1 glass-effect border-primary/30">Save</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;
