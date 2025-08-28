import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar"; // ✅ your Navbar
import Footer from "@/components/layout/Footer"; // ✅ your Footer

const RandomBengaluruFact = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    {
      icon: "🚗",
      title: "Traffic Fact:",
      text: "Bengaluru has more traffic signals per km than any other Indian city. Perfect time to think about life... or plan your next startup!"
    },
    {
      icon: "🌧️",
      title: "Weather Fact:",
      text: "Bengaluru's weather is so perfect, people from other cities visit just to experience what 'pleasant' feels like!"
    },
    {
      icon: "🏢",
      title: "Tech Fact:",
      text: "Every 3rd software engineer in India either works in Bengaluru or dreams of moving here. The other 2 are planning their exit strategy!"
    },
    {
      icon: "🌳",
      title: "Garden City Fact:",
      text: "Bengaluru was once called the 'Garden City' with over 1000 lakes. Now we have 1000 startups per lake!"
    },
    {
      icon: "🍛",
      title: "Food Fact:",
      text: "Bengaluru has the highest concentration of South Indian breakfast joints. Dosa availability: 99.9% uptime!"
    },
    {
      icon: "🏠",
      title: "PG Life Fact:",
      text: "Bengaluru probably has more PGs than any other city. It's like a giant hostel where everyone codes and orders food!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="transition-all duration-1000 ease-in-out mt-6">
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
  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* ✅ Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-25">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                backgroundColor: "#050C28",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center text-center max-w-2xl w-full relative z-10">
          {/* Coffee Illustration */}
          <div className="relative w-48 h-56 animate-gentle-bounce">
            <svg viewBox="0 0 120 160" className="w-full h-full">
              <defs>
                <linearGradient id="steel" x1="0" x2="1">
                  <stop offset="0%" stopColor="#a1a1aa" />
                  <stop offset="100%" stopColor="#f4f4f5" />
                </linearGradient>
                <radialGradient id="coffee" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#78350f" />
                </radialGradient>
                <radialGradient id="froth" cx="50%" cy="25%" r="65%">
                  <stop offset="0%" stopColor="#fff9db" />
                  <stop offset="100%" stopColor="#fef3c7" />
                </radialGradient>
              </defs>

              {/* Dabara (plate) */}
              <ellipse cx="60" cy="145" rx="50" ry="12" fill="url(#steel)" />
              {/* Tumbler */}
              <rect x="35" y="50" width="50" height="90" rx="10" fill="url(#steel)" />
              {/* Coffee */}
              <ellipse cx="60" cy="50" rx="40" ry="15" fill="url(#coffee)" />
              {/* Froth */}
              <ellipse
                cx="60"
                cy="47"
                rx="40"
                ry="12"
                fill="url(#froth)"
                className="animate-glow"
              />
            </svg>

            {/* Steam */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-1 h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full animate-steam"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              ))}
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl font-extrabold text-white mt-6 animate-bounce-slow">
            404
          </h1>

          {/* Tagline */}
          <p className="text-gray-200 mt-6 text-lg">
            Page not found — like{" "}
            <span className="text-orange-400 font-semibold">
              filter coffee without decoction
            </span>{" "}
            ☕
          </p>
          <p className="text-gray-400 mt-2">
            The link you brewed doesn’t exist. Let’s get back before the froth settles!
          </p>

          {/* ✅ Action buttons (with working Links) */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 mb-8">
            {/* Back to Home */}
            <Link
              to="/"
              className="group relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden"
              style={{ background: "linear-gradient(to right, #050C28, #0A1654)" }}
            >
              <span className="relative z-10">Back to Home</span>
              <div
                className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                style={{ background: "linear-gradient(to right, #0A1654, #050C28)" }}
              ></div>
            </Link>

            {/* Browse Events */}
            <Link
              to="/events"
              className="relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden"
              style={{
                background: "linear-gradient(to right, #2563EB, #06B6D4)",
                border: "none"
              }}
            >
              Browse Events
            </Link>
          </div>

          {/* Bengaluru Facts */}
          <RandomBengaluruFact />
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0); opacity: 0.7; }
          33% { transform: translateY(-15px) translateX(5px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(-5px) translateX(-5px) rotate(240deg); opacity: 0.8; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

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

        @keyframes steam {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-15px); opacity: 0.3; }
          100% { transform: translateY(-30px); opacity: 0; }
        }
        .animate-steam { animation: steam 3s infinite ease-in-out; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}</style>
    </div>
  );
};

export default NotFound;
