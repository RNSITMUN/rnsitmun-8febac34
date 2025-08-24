
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";
import ImageSlideshow from "../slideshow/ImageSlideshow";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${loaded ? 'lusion-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-2">
              <Gavel className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-inter font-medium text-primary">RNSIT Model United Nations</span>
            </div>
            <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Empowering Diplomacy, Leadership & Global Awareness
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl font-inter">
              Join our passionate community of future diplomats, change-makers, and global citizens in shaping tomorrow's international relations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="btn-lusion">
                <Link to="/events">Join Upcoming Events</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-lusion-outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Image Slideshow */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <ImageSlideshow />
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};

export default Hero;
