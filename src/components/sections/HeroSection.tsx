import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight, Sparkles } from "lucide-react";
import ImageSlideshow from "@/components/slideshow/ImageSlideshow";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full lusion-particles"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};


const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-lusion-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-lusion-glow" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-[calc(100vh-4rem)]">
          
          {/* Text Content */}
          <div className={`space-y-4 sm:space-y-6 text-center lg:text-left ${loaded ? 'lusion-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-primary animate-pulse" />
              <span className="text-sm font-inter font-medium text-primary">RNSIT Model United Nations</span>
            </div>
            
            <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-foreground tracking-tight">
              <span className="text-gradient-lusion font-black block sm:inline">
                RNSIT MUN
              </span>
              <span className="hidden sm:inline"> - </span>
              <span className="block sm:inline">Model United Nations Society</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-inter leading-relaxed font-medium">
              Welcome to <strong>RNSIT MUN</strong>, the official <strong>Model United Nations society</strong> at <strong>RNS Institute of Technology, Bangalore</strong>. Join our premier MUN program for diplomatic training, international relations experience, and global policy discussions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-lusion w-full sm:w-auto">
                <Link to="/events" className="inline-flex items-center justify-center">
                  Join Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-lusion-outline w-full sm:w-auto">
                <Link to="/about" className="inline-flex items-center justify-center">
                  Learn More
                  <Globe className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Image Slideshow */}
          <div className="relative h-[240px] sm:h-[360px] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-1">
            <ImageSlideshow />
          </div>
          
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
    </section>
  );
};

export default HeroSection;