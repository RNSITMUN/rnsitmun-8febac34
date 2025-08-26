import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

/**
 * 404 – Bisibelebath Edition (with animation)
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[90dvh] flex items-center justify-center bg-black">
        <div className="flex flex-col items-center text-center p-6 sm:p-10 max-w-2xl bg-[#050C28] rounded-3xl shadow-2xl">
          {/* Cartoon Filter Coffee SVG */}
          <div className="mx-auto mb-6 w-[14rem] sm:w-[18rem] relative">
            <svg
              viewBox="0 0 300 400"
              className="w-full h-auto drop-shadow-xl"
              role="img"
              aria-labelledby="coffee404Title coffee404Desc"
            >
              <title id="coffee404Title">404 Filter Coffee</title>
              <desc id="coffee404Desc">
                Cartoon steel tumbler with frothy filter coffee in a dabara.
              </desc>

              <defs>
                <linearGradient id="steel" x1="0" x2="1">
                  <stop offset="0%" stopColor="#9ca3af" />
                  <stop offset="100%" stopColor="#f3f4f6" />
                </linearGradient>
                <radialGradient id="coffee" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#92400e" />
                </radialGradient>
                <linearGradient id="froth" x1="0" x2="1">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#f5f5dc" />
                </linearGradient>
              </defs>

              {/* Dabara (base plate) */}
              <ellipse cx="150" cy="340" rx="120" ry="40" fill="url(#steel)" />
              <ellipse
                cx="150"
                cy="340"
                rx="115"
                ry="35"
                fill="#0f172a"
                opacity="0.4"
              />

              {/* Tumbler body */}
              <rect
                x="95"
                y="140"
                width="110"
                height="170"
                rx="20"
                fill="url(#steel)"
                stroke="#6b7280"
                strokeWidth="4"
              />

              {/* Coffee inside */}
              <ellipse cx="150" cy="140" rx="55" ry="25" fill="url(#coffee)" />

              {/* Frothy top */}
              <ellipse
                cx="150"
                cy="135"
                rx="55"
                ry="20"
                fill="url(#froth)"
                className="animate-shimmer"
              />
            </svg>

            {/* Shimmer overlay for froth */}
            <div className="absolute top-[16%] left-0 right-0 h-6 overflow-hidden">
              <div className="absolute -left-1/2 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>

            {/* Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-[30%] left-[20%] w-2 h-2 bg-white rounded-full animate-sparkle"></span>
              <span className="absolute bottom-[35%] right-[30%] w-2 h-2 bg-white rounded-full animate-sparkle delay-500"></span>
            </div>

            {/* Steam rising */}
            <div className="absolute left-1/2 top-[8%] -translate-x-1/2">
              <div className="flex flex-col items-center space-y-1">
                <span className="block w-2 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full animate-steam"></span>
                <span className="block w-2 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full animate-steam delay-150"></span>
              </div>
            </div>
          </div>

          {/* Big 404 */}
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2 animate-bounce">
            404
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-1">
            Page not found — like{" "}
            <span className="font-semibold text-orange-400">
              filter coffee without decoction ☕
            </span>
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-6">
            The link you brewed doesn't exist. Let's get back before the froth settles!
          </p>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 rounded-2xl transition-transform duration-300 hover:scale-105"
            >
              <Link to="/">Return to Home</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-400 text-gray-200 hover:bg-gray-800 rounded-2xl transition-transform duration-300 hover:scale-105"
            >
              <Link to="/events">See Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
