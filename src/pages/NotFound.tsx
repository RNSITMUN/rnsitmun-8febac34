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
      <div className="min-h-[70dvh] flex items-center justify-center bg-gradient-to-b from-orange-50 to-yellow-100/50">
        <div className="text-center p-6 sm:p-10 max-w-2xl">
          {/* Illustration container */}
          <div className="mx-auto mb-6 w-[18rem] sm:w-[22rem] relative">
            <svg
              viewBox="0 0 520 420"
              className="w-full h-auto drop-shadow-2xl"
              role="img"
              aria-labelledby="thali404Title thali404Desc"
            >
              <title id="thali404Title">404 Thali — Bisibelebath missing</title>
              <desc id="thali404Desc">
                A thali with bowls of food. The bisibelebath bowl is empty, symbolising a 404 page.
              </desc>

              <defs>
                <radialGradient id="plate" cx="50%" cy="45%" r="75%">
                  <stop offset="0%" stopColor="#fffaf0" />
                  <stop offset="100%" stopColor="#f1e6cf" />
                </radialGradient>
                <linearGradient id="steel" x1="0" x2="1">
                  <stop offset="0%" stopColor="#cfcfcf" />
                  <stop offset="100%" stopColor="#f6f6f6" />
                </linearGradient>
                <linearGradient id="sambar" x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffb56b" />
                  <stop offset="100%" stopColor="#ff7a2e" />
                </linearGradient>
                <linearGradient id="chutney" x1="0" x2="1">
                  <stop offset="0%" stopColor="#b7f0a5" />
                  <stop offset="100%" stopColor="#56c35a" />
                </linearGradient>
                <linearGradient id="curd" x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#eef3ff" />
                </linearGradient>
              </defs>

              {/* Plate */}
              <ellipse cx="260" cy="210" rx="240" ry="165" fill="url(#steel)" />
              <ellipse cx="260" cy="210" rx="220" ry="150" fill="url(#plate)" />

              {/* Bowls */}
              <g transform="translate(110,135)">
                <ellipse rx="70" ry="45" fill="url(#steel)" />
                <ellipse rx="62" ry="38" cy="-5" fill="url(#sambar)" />
              </g>

              <g transform="translate(260,110)">
                <ellipse rx="65" ry="42" fill="url(#steel)" />
                <ellipse rx="57" ry="34" cy="-4" fill="url(#chutney)" />
              </g>

              <g transform="translate(380,150)">
                <ellipse rx="60" ry="40" fill="url(#steel)" />
                <ellipse rx="52" ry="32" cy="-4" fill="url(#curd)" />
              </g>

              {/* Idli + Vada */}
              <g transform="translate(180,250)">
                <ellipse rx="48" ry="33" fill="#ffffff" stroke="#e6e6e6" strokeWidth="3" />
                <g transform="translate(105,10)">
                  <ellipse rx="35" ry="25" fill="#f2b174" stroke="#e78933" strokeWidth="3" />
                  <ellipse rx="12" ry="8" fill="#d67c2b" />
                </g>
              </g>

              {/* BISIBELEBATH BOWL — EMPTY */}
              <g transform="translate(330,260)">
                <ellipse rx="75" ry="48" fill="url(#steel)" />
                <ellipse rx="65" ry="40" cy="-6" fill="#f7f0da" stroke="#e0cfaa" strokeWidth="2" />
              </g>
            </svg>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              <div className="absolute -left-1/2 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>

            {/* Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <span className="absolute top-[20%] left-[30%] w-2 h-2 bg-white rounded-full animate-sparkle"></span>
              <span className="absolute bottom-[25%] right-[35%] w-2 h-2 bg-white rounded-full animate-sparkle delay-500"></span>
              <span className="absolute top-[50%] right-[20%] w-2 h-2 bg-white rounded-full animate-sparkle delay-1000"></span>
            </div>

            {/* Steam rising */}
            <div className="absolute left-1/2 top-[42%] -translate-x-1/2">
              <div className="flex flex-col items-center space-y-1">
                <span className="block w-2 h-6 bg-gradient-to-b from-orange-400/80 to-transparent rounded-full animate-steam"></span>
                <span className="block w-2 h-6 bg-gradient-to-b from-orange-400/70 to-transparent rounded-full animate-steam delay-150"></span>
                <span className="block w-2 h-6 bg-gradient-to-b from-orange-400/60 to-transparent rounded-full animate-steam delay-300"></span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-900 mb-3">
            Your thali is incomplete — Bisibelebath is missing!
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for isn't served here. Let's head back before the idlis get cold!
          </p>

          {/* CTA */}
          <Button asChild className="rounded-2xl bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 shadow-md">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
