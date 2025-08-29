{/* ☕ Authentic Filter Coffee SVG */}
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

    {/* Top Filter Container */}
    <ellipse cx="150" cy="45" rx="65" ry="12" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2" />
    <rect x="85" y="33" width="130" height="24" fill="url(#brassGradient)" stroke="#b45309" strokeWidth="2" />
    <rect x="80" y="33" width="140" height="6" rx="3" fill="#ffd700" />

    {/* Coffee Grounds Area */}
    <rect x="90" y="42" width="120" height="12" fill="#451a03" />
    {Array.from({ length: 60 }).map((_, i) => {
      const row = Math.floor(i / 15);
      const col = i % 15;
      return <circle key={i} cx={95 + col * 7} cy={45 + row * 2.5} r="0.8" fill="#92400e" opacity="0.9" />;
    })}

    {/* Pressing Disc Handle */}
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

    {/* Dabara (Wide Bowl) */}
    <ellipse cx="150" cy="280" rx="80" ry="20" fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2" />
    <ellipse cx="150" cy="275" rx="75" ry="15" fill="#e2e8f0" />

    {/* Tumbler */}
    <ellipse cx="150" cy="240" rx="35" ry="8" fill="url(#steelGradient)" opacity="0.3" />
    <rect x="115" y="200" width="70" height="80" rx="6" fill="url(#steelGradient)" stroke="#64748b" strokeWidth="2" />
    <rect x="120" y="235" width="60" height="40" fill="url(#coffeeDecoction)" />
    <ellipse cx="150" cy="235" rx="30" ry="5" fill="url(#coffeeFroth)" className="animate-pulse" style={{ animationDuration: "3s" }} />

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
