import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "services",
        "portfolio",
        "formations",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Formations", href: "#formations" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Me Contacter", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-slate-950/40 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-brandCyan to-brandViolet rounded-xl flex items-center justify-center shadow-lg shadow-brandCyan/20 group-hover:shadow-brandCyan/40 transition-all">
            <img
              src="./logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            G-tech<span className="text-brandCyan">.</span>
          </span>
        </motion.div>

        {/* Desktop Navigation - Premium Active Indicator */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/10 backdrop-blur-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-brandCyan/20 to-brandViolet/20 rounded-full border border-brandCyan/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-brandCyan hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Parlons projet
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold transition-all ${
                    activeSection === link.href.slice(1)
                      ? "text-brandCyan translate-x-2"
                      : "text-gray-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
