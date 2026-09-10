"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, GraduationCap } from "lucide-react";
import { LeetCode } from "../ui/Icons";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function ContactSection() {
  return (
    <section 
      id="contact"
      className="w-full relative flex flex-col items-center"
    >
      <div className="w-full max-w-4xl bg-zinc-900/60 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient background glow inside the container */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_60%)] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_60%)] -z-10 blur-3xl"></div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Let's Connect</h3>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8 w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h5 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-1">Email</h5>
                <a href="mailto:ansikasingh2604@gmail.com" className="text-white hover:text-cyan-400 text-lg font-medium transition-colors">
                  ansikasingh2604@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-1">Location</h5>
                <p className="text-white text-lg font-medium">Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h5 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-1">Education</h5>
                <p className="text-white text-lg font-medium">B.E. Information Science, Cambridge Institute of Technology</p>
              </div>
            </div>

            <div className="pt-6 mt-2 border-t border-white/10 flex items-center justify-center gap-6">
              <a 
                href="https://github.com/Ansika-Singh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-white hover:text-zinc-950 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ansika-singh-992b22388" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="https://leetcode.com/u/Ansika2694/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-[#FFA116] hover:text-white transition-all duration-300"
                aria-label="LeetCode"
              >
                <LeetCode size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center pb-8">
        <p className="text-zinc-500 text-sm">
          © 2026 Ansika Singh. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
