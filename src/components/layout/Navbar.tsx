
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 safe-area-inset-top ${
        scrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50 py-2 h-16"
          : "bg-background/95 backdrop-blur-lg py-3 sm:py-4 h-20 md:h-16"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/mun-logo.jpg"
                alt="MUN Logo"
                className="h-14 w-14 md:h-16 md:w-16 object-contain rounded-full shadow-sm transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-inter font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                RNSIT MUNSoc
              </span>
              <span className="font-inter text-xs text-muted-foreground hidden sm:block tracking-wide">
                Model United Nations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-lusion relative px-4 py-2 font-inter font-medium text-sm uppercase tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path
                    ? "text-primary after:scale-x-100 after:origin-bottom-left"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  location.pathname === link.path ? 'opacity-100' : ''
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center group touch-manipulation"
              aria-label="Toggle navigation menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={30} className="text-primary transition-transform group-hover:rotate-90" />
                ) : (
                  <Menu size={30} className="text-primary transition-transform group-hover:scale-110" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 py-6"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-6 border-t border-border/30 safe-area-inset-bottom">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-4 font-inter text-base font-medium transition-all duration-300 rounded-xl relative group touch-manipulation ${
                  location.pathname === link.path
                    ? "text-primary font-semibold bg-gradient-to-r from-primary/10 to-accent/5 shadow-lg shadow-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 flex items-center">
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
