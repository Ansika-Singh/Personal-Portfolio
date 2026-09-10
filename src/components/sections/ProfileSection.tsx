"use client";

import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin } from "lucide-react";
import { Github, Linkedin, LeetCode } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export default function ProfileSection() {
  const motionWrapperProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "100px" },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
    className: "w-full relative z-10 h-full flex flex-col"
  };

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Left Profile Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
          <motion.div {...motionWrapperProps}>
            <p className="text-zinc-400 uppercase tracking-widest text-sm mb-2">Hello! I am</p>
            <h2 className="text-5xl font-black uppercase tracking-tight text-white mb-2">Ansika Singh</h2>
            <p className="text-[#06B6D4] font-medium tracking-wide">
              Web Developer & AI/ML Engineer
            </p>
          </motion.div>

          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.1 }} className="flex-grow min-h-[400px] relative z-10">
            <GlassCard className="h-full relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-zinc-300">
                <MapPin size={16} className="text-[#06B6D4]" />
                <span className="text-sm">Bangalore, Karnataka, India</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bottom Contact Pill Bar */}
          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.2 }} className="flex gap-4 relative z-10">
            <a href="mailto:ansikasingh2604@gmail.com" className="flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full py-3 flex justify-center items-center backdrop-blur-md">
              <Mail size={20} className="text-zinc-300 hover:text-white" />
            </a>

            <a href="http://linkedin.com/in/ansika-singh-992b22388" target="_blank" rel="noreferrer" className="flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full py-3 flex justify-center items-center backdrop-blur-md">
              <Linkedin size={20} className="text-zinc-300 hover:text-white" />
            </a>
            <a href="http://github.com/Ansika-Singh" target="_blank" rel="noreferrer" className="flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full py-3 flex justify-center items-center backdrop-blur-md">
              <Github size={20} className="text-zinc-300 hover:text-white" />
            </a>
            <a href="https://leetcode.com/u/Ansika2694/" target="_blank" rel="noreferrer" className="flex-1 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full py-3 flex justify-center items-center backdrop-blur-md">
              <LeetCode size={20} className="text-zinc-300 hover:text-[#FFA116]" />
            </a>
          </motion.div>
        </div>

        {/* Right 2x2 Bento Matrix (7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          
          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.1 }}>
            <GlassCard className="p-6 h-full flex flex-col hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                About Me
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Information Science student at Cambridge Institute of Technology specializing in Web Development, UI/UX Design, and AI/ML. Built UnifyTalk (1st Prize, Aldeastorm 2026), Alias (AI facial recognition attendance system), Agni AI (India-first AI 3D home designer with Vastu Shastra integration), and Nexus (semantic people discovery platform). Experienced in full-stack MERN development with a focus on solving real-world problems through technology.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.2 }}>
            <GlassCard className="p-6 h-full flex flex-col hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
                Education
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="border-l-2 border-white/10 pl-3">
                  <div className="text-zinc-200 font-medium">Cambridge Institute of Technology</div>
                  <div className="text-zinc-500 text-xs mt-1">B.E. ISE • Sept 2024 – Aug 2028</div>
                </li>
                <li className="border-l-2 border-white/10 pl-3">
                  <div className="text-zinc-200 font-medium">BGS PU College</div>
                  <div className="text-zinc-500 text-xs mt-1">12th Science Stream (94%) • 2022 – 2024</div>
                </li>
                <li className="border-l-2 border-white/10 pl-3">
                  <div className="text-zinc-200 font-medium">Narayana E-Techno School</div>
                  <div className="text-zinc-500 text-xs mt-1">10th Completed • 2022</div>
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.3 }} className="md:col-span-2 w-full relative z-10">
            <GlassCard id="skills" className="p-6 flex flex-col hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                Skills & Toolset
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Python", "Java", "JavaScript", "PHP", "C", "HTML", "CSS",
                  "MERN Stack", "Next.js", "FastAPI", "REST APIs", "Android (Java)",
                  "Three.js", "MediaPipe", "TensorFlow.js", "UI/UX Design",
                  "Git/GitHub", "VS Code", "Postman", "Vercel", "Docker"
                ].map(s => <span key={s} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-zinc-300 font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">{s}</span>)}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: 0.4 }} className="md:col-span-2 w-full relative z-10">
            <GlassCard id="experience" className="p-6 flex flex-col hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span>
                Work Experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="border-t border-white/10 pt-3">
                  <div className="text-white font-medium mb-1">Next.js Developer</div>
                  <div className="text-[#06B6D4] text-xs mb-2">Open Source Connect (Aug '26 – Present)</div>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="text-white font-medium mb-1">Back End Developer</div>
                  <div className="text-[#06B6D4] text-xs mb-2">One Tappe (Aug '26 – Present)</div>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="text-white font-medium mb-1">Web Developer Intern</div>
                  <div className="text-[#06B6D4] text-xs mb-2">DevStack Technologies (June '26)</div>
                  <p className="text-zinc-400 text-xs italic">Outstanding Intern Award</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
