import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    setIsMenuOpen(false); // auto close on route change
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
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50 h-16"
          : "bg-transparent backdrop-blur-sm h-20"
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
                className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full shadow-sm transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-inter font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                RNSIT MUNSoc
              </span>
              <span className="font-inter text-xs text-muted-foreground hidden sm:block tracking-wide">
                Model United Nations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 font-inter text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-11 h-11 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center group"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X
                  size={28}
                  className="text-primary transition-transform duration-500 group-hover:rotate-90"
                />
              ) : (
                <Menu
                  size={28}
                  className="text-primary transition-transform duration-500 group-hover:scale-110"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-background/95 backdrop-blur-xl z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={24} className="text-primary" />
                </button>
              </div>

              {/* Nav Links with Stagger Animation */}
              <motion.div
                className="flex flex-col space-y-4 px-8 pt-4"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

