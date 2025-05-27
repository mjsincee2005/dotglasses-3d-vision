
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "50K+", icon: "👥" },
    { label: "Countries Served", value: "25+", icon: "🌍" },
    { label: "Years Experience", value: "15+", icon: "⭐" },
    { label: "Frame Designs", value: "1000+", icon: "🕶️" }
  ];

  const team = [
    { name: "Dr. Sarah Chen", role: "Founder & CEO", avatar: "👩‍💼", bio: "Visionary leader with 20+ years in optical innovation" },
    { name: "Marcus Rodriguez", role: "Chief Designer", avatar: "👨‍🎨", bio: "Award-winning designer behind our most popular collections" },
    { name: "Dr. James Wilson", role: "Head of R&D", avatar: "👨‍🔬", bio: "Leading researcher in AR/VR eyewear technology" },
    { name: "Lisa Thompson", role: "Customer Experience", avatar: "👩‍💻", bio: "Ensuring every customer gets the perfect fit and experience" }
  ];

  const values = [
    { title: "Innovation", description: "Pioneering the future of eyewear with cutting-edge technology", icon: "🚀" },
    { title: "Quality", description: "Premium materials and craftsmanship in every frame we create", icon: "💎" },
    { title: "Accessibility", description: "Making great vision accessible to everyone, everywhere", icon: "🌟" },
    { title: "Sustainability", description: "Committed to eco-friendly practices and responsible sourcing", icon: "🌱" }
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
              <Link to="/virtual-try-on" className="text-gray-300 hover:text-white transition-colors">Virtual Try-On</Link>
              <Link to="/about" className="text-white font-medium">About</Link>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient">About DotGlasses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing the eyewear industry through innovative technology, exceptional design, and unwavering commitment to our customers' vision.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="glass-effect p-6 text-center hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Vision Beyond Sight</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Founded in 2008, DotGlasses began with a simple mission: to make premium eyewear accessible to everyone through innovative technology. What started as a small optical shop has grown into a global leader in 3D eyewear experiences.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Today, we combine traditional craftsmanship with cutting-edge AR technology, allowing customers to virtually try on thousands of frames from the comfort of their homes. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </p>
              <Button size="lg" className="pulse-glow">
                <Heart className="w-4 h-4 mr-2" />
                Join Our Mission
              </Button>
            </div>
            <Card className="glass-effect p-8">
              <div className="text-center">
                <div className="text-8xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
                <p className="text-gray-300 text-lg">
                  "To transform how the world sees eyewear by making perfect vision accessible, stylish, and personal for everyone."
                </p>
              </div>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Our Values</span>
              </h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="glass-effect p-6 text-center hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gradient">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-gradient">Meet Our Team</span>
              </h2>
              <p className="text-xl text-gray-300">The visionaries behind DotGlasses</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={member.name} className="glass-effect p-6 text-center hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="glass-effect p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the <span className="text-gradient">Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered their perfect vision with DotGlasses
            </p>
            <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/virtual-try-on">
                <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
                  🥽 Try Virtual Fitting
                </Button>
              </Link>
              <Link to="/collections">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 glass-effect border-primary/30 text-primary hover:bg-primary/10">
                  👁️ Explore Collections
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
