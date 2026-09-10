"use client";
import React from "react";

export default function HonorsAwardsSection() {
  const awards = [
    { src: "/achievements/aideastorm_1.jpg", title: "AIdeastorm Hackathon 2026 Winner" },
    { src: "/achievements/aideastorm_2.jpg", title: "AIdeastorm Hackathon 2026 Winner" },
    { src: "/achievements/hackhazards_1.jpg", title: "Hackhazards Top 100 Project" },
    { src: "/achievements/hackhazards_2.png", title: "Hackhazards Top 100 Project" },
    { src: "/achievements/outstanding_intern.png", title: "Outstanding Intern Award" },
    { src: "/achievements/devstack_internship_completion.png", title: "DevStack Internship Completion" },
    { src: "/achievements/internship_completion.jpg", title: "NoviTech Internship Completion" },
    { src: "/achievements/inamigos_1.png", title: "InAmigos Internship Completion" },
    { src: "/achievements/inamigos_2.png", title: "InAmigos Internship Completion" },
  ];

  return (
    <section id="honors" className="w-full relative mt-20 mb-20">
      <div className="mb-12">
        <h3 className="text-3xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-cyan-500"></span>
          Honors & Awards
        </h3>
        <p className="text-zinc-400 max-w-2xl">
          A collection of my hackathon victories, internship excellence awards, and notable achievements.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
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
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
                <p className="text-sm font-semibold text-white drop-shadow-md">
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
