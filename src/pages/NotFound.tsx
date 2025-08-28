import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const RandomBengaluruFact = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    {
      icon: "🚗",
      title: "Fact:",
      text: "Bengaluru has more traffic signals per km than any other Indian city. Perfect time to think about life... or plan your next startup!"
    },
    {
      icon: "🌧️",
      title: "Fact:",
      text: "Bengaluru's weather is so perfect, people from other cities visit just to experience what 'pleasant' feels like!"
    },
    {
      icon: "🏢",
      title: "Fact:",
      text: "Every 3rd software engineer in India either works in Bengaluru or dreams of moving here. The other 2 are planning their exit strategy!"
    },
    {
      icon: "🌳",
      title: "Fact:",
      text: "Bengaluru was once called the 'Garden City' with over 1000 lakes. Now we have 1000 startups per lake!"
    },
    {
      icon: "🍛",
      title: "Fact:",
      text: "Bengaluru has the highest concentration of South Indian breakfast joints. Dosa availability: 99.9% uptime!"
    },
    {
      icon: "🏠",
      title: "Fact:",
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
    <div className="transition-all duration-1000 ease-in-out">
      <p className="text-blue-200 text-sm leading-relaxed">
        <span className="text-white font-semibold">
          {facts[currentFact].icon} {facts[currentFact].title}
        </span>{' '}
        {facts[currentFact].text}
      </p>
    </div>
  );
};

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-black p-6 relative overflow-hidden">
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-25">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                backgroundColor: '#050C28',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="flex flex-col items-center text-center max-w-2xl w-full relative z-10">
          
        {/* Enhanced coffee illustration matching the reference */}
        <div className="relative w-96 h-96 mb-8 flex flex-col items-center justify-center">
          <svg width="320" height="280" viewBox="0 0 320 280" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="filterGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="30%" stopColor="#f59e0b"/>
                <stop offset="70%" stopColor="#d97706"/>
                <stop offset="100%" stopColor="#b45309"/>
              </linearGradient>
              <linearGradient id="steelFinish" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9"/>
                <stop offset="20%" stopColor="#e2e8f0"/>
                <stop offset="50%" stopColor="#cbd5e1"/>
                <stop offset="80%" stopColor="#94a3b8"/>
                <stop offset="100%" stopColor="#64748b"/>
              </linearGradient>
              <radialGradient id="coffeeGradient" cx="50%" cy="20%">
                <stop offset="0%" stopColor="#a16207"/>
                <stop offset="50%" stopColor="#92400e"/>
                <stop offset="100%" stopColor="#451a03"/>
              </radialGradient>
              <radialGradient id="coffeeLight" cx="30%" cy="20%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.3"/>
              </radialGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main filter container */}
            <ellipse cx="160" cy="50" rx="120" ry="20" 
                     fill="url(#filterGold)" stroke="#92400e" strokeWidth="2"/>
            <rect x="40" y="30" width="240" height="40" 
                  fill="url(#filterGold)" stroke="#92400e" strokeWidth="2"/>
            
            {/* Inner filter mesh */}
            <rect x="50" y="40" width="220" height="20" 
                  fill="#451a03"/>
            
            {/* Filter holes in a more authentic pattern */}
            {Array.from({length: 80}).map((_, i) => {
              const row = Math.floor(i / 16);
              const col = i % 16;
              return (
                <circle key={i} 
                        cx={60 + col * 12.5} 
                        cy={45 + row * 4} 
                        r="1.2" fill="#92400e" opacity="0.8"/>
              );
            })}
            
            {/* Handle */}
            <path d="M285 50 Q310 45 315 50 Q315 60 310 65 Q285 60 285 50" 
                  stroke="url(#filterGold)" strokeWidth="4" fill="none" strokeLinecap="round"/>
            
            {/* Coffee dripping streams */}
            {Array.from({length: 12}).map((_, i) => (
              <rect key={i} x={70 + i * 15} y="75" width="2" height="35" 
                    fill="url(#coffeeGradient)" rx="1" 
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }}/>
            ))}
            
            {/* Steel tumbler/glass */}
            <rect x="100" y="120" width="120" height="140" rx="8" 
                  fill="url(#steelFinish)" stroke="#64748b" strokeWidth="2"/>
            
            {/* Coffee liquid */}
            <rect x="105" y="180" width="110" height="75" 
                  fill="url(#coffeeGradient)"/>
            
            {/* Coffee foam/froth layer */}
            <ellipse cx="160" cy="180" rx="55" ry="8" 
                     fill="url(#coffeeLight)" 
                     className="animate-pulse" style={{animationDuration: '3s'}}/>
            
            {/* Glass highlights */}
            <rect x="105" y="125" width="6" height="125" rx="3" 
                  fill="rgba(255,255,255,0.4)"/>
            <rect x="209" y="125" width="6" height="125" rx="3" 
                  fill="rgba(255,255,255,0.2)"/>
            
            {/* Steam rising */}
            {Array.from({length: 6}).map((_, i) => (
              <path key={i}
                    d={`M${140 + i * 8} 115 Q${145 + i * 8} 90 ${135 + i * 8} 65 Q${150 + i * 8} 40 ${140 + i * 8} 15`}
                    stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"
                    strokeLinecap="round" filter="url(#softGlow)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.5}s`, 
                      animationDuration: '3s'
                    }}/>
            ))}
          </svg>
        </div>

          {/* 404 with navy blue glow */}
          <div className="relative mb-8">
            <h1 className="text-9xl font-black text-white relative z-10 animate-gentle-bounce">
              4<span className="text-white drop-shadow-lg">0</span>4
            </h1>
            <div
              className="absolute inset-0 text-9xl font-black blur-lg opacity-60 animate-glow"
              style={{ color: '#050C28' }}
            >
              404
            </div>
          </div>

          {/* Bengaluru-style messaging */}
          <div className="space-y-4 mb-10">
            <h2
              className="text-3xl font-bold"
              style={{
                background: 'linear-gradient(to right, #2563EB, #06B6D4)', // bright blue → cyan
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Aiyooo! Wrong Route-u!
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              Page not found — like <span className="text-orange-400 font-semibold">filter coffee without decoction</span> ☕
            </p>
            <p className="text-gray-400">
              The link you brewed doesn't exist. Let's get back before the froth settles!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <Link 
              to="/"
              className="group relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden" 
              style={{background: 'linear-gradient(to right, #050C28, #0A1654)'}}
            >
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" style={{background: 'linear-gradient(to right, #0A1654, #050C28)'}}></div>
            </Link>
            
            <Link 
              to="/events"
              className="relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #2563EB, #06B6D4)', // bright gradient for visibility
                border: 'none'
              }}
            >
              Browse Events
            </Link>
          </div>

          {/* Random Bengaluru facts */}
          <div
            className="p-6 rounded-xl border backdrop-blur-sm max-w-lg"
            style={{
              background: 'linear-gradient(to right, rgba(5, 12, 40, 0.2), rgba(10, 22, 84, 0.2))',
              borderColor: 'rgba(5, 12, 40, 0.5)'
            }}
          >
            <RandomBengaluruFact />
          </div>
        </div>

        {/* Animations */}
        <style>{`
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
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); opacity: 0.7; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite linear;
          }
          @keyframes steam {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-15px); opacity: 0.3; }
            100% { transform: translateY(-30px); opacity: 0; }
          }
          .animate-steam {
            animation: steam 3s infinite ease-in-out;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default NotFound;
