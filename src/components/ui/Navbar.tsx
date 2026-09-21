"use client";
import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Honors", href: "#honors" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-lg flex flex-col items-center">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full sm:w-auto bg-zinc-900/90 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center justify-between sm:justify-start gap-4 sm:gap-6"
      >
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-xs lg:text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          <span>Menu</span>
        </button>
        
        {/* Resume Action */}
        <a 
          href="/Ansika_Singh_Resume.pdf" 
          download="Ansika_Singh_Resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
        >
          <Download size={14} className="sm:w-4 sm:h-4" />
          <span>Resume</span>
        </a>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 w-full bg-zinc-950/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl flex flex-col gap-1"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
