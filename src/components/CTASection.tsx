
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <Card className="glass-effect p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to See the <span className="text-gradient">Future</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've revolutionized their vision with DotGlasses
          </p>
          <Separator className="my-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/virtual-try-on">
              <Button size="lg" className="text-lg px-8 py-4 pulse-glow">
                🚀 Start Your Journey
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="ghost" className="text-lg px-8 py-4 text-primary hover:bg-primary/10">
                📞 Contact Us
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
