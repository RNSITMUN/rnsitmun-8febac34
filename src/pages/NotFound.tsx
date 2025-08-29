import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RandomBengaluruFact = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    { icon: "🚗", title: "Traffic Fact:", text: "Bengaluru has more traffic signals per km than any other Indian city." },
    { icon: "🌧️", title: "Weather Fact:", text: "Bengaluru's weather is so perfect, people visit just to feel 'pleasant'." },
    { icon: "🏢", title: "Tech Fact:", text: "Every 3rd software engineer in India either works in Bengaluru or dreams of moving here." },
    { icon: "🌳", title: "Garden City Fact:", text: "Bengaluru was once called the 'Garden City' with over 1000 lakes." },
    { icon: "🍛", title: "Food Fact:", text: "Bengaluru has the highest concentration of South Indian breakfast joints." },
    { icon: "🏠", title: "PG Life Fact:", text: "Bengaluru probably has more PGs than any other city. It's like a giant hostel where everyone codes!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-all duration-1000 ease-in-out">
      <p className="text-blue-200 text-sm leading-relaxed">
        <span className="text-white font-semibold">
          {facts[currentFact].icon} {facts[currentFact].title}
        </span>{" "}
        {facts[currentFact].text}
      </p>
    </div>
  );
};

const NotFound = () => {
  const handleNavigation = (path: string) => {
    // Later replace with `useNavigate()` from react-router-dom
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black relative overflow-hidden">
      {/* ✅ Using global Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto flex-grow relative z-10 pt-24 px-6">
        {/* Coffee SVG */}
        <div className="relative w-96 h-96 mb-8 flex items-center justify-center">
          {/* SVG same as before */}
          {/* ... keep your cup, steam, and beans SVG code here ... */}
        </div>

        {/* 404 heading */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-white relative z-10 animate-gentle-bounce">
            4<span className="text-white drop-shadow-lg">0</span>4
          </h1>
          <div
            className="absolute inset-0 text-9xl font-black blur-lg opacity-60 animate-glow"
            style={{ color: "#050C28" }}
          >
            404
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, #2563EB, #06B6D4)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Aiyooo! Wrong Route-u!
          </h2>
          <p className="text-gray-300 text-xl">
            Page not found — like{" "}
            <span className="text-orange-400 font-semibold">filter coffee without decoction</span> ☕
          </p>
          <p className="text-gray-400">
            The link you brewed doesn't exist. Let's get back before the froth settles!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <button
            onClick={() => handleNavigation("/")}
            className="group relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden"
            style={{ background: "linear-gradient(to right, #050C28, #0A1654)" }}
          >
            <span className="relative z-10">Back to Home</span>
            <div
              className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"
              style={{ background: "linear-gradient(to right, #0A1654, #050C28)" }}
            ></div>
          </button>

          <button
            onClick={() => handleNavigation("/events")}
            className="relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden"
            style={{
              background: "linear-gradient(to right, #2563EB, #06B6D4)",
              border: "none",
            }}
          >
            Browse Events
          </button>
        </div>

        {/* Random Fact */}
        <div
          className="p-6 rounded-xl border backdrop-blur-sm max-w-lg"
          style={{
            background: "linear-gradient(to right, rgba(5, 12, 40, 0.2), rgba(10, 22, 84, 0.2))",
            borderColor: "rgba(5, 12, 40, 0.5)",
          }}
        >
          <RandomBengaluruFact />
        </div>
      </div>

      {/* ✅ Using global Footer */}
      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        .animate-gentle-bounce { animation: gentle-bounce 5s ease-in-out infinite; }

        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-glow { animation: glow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default NotFound;
