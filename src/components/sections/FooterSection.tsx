import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, LeetCode } from "@/components/ui/Icons";

export default function FooterSection() {
  const achievements = [
    {
      icon: "🏆",
      title: "1st Prize",
      event: "Aldeastorm Hackathon 2026 (UnifyTalk)",
    },
    {
      icon: "🌐",
      title: "HACKHAZARDS '26 Top 100",
      event: "Namespace (Top 1% of 31,000+ global builders)",
    },
    {
      icon: "🏅",
      title: "Outstanding Intern Award",
      event: "DevStack Technologies (June 2026)",
    },
    {
      icon: "🚀",
      title: "Selected Participant",
      event: "Infosys Springboard Pragati Cohort 8 (2026)",
    }
  ];

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col gap-24">
      
      {/* Honors, Awards & Achievements */}
      <div className="flex flex-col gap-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white text-center">
          Honors & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="text-4xl mb-4">{ach.icon}</div>
              <h4 className="text-white font-bold mb-2">{ach.title}</h4>
              <p className="text-xs font-mono text-zinc-400">{ach.event}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Contact Block */}
      <GlassCard className="p-10 md:p-16 text-center relative overflow-hidden flex flex-col items-center max-w-3xl mx-auto w-full shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-[#8B5CF6]/10 blur-xl"></div>
        
        <div className="relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-10">
            Let's Collaborate
          </h2>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto mb-16">
            <a href="mailto:ansikasingh2604@gmail.com" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl">
              <Mail className="text-[#06B6D4]" />
              <span className="text-sm font-medium text-white">ansikasingh2604@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/ansika-singh-992b22388" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl">
              <Linkedin className="text-white" />
              <span className="text-sm font-medium text-white">linkedin.com/in/ansika-singh</span>
            </a>
            <a href="https://github.com/Ansika-Singh" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl">
              <Github className="text-white" />
              <span className="text-sm font-medium text-white">github.com/Ansika-Singh</span>
            </a>
            <a href="https://leetcode.com/u/Ansika2694/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl">
              <LeetCode className="text-[#FFA116]" />
              <span className="text-sm font-medium text-white">leetcode.com/Ansika2694</span>
            </a>
          </div>

          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            © 2026 Ansika Singh. All rights reserved.
          </p>
        </div>
      </GlassCard>
    </footer>
  );
}
