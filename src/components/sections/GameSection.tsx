"use client";
import React from "react";
import { ExternalLink, Trophy, Gamepad2 } from "lucide-react";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export default function GameSection() {
  const games = [
    {
      title: "Hangman Frontend — Web Game",
      badge: "Fun & Interactive",
      tech: ["JavaScript", "Web Tech", "Game"],
      description: "A fun and interactive frontend for the classic Hangman game, deployed live on Vercel.",
      github: "https://github.com/Ansika-Singh/hangman-frontend",
      live: "https://hangman-frontend-beta.vercel.app"
    }
  ];

  return (
    <section 
      id="games"
      className="w-full relative"
    >
      <h3 className="text-3xl font-black text-white tracking-tight mb-10 flex items-center gap-3">
        <span className="w-12 h-[2px] bg-cyan-500"></span>
        Games
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <div 
            key={index}
            className="bg-zinc-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
          >
            {game.badge && (
              <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-400 border border-pink-500/20 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start">
                <Gamepad2 size={14} />
                {game.badge}
              </div>
            )}
            
            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {game.title.split(" — ")[0]}
              {game.title.includes(" — ") && (
                <span className="block text-lg text-zinc-400 font-medium mt-1">
                  {game.title.split(" — ")[1]}
                </span>
              )}
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">
              {game.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              {game.description}
            </p>

            {(game.github || game.live) && (
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                {game.github && (
                  <a 
                    href={game.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                )}
                {game.live && game.live !== "#" && (
                  <a 
                    href={game.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Play Now
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
