import { useEffect, useState } from "react";

const SLIDESHOW_IMAGES = [
  "/slideshow/inaugration (1).jpg",
  "/slideshow/inaugration (2).jpg",
  "/slideshow/inaugration (3).jpg",
  "/slideshow/inaugration (4).jpg",
  "/slideshow/unicon_24.jpg",
  "/slideshow/nexus_24 (2).jpg",
  "/slideshow/nexus_24 (3).jpg",
  "/slideshow/nexus_24 (4).jpg",
  "/slideshow/nexus_24 (5).jpg",
  "/slideshow/nexus_24 (6).jpg",
  "/slideshow/nexus_24 (7).jpg",
  "/slideshow/nexus_24 (8).jpg",
  "/slideshow/nexus_24 (9).jpg",
  "/slideshow/nexus_24.jpg",
  "/slideshow/atlas_24.JPG",
  "/slideshow/atlas_24 (1).JPG",
  "/slideshow/atlas_24 (2).JPG",
  "/slideshow/atlas_24 .JPG",
  "/slideshow/unicon_25 (2).jpg",
  "/slideshow/unicon_25 (3).jpg",
  "/slideshow/unicon_25.jpg",
  "/slideshow/nexus_25 (2).jpg",
  "/slideshow/nexus_25 (3).jpg",
  "/slideshow/nexus_25 (4).jpg",
  "/slideshow/nexus_25 (5).jpg",
  "/slideshow/nexus_25.jpg"
];


const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % SLIDESHOW_IMAGES.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-2xl h-64 md:h-80 lg:h-96 mx-auto rounded-2xl overflow-hidden ${loaded ? 'lusion-fade-in' : 'opacity-0'}`}>
      {/* Main slideshow container */}
      <div className="relative w-full h-full">
        {SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Professional MUN scene ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Glow border effect */}
        <div className="absolute inset-0 border border-primary/30 rounded-2xl animate-lusion-glow" />
      </div>
      
      {/* Floating particles around slideshow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full lusion-particles"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-black ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/80 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentImageIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
