"use client";
import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 z-50 bg-zinc-900/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-6"
    >
      <ul className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile abbreviated links or just the resume button */}
      
      <a 
        href="/Ansika_Singh_Resume.pdf" 
        download="Ansika_Singh_Resume.pdf"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white text-sm font-bold px-4 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
      >
        <Download size={16} />
        <span>Resume</span>
      </a>
    </motion.nav>
  );
}
