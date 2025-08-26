import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-black p-6">
        <div className="flex flex-col items-center text-center max-w-xl w-full">
          
          {/* Curvy blob background */}
          <div className="relative w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem]">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
              <path
                d="M80,60 Q200,0 320,60 Q380,120 340,240 Q300,360 180,360 Q60,360 40,240 Q20,120 80,60Z"
                fill="#050C28"
              />
            </svg>

            {/* Cartoon filter coffee */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative w-36 h-44">
                <svg viewBox="0 0 120 160" className="w-full h-full">
                  <defs>
                    <linearGradient id="metal" x1="0" x2="1">
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

                  {/* Dabara */}
                  <ellipse cx="60" cy="145" rx="50" ry="12" fill="url(#metal)" />
                  {/* Tumbler */}
                  <rect x="35" y="50" width="50" height="90" rx="10" fill="url(#metal)" />
                  {/* Coffee */}
                  <ellipse cx="60" cy="50" rx="40" ry="15" fill="url(#coffee)" />
                  {/* Froth */}
                  <ellipse cx="60" cy="47" rx="40" ry="12" fill="url(#froth)" className="animate-shimmer" />
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

              {/* 404 text */}
              <h1 className="text-6xl font-extrabold text-white mt-6 animate-bounce-slow">
                404
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-200 mt-6 text-lg">
            Page not found — like <span className="text-orange-400 font-semibold">filter coffee without decoction</span> ☕
          </p>
          <p className="text-gray-400 mt-2">
            The link you brewed doesn't exist. Let's get back before the froth settles!
          </p>

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild className="bg-black border border-white text-white px-6 py-2 rounded-xl">
              <Link to="/events">See Events</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </Layout>
  );
};

export default NotFound;
