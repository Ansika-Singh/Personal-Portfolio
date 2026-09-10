"use client";

import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TOCSection() {
  const motionWrapperProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "100px" },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
    className: "w-full relative z-10"
  };

  const categories = [
    {
      num: "01",
      title: "AI & ACCESSIBILITY PLATFORMS",
      projects: ["UnifyTalk", "Alias"],
      color: "text-[#06B6D4]",
      href: "#projects-ai"
    },
    {
      num: "02",
      title: "SPATIAL COMPUTING & 3D WEB",
      projects: ["Agni AI 3D Home Designer"],
      color: "text-[#6366F1]",
      href: "#projects-spatial"
    },
    {
      num: "03",
      title: "OFFLINE-FIRST & HEALTHCARE",
      projects: ["Celine Khata CRM", "Luma AI"],
      color: "text-[#8B5CF6]",
      href: "#projects-offline"
    },
    {
      num: "04",
      title: "SEMANTIC DISCOVERY & OUTREACH",
      projects: ["Nexus Platform"],
      color: "text-[#F59E0B]",
      href: "#projects-offline"
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center py-24 px-6 md:px-12 max-w-7xl mx-auto gap-16 lg:gap-24 overflow-hidden">
      {/* Background Ambient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-gradient-to-r from-[#6366F1]/10 to-[#06B6D4]/10 pointer-events-none -z-10"></div>
      
      {/* Left Title Column */}
      <div className="lg:w-1/3 flex flex-col relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.85] break-words"
        >
          TABLE<br/>
          OF<br/>
          CONTENT
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
          className="mt-8 w-16 h-1 bg-white/20"
        ></motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-8 text-zinc-400 text-sm max-w-sm leading-relaxed"
        >
          Explore the projects and systems grouped by their respective domains, showcasing capabilities across AI, full-stack development, and design.
        </motion.p>
      </div>

      {/* Right 2x2 Numbered Project Cards */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
        {categories.map((cat, idx) => (
          <motion.div key={cat.num} {...motionWrapperProps} transition={{ ...motionWrapperProps.transition, delay: idx * 0.15 }} className="w-full h-full">
            <a href={cat.href} className="block h-full">
              <GlassCard className="p-8 h-full group hover:border-cyan-500/50 transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.5)] cursor-pointer relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-8 text-8xl font-black opacity-5 font-mono ${cat.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {cat.num}
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className={`font-mono text-xl mb-4 block ${cat.color}`}>{cat.num}</span>
                    <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-6">
                      {cat.title}
                    </h3>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {cat.projects.map(proj => (
                        <li key={proj} className="text-zinc-300 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                          {proj}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white/50" />
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
