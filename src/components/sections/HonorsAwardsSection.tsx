"use client";
import React from "react";

export default function HonorsAwardsSection() {
  const awards = [
    { src: "/achievements/luminix26_runner.jpg", title: "LUMINIX'26 National Hackathon – 2nd Prize (1st Runner Up)" },
    { src: "/achievements/aideastorm_1.jpg", title: "AIdeastorm Hackathon 2026 Winner (1st Prize)" },
    { src: "/achievements/aideastorm_2.jpg", title: "AIdeastorm Hackathon 2026 Winner (1st Prize)" },
    { src: "/achievements/hackhazards_1.jpg", title: "Hackhazards Top 100 Project" },
    { src: "/achievements/hackhazards_2.png", title: "Hackhazards Top 100 Project" },
    { src: "/achievements/outstanding_intern.png", title: "Outstanding Intern Award" },
    { src: "/achievements/devstack_internship_completion.png", title: "DevStack Internship Completion" },
    { src: "/achievements/internship_completion.jpg", title: "NoviTech Internship Completion" },
    { src: "/achievements/inamigos_1.png", title: "InAmigos Internship Completion" },
    { src: "/achievements/inamigos_2.png", title: "InAmigos Internship Completion" },
  ];

  return (
    <section id="honors" className="w-full relative mt-12 sm:mt-20 mb-12 sm:mb-20">
      <div className="mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 sm:mb-4 flex items-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-cyan-500"></span>
          Honors & Awards
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl">
          A collection of my 3x hackathon victories (including 2nd Prize at LUMINIX'26 and 1st Prize at AIdeastorm '26), internship excellence awards, and notable achievements.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 hover:border-cyan-500/50 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative w-full h-auto">
              <img 
                src={award.src} 
                alt={award.title}
                className="w-full h-auto object-cover opacity-90 sm:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 translate-y-0 sm:translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
                <p className="text-xs sm:text-sm font-semibold text-white drop-shadow-md">
                  {award.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
