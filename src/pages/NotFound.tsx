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
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black px-6">
        {/* Blob + Cartoon Filter Coffee */}
        <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem]">
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80,60 Q200,0 320,60 Q380,120 340,240 Q300,360 180,360 Q60,360 40,240 Q20,120 80,60Z"
              fill="#050C28"
            />
          </svg>

          {/* Coffee Illustration */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative w-32 h-40">
              <svg viewBox="0 0 120 160" className="w-full h-full">
                <defs>
                  <linearGradient id="steel" x1="0" x2="1">
                    <stop offset="0%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#f3f4f6" />
                  </linearGradient>
                  <radialGradient id="coffee" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#78350f" />
                  </radialGradient>
                  <radialGradient id="froth" cx="50%" cy="25%" r="65%">
                    <stop offset="0%" stopColor="#fff9db" />
                    <stop offset="100%" stopColor="#fef3c7" />
                  </radialGradient>
                </defs>

                {/* Dabara */}
                <ellipse cx="60" cy="145" rx="50" ry="12" fill="url(#steel)" />

                {/* Tumbler */}
                <rect
                  x="35"
                  y="50"
                  width="50"
                  height="90"
                  rx="10"
                  fill="url(#steel)"
                />

                {/* Coffee */}
                <ellipse cx="60" cy="50" rx="40" ry="15" fill="url(#coffee)" />

                {/* Froth */}
                <ellipse
                  cx="60"
                  cy="47"
                  rx="40"
                  ry="12"
                  fill="url(#froth)"
                  className="animate-shimmer"
                />
              </svg>

              {/* Steam animation */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    key={i}
                    className="block w-1 h-10 bg-gradient-to-b from-white/70 to-transparent rounded-full animate-steam"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                ))}
              </div>
            </div>

            {/* 404 Text */}
            <h1 className="text-6xl font-extrabold text-white mt-6 animate-bounce-slow">
              404
            </h1>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-200 mt-6 text-lg">
          Page not found — like{" "}
          <span className="text-orange-500 font-semibold">
            filter coffee without decoction
          </span>{" "}
          ☕
        </p>
        <p className="text-gray-400 mt-2">
          The link you brewed doesn’t exist. Let’s get back before the froth settles!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800 px-6 py-2 rounded-xl">
            <Link to="/events">See Events</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
