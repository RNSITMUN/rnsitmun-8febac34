import React, { useState, useEffect } from 'react';

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
        
        {/* Authentic South Indian Filter Coffee Setup */}
        <div className="relative w-96 h-96 mb-8 flex flex-col items-center justify-center">
          <svg width="300" height="350" viewBox="0 0 300 350" className="drop-shadow-2xl">
            <defs>
              <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700"/>
                <stop offset="30%" stopColor="#fbbf24"/>
                <stop offset="70%" stopColor="#d97706"/>
                <stop offset="100%" stopColor="#b45309"/>
              </linearGradient>
              <linearGradient id="steelGradient" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc"/>
                <stop offset="20%" stopColor="#e2e8f0"/>
                <stop offset="50%" stopColor="#cbd5e1"/>
                <stop offset="80%" stopColor="#94a3b8"/>
                <stop offset="100%" stopColor="#64748b"/>
              </linearGradient>
              <radialGradient id="coffeeDecoction" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#92400e"/>
                <stop offset="100%" stopColor="#451a03"/>
              </radialGradient>
              <radialGradient id="coffeeFroth" cx="40%" cy="20%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.4"/>
              </radialGradient>
              <filter id="metalShine">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Top Filter Container (Upper Vessel) */}
            <ellipse cx="150" cy="45" rx="65" ry="12" 
                     fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2"/>
            <rect x="85" y="33" width="130" height="24" 
                  fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2"/>
            
            {/* Filter Rim Detail */}
            <rect x="80" y="33" width="140" height="6" rx="3" 
                  fill="#ffd700"/>
            
            {/* Coffee Grounds Area */}
            <rect x="90" y="42" width="120" height="12" 
                  fill="#451a03"/>
            
            {/* Authentic Perforated Holes Pattern */}
            {Array.from({length: 60}).map((_, i) => {
              const row = Math.floor(i / 15);
              const col = i % 15;
              return (
                <circle key={i} 
                        cx={95 + col * 7} 
                        cy={45 + row * 2.5} 
                        r="0.8" fill="#92400e" opacity="0.9"/>
              );
            })}
            
            {/* Pressing Disc Handle */}
            <circle cx="150" cy="30" r="8" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="1"/>
            <rect x="147" y="18" width="6" height="12" rx="3" fill="url(#brassGradient)"/>
            
            {/* Side Handle */}
            <path d="M220 45 Q235 40 240 45 Q240 50 235 55 Q220 50 220 45" 
                  stroke="url(#brassGradient)" strokeWidth="3" fill="none" strokeLinecap="round"/>
            
            {/* Lower Collection Vessel */}
            <ellipse cx="150" cy="85" rx="70" ry="15" 
                     fill="url(#brassGradient)" opacity="0.8"/>
            <rect x="80" y="70" width="140" height="30" 
                  fill="url(#brassGradient)" opacity="0.9"/>
            <ellipse cx="150" cy="100" rx="70" ry="15" 
                     fill="url(#brassGradient)"/>
            
            {/* Coffee Decoction in Lower Vessel */}
            <ellipse cx="150" cy="85" rx="60" ry="10" 
                     fill="url(#coffeeDecoction)"/>
            
            {/* Coffee Dripping Streams */}
            {Array.from({length: 8}).map((_, i) => (
              <rect key={i} x={105 + i * 12} y="60" width="1.5" height="20" 
                    fill="url(#coffeeDecoction)" rx="0.75" 
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '2.5s'
                    }}/>
            ))}
            
            {/* Traditional Dabara (Wide Bowl) */}
            <ellipse cx="150" cy="280" rx="80" ry="20" 
                     fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2"/>
            <ellipse cx="150" cy="275" rx="75" ry="15" 
                     fill="#e2e8f0"/>
            
            {/* Stainless Steel Tumbler inside Dabara */}
            <ellipse cx="150" cy="240" rx="35" ry="8" 
                     fill="url(#steelGradient)" opacity="0.3"/>
            <rect x="115" y="200" width="70" height="80" rx="6" 
                  fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2"/>
            
            {/* Coffee in Tumbler */}
            <rect x="120" y="235" width="60" height="40" 
                  fill="url(#coffeeDecoction)"/>
            
            {/* Coffee Froth Layer */}
            <ellipse cx="150" cy="235" rx="30" ry="5" 
                     fill="url(#coffeeFroth)" 
                     className="animate-pulse" style={{animationDuration: '3s'}}/>
            
            {/* Tumbler Highlights and Reflections */}
            <rect x="120" y="205" width="4" height="65" rx="2" 
                  fill="rgba(255,255,255,0.5)" filter="url(#metalShine)"/>
            <rect x="176" y="205" width="4" height="65" rx="2" 
                  fill="rgba(255,255,255,0.3)"/>
            
            {/* Tumbler Rim */}
            <ellipse cx="150" cy="200" rx="35" ry="8" 
                     fill="url(#steelGradient)" stroke="#94a3b8" strokeWidth="1"/>
            
            {/* Steam Rising from Coffee */}
            {Array.from({length: 4}).map((_, i) => (
              <path key={i}
                    d={`M${135 + i * 10} 195 Q${140 + i * 10} 170 ${130 + i * 10} 145 Q${145 + i * 10} 120 ${135 + i * 10} 105`}
                    stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" fill="none"
                    strokeLinecap="round" filter="url(#metalShine)"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.6}s`, 
                      animationDuration: '3.5s'
                    }}/>
            ))}
            
            {/* Additional Brass Details */}
            <rect x="85" y="51" width="130" height="3" 
                  fill="#ffd700" opacity="0.8"/>
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
          <button
            className="group relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden"
            style={{ background: 'linear-gradient(to right, #050C28, #0A1654)' }}
          >
            <span className="relative z-10">Back to Home</span>
            <div
              className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"
              style={{ background: 'linear-gradient(to right, #0A1654, #050C28)' }}
            ></div>
          </button>
          
          <button
            className="relative text-white font-bold px-10 py-4 rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-xl overflow-hidden"
            style={{
              background: 'linear-gradient(to right, #2563EB, #06B6D4)', // bright gradient for visibility
              border: 'none'
            }}
          >
            Browse Events
          </button>
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
      `}</style>
    </div>
  );
};

export default NotFound;
