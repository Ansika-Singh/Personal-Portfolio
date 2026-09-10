"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { LeetCode } from "../ui/Icons";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative w-full flex flex-col items-center justify-center pt-32 pb-20 text-center"
    >
      {/* Background glowing orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,rgba(6,182,212,0.12)_40%,transparent_70%)] -z-10 blur-3xl"></div>

      {/* Status Badge */}
      <div className="flex items-center gap-2 bg-zinc-900/60 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full mb-8">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-sm font-medium text-zinc-300">Available for Web & AI/ML Opportunities</span>
      </div>

      {/* Headlines */}
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
        Hi, I'm Ansika Singh
      </h1>
      <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 mb-8 max-w-3xl leading-snug">
        Web Developer | UI/UX Designer | AI/ML Enthusiast | Cybersecurity Content Writer
      </h2>

      {/* Summary */}
      <p className="text-zinc-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12">
        Information Science student at Cambridge Institute of Technology specializing in full-stack MERN development, UI/UX design, and AI/ML. Winner of 2 Hackathons.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
        <button 
          onClick={() => handleScroll("#projects")}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
        >
          <span>View Projects</span>
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => handleScroll("#contact")}
          className="flex items-center gap-2 bg-zinc-900/60 backdrop-blur-lg border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:bg-zinc-800/60"
        >
          Contact Me
        </button>
      </div>

      {/* Social Dock */}
      <div className="flex items-center gap-6 bg-zinc-900/60 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-full shadow-2xl">
        <a href="https://github.com/Ansika-Singh" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
          <GithubIcon size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ansika-singh-992b22388" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
          <LinkedinIcon size={24} />
        </a>
        <a href="https://leetcode.com/u/Ansika2694/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#FFA116] transition-colors" aria-label="LeetCode">
          <LeetCode size={24} />
        </a>
        <a href="mailto:ansikasingh2604@gmail.com" className="text-zinc-400 hover:text-cyan-400 transition-colors" aria-label="Email">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}
