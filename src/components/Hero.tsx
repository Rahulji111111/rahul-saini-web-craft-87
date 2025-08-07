import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, Zap, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in border border-primary/30">
              <Zap className="h-4 w-4" />
              <span className="text-glow">Professional Web Development</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in text-foreground leading-tight" style={{ animationDelay: "0.1s" }}>
              Transform Your 
              <span className="bg-text-gradient bg-clip-text text-transparent block text-glow">
                Digital Presence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in max-w-2xl" style={{ animationDelay: "0.2s" }}>
              PixelCraft Studio creates modern, responsive websites and powerful data solutions that help small businesses and startups succeed in the digital world.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-accent fill-current" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Affordable for Small Business</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                asChild 
                size="lg"
                className="btn-primary text-lg px-8 py-6 shadow-glow"
              >
                <Link to="/contact">
                  Get Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="btn-secondary text-lg px-8 py-6"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground text-sm">Response Time</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional web development workspace" 
                className="rounded-2xl shadow-elegant w-full h-auto border border-border/20"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-card border border-primary/30 p-4 rounded-xl shadow-glow animate-bounce">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-accent/30 p-4 rounded-xl shadow-glow animate-bounce delay-500">
              <Palette className="h-8 w-8 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-muted-foreground/40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;