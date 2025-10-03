// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import  Button  from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent hover:drop-shadow-lg transition-all duration-300"
        >
          Disha<span className="text-gray-900">.</span>
        </a>

        {/* Desktop Menu */}
       <div className="hidden md:flex items-center space-x-6">
  {links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className="relative text-gray-200 hover:text-yellow-400 transition-all duration-300 group drop-shadow-sm"
      style={{ fontWeight: "450" ,fontSize: "1rem"}}
    >
      {link.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  ))}
  <Button variant="hero" size="sm">
    Resume
  </Button>
</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl animate-slide-up space-y-4 mx-2 mb-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">
            Resume
          </Button>
        </div>
      )}

      {/* Keyframes for mobile slide-up animation */}
      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
