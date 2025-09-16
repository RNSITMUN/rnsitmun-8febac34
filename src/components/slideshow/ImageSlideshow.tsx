import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(SLIDESHOW_IMAGES.length).fill(false)
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % SLIDESHOW_IMAGES.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted/20">
      {/* Image wrapper with fixed height for consistency */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {!imageLoaded[currentImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/40">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={SLIDESHOW_IMAGES[currentImageIndex]}
              alt={`RNSIT MUN slideshow ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={currentImageIndex === 0 ? "high" : "low"}
              onLoad={() => handleImageLoad(currentImageIndex)}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
                handleImageLoad(currentImageIndex);
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Preload next few images */}
        {SLIDESHOW_IMAGES.slice(0, 3).map((image, index) => (
          <img
            key={`preload-${index}`}
            src={image}
            alt=""
            className="hidden"
            loading="eager"
            onLoad={() => handleImageLoad(index)}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Glow border */}
        <div className="absolute inset-0 border border-primary/30 rounded-2xl animate-lusion-glow pointer-events-none" />

        {/* Mobile Navigation */}
        <Button
          onClick={prevImage}
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 md:hidden bg-black/30 hover:bg-black/50 text-white w-10 h-10 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          onClick={nextImage}
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden bg-black/30 hover:bg-black/50 text-white w-10 h-10 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-primary scale-125" 
                : "bg-white/80 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
