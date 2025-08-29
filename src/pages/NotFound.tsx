import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Fun Bengaluru Facts
const BENGALURU_FACTS = [
  "Bengaluru is known as the Silicon Valley of India.",
  "It’s one of the greenest cities in India.",
  "The city is home to more than 12 million people.",
  "Bengaluru has the highest number of pubs in Asia.",
  "It is situated at an elevation of about 900m, making its weather pleasant year-round.",
  "The iconic Lalbagh Garden has a glass house modeled after London’s Crystal Palace.",
  "Bengaluru is India’s startup capital.",
  "Kempegowda founded Bengaluru in the 16th century.",
  "The city is famous for its filter coffee culture.",
  "Bengaluru is the first city in Asia to have electricity (in 1906).",
];

export default function NotFound() {
  const location = useLocation();
  const [fact, setFact] = useState("");

  useEffect(() => {
    // Pick a random fact on mount
    setFact(BENGALURU_FACTS[Math.floor(Math.random() * BENGALURU_FACTS.length)]);
    console.error("404 page hit:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        {/* Authentic Filter Coffee SVG */}
        <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="30%" stopColor="#fbbf24" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="steelGradient" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="20%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="80%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <radialGradient id="coffeeDecoction" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="100%" stopColor="#451a03" />
              </radialGradient>
              <radialGradient id="coffeeFroth" cx="40%" cy="20%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
              </radialGradient>
            </defs>

            {/* Top Filter */}
            <ellipse cx="150" cy="45" rx="65" ry="12" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2" />
            <rect x="85" y="33" width="130" height="24" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2" />
            <rect x="80" y="33" width="140" height="6" rx="3" fill="#ffd700" />

            {/* Coffee Grounds */}
            <rect x="90" y="42" width="120" height="12" fill="#451a03" />
            {Array.from({ length: 60 }).map((_, i) => {
              const row = Math.floor(i / 15);
              const col = i % 15;
              return <circle key={i} cx={95 + col * 7} cy={45 + row * 2.5} r="0.8" fill="#92400e" opacity="0.9" />;
            })}

            {/* Disc Handle */}
            <circle cx="150" cy="30" r="8" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="1" />
            <rect x="147" y="18" width="6" height="12" rx="3" fill="url(#brassGradient)" />

            {/* Lower Vessel */}
            <ellipse cx="150" cy="85" rx="70" ry="15" fill="url(#brassGradient)" opacity="0.8" />
            <rect x="80" y="70" width="140" height="30" fill="url(#brassGradient)" opacity="0.9" />
            <ellipse cx="150" cy="100" rx="70" ry="15" fill="url(#brassGradient)" />
            <ellipse cx="150" cy="85" rx="60" ry="10" fill="url(#coffeeDecoction)" />

            {/* Coffee Dripping */}
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={i}
                x={105 + i * 12}
                y="60"
                width="1.5"
                height="20"
                fill="url(#coffeeDecoction)"
                rx="0.75"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.15}s`, animationDuration: "2.5s" }}
              />
            ))}

            {/* Dabara */}
            <ellipse cx="150" cy="280" rx="80" ry="20" fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2" />
            <ellipse cx="150" cy="275" rx="75" ry="15" fill="#e2e8f0" />

            {/* Tumbler */}
            <ellipse cx="150" cy="240" rx="35" ry="8" fill="url(#steelGradient)" opacity="0.3" />
            <rect x="115" y="200" width="70" height="80" rx="6" fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2" />
            <rect x="120" y="235" width="60" height="40" fill="url(#coffeeDecoction)" />
            <ellipse
              cx="150"
              cy="235"
              rx="30"
              ry="5"
              fill="url(#coffeeFroth)"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />

            {/* Highlights */}
            <rect x="120" y="205" width="4" height="65" rx="2" fill="rgba(255,255,255,0.5)" />
            <rect x="176" y="205" width="4" height="65" rx="2" fill="rgba(255,255,255,0.3)" />
            <ellipse cx="150" cy="200" rx="35" ry="8" fill="url(#steelGradient)" stroke="#94a3b8" strokeWidth="1" />

            {/* Steam */}
            {Array.from({ length: 4 }).map((_, i) => (
              <path
                key={i}
                d={`M${135 + i * 10} 195 Q${140 + i * 10} 170 ${130 + i * 10} 145 Q${145 + i * 10} 120 ${135 + i * 10} 105`}
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.6}s`, animationDuration: "3.5s" }}
              />
            ))}
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-9xl font-extrabold text-orange-700 drop-shadow-lg mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Oops! Looks like you spilled your filter coffee.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg">
          The page <span className="font-mono bg-gray-200 px-2 py-1 rounded">{location.pathname}</span> doesn’t exist.
        </p>

        {/* Bengaluru Fact */}
        <p className="text-md sm:text-lg italic text-gray-500 max-w-md mb-6">☕ Did you know? {fact}</p>

        {/* Back to Home */}
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition-transform transform hover:scale-105"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
