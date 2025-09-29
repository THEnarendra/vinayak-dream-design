import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, X, Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ];

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Logo/Name */}
            {/* <Link 
              to="/" 
              className="flex items-center gap-2 transition-transform hover:scale-105 duration-200"
              onClick={handleLinkClick}
            >
              <img src="/logo.png" alt="Logo" className="w-16 h-16" />
              <span
                className={`font-bold text-xl md:text-xl transition ${
                  scrolled
                    ? "text-primaryBrown"
                    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                }`}
              >
                Vinayak Dream Design
              </span>
            </Link> */}

            <Link 
  to="/" 
  className="flex items-center gap-2 transition-transform hover:scale-105 duration-200"
  onClick={handleLinkClick}
>
  <img 
    src="/logo.png" 
    alt="Vinayak Dream Design Logo" 
    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
  />
  <span
    className={`font-bold text-lg sm:text-xl md:text-2xl transition whitespace-nowrap ${
      scrolled
        ? "text-primaryBrown"
        : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
    }`}
  >
    Vinayak Dream Design
  </span>
</Link>

            {/* Right: WhatsApp + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/919660225994"
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-full font-medium transition flex items-center gap-2 ${
                  scrolled
                    ? "bg-primaryBrown text-white hover:bg-opacity-90"
                    : "bg-white/20 text-white backdrop-blur-sm drop-shadow hover:bg-white/30"
                }`}
              >
                <MessageCircle size={18} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`flex flex-col justify-center items-center w-8 h-8 transition ${
                  scrolled ? "text-primaryBrown" : "text-white drop-shadow"
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X size={24} className="transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Slide-in Sidebar Menu with Backdrop */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
        
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white transform transition-transform duration-500 z-50 shadow-2xl ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="font-bold text-primaryBrown text-xl">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 hover:text-primaryBrown transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col gap-2 p-6 mt-4">
            {menuItems.map((item, idx) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative py-4 px-4 text-darkGray text-lg font-medium transition-all duration-300 hover:text-primaryBrown hover:bg-lightBeige/10 rounded-lg group"
                onClick={handleLinkClick}
                style={{
                  animation: menuOpen
                    ? `fadeInRight 0.4s ease forwards ${idx * 0.1 + 0.2}s`
                    : "none",
                }}
              >
                {item.label}
                {/* underline effect */}
                <span className="absolute left-4 bottom-3 w-0 h-0.5 bg-primaryBrown transition-all duration-300 group-hover:w-8"></span>
              </Link>
            ))}
          </nav>

          {/* Contact info in menu */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <div className="text-sm text-gray-600 mb-2">Get in touch:</div>
            <a 
              href="tel:+919660225994" 
              className="block text-primaryBrown font-medium hover:underline mb-2"
            >
              +91 96602 25994
            </a>
            <a 
              href="mailto:vinayakdreamdesign22@gmail.com" 
              className="block text-primaryBrown font-medium hover:underline"
            >
              vinayakdreamdesign22@gmail.com
            </a>
          </div>
        </div>
      </header>

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes fadeInRight {
            from { 
              opacity: 0; 
              transform: translateX(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateX(0); 
            }
          }
        `}
      </style>
    </>
  );
}