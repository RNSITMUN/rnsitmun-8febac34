import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const SLIDESHOW_IMAGES = [
  "/slideshow/inaugration (1).jpg",
  "/slideshow/inaugration (2).jpg", 
  "/slideshow/inaugration (3).jpg",
  "/slideshow/inaugration (4).jpg",
  "/slideshow/unicon_24.jpg",
  "/slideshow/nexus_24.jpg",
  "/slideshow/nexus_24 (2).jpg",
  "/slideshow/nexus_24 (3).jpg",
  "/slideshow/nexus_24 (4).jpg",
  "/slideshow/nexus_24 (5).jpg",
  "/slideshow/nexus_24 (6).jpg",
  "/slideshow/nexus_24 (7).jpg",
  "/slideshow/nexus_24 (8).jpg",
  "/slideshow/nexus_24 (9).jpg",
  "/slideshow/atlas_24.JPG",
  "/slideshow/atlas_24 (1).JPG", 
  "/slideshow/atlas_24 (2).JPG",
  "/slideshow/atlas_24 .JPG",
  "/slideshow/unicon_25.jpg",
  "/slideshow/unicon_25 (2).jpg",
  "/slideshow/unicon_25 (3).jpg",
  "/slideshow/nexus_25.jpg",
  "/slideshow/nexus_25 (2).jpg",
  "/slideshow/nexus_25 (3).jpg",
  "/slideshow/nexus_25 (4).jpg",
  "/slideshow/nexus_25 (5).jpg"
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % SLIDESHOW_IMAGES.length
      );
    }, 3000); // 3s autoplay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto rounded-2xl overflow-hidden bg-muted/20 flex items-center justify-center">
      {/* Slideshow wrapper */}
      <div className="relative w-full h-full flex items-center justify-center">
        {SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`RNSIT MUN ${image}`}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </div>
        ))}

        {/* Overlay & border */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 border border-primary/30 rounded-2xl animate-lusion-glow" />

        {/* Mobile navigation */}
        <Button
          onClick={prevImage}
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden bg-black/30 hover:bg-black/50 text-white border-0 w-10 h-10 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          onClick={nextImage}
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden bg-black/30 hover:bg-black/50 text-white border-0 w-10 h-10 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/80 hover:bg-white/90'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;

