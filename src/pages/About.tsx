
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Globe, HandHeart } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Lives Changed", value: "50K+", icon: "👁️" },
    { label: "Countries Served", value: "120+", icon: "🌍" },
    { label: "Years of Service", value: "8+", icon: "⭐" },
    { label: "Free Glasses Given", value: "50K+", icon: "👓" }
  ];

  const team = [
    { name: "Dr. Sarah Chen", role: "Founder & Vision Director", avatar: "👩‍⚕️", bio: "Optometrist dedicated to global vision equality" },
    { name: "Marcus Rodriguez", role: "Operations Manager", avatar: "👨‍💼", bio: "Coordinates global distribution and partnerships" },
    { name: "Dr. Amara Okafor", role: "Medical Director", avatar: "👩‍⚕️", bio: "Ensures quality eye care and prescriptions" },
    { name: "Lisa Thompson", role: "Community Outreach", avatar: "👩‍💻", bio: "Connects with communities worldwide" }
  ];

  const values = [
    { title: "Accessibility", description: "Vision care should be available to everyone, regardless of financial status", icon: "🌟" },
    { title: "Quality", description: "Free doesn't mean compromising on quality - we provide premium eyewear", icon: "💎" },
    { title: "Dignity", description: "Everyone deserves to receive help with respect and dignity", icon: "🤝" },
    { title: "Sustainability", description: "Building lasting partnerships to create long-term impact", icon: "🌱" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-green-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gradient">
              👁️ VisionForAll
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Our Frames</Link>
              <Link to="/virtual-try-on" className="text-gray-300 hover:text-white transition-colors">Get Free Glasses</Link>
              <Link to="/about" className="text-white font-medium">Our Mission</Link>
              <Button className="bg-gradient-to-r from-red-500 to-green-500">
                <Heart className="w-4 h-4 mr-2" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient">Our Mission</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe that clear vision is a basic human right. Our mission is to provide free prescription glasses to those who cannot afford them, creating a world where financial barriers never stand between someone and clear sight.
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
              <Badge className="mb-4 bg-red-400/20 text-red-400 border-red-400/30">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Vision Beyond Barriers</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Founded in 2016, VisionForAll began when Dr. Sarah Chen witnessed countless patients leaving her clinic without glasses simply because they couldn't afford them. This sparked a mission to eliminate financial barriers to clear vision.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Today, we work with eye care professionals, nonprofits, and volunteers worldwide to ensure that anyone who needs glasses can receive them at no cost. Every pair we distribute represents a life changed, a student who can learn, a worker who can provide for their family.
              </p>
              <Button size="lg" className="pulse-glow bg-gradient-to-r from-red-500 to-green-500">
                <Heart className="w-4 h-4 mr-2" />
                Join Our Mission
              </Button>
            </div>
            <Card className="glass-effect p-8">
              <div className="text-center">
                <div className="text-8xl mb-6">❤️</div>
                <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
                <p className="text-gray-300 text-lg">
                  "A world where every person has access to clear vision, regardless of their economic circumstances."
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
              <p className="text-xl text-gray-300">The principles that guide our work</p>
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
                <span className="text-gradient">Our Team</span>
              </h2>
              <p className="text-xl text-gray-300">Dedicated professionals making vision accessible</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={member.name} className="glass-effect p-6 text-center hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-red-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="glass-effect p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make a <span className="text-gradient">Difference</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need glasses or want to help others see clearly, you can be part of our mission
            </p>
            <Separator className="my-8 bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/virtual-try-on">
                <Button size="lg" className="text-lg px-8 py-4 pulse-glow bg-gradient-to-r from-red-500 to-green-500">
                  👓 Get Free Glasses
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 glass-effect border-green-400/30 text-green-400 hover:bg-green-400/10">
                <HandHeart className="w-4 h-4 mr-2" />
                Volunteer With Us
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
