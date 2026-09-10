import React from "react";

export default function FloatingNav() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-1 md:gap-4 bg-zinc-900/70 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xs md:text-sm font-medium text-zinc-400 hover:text-white px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
