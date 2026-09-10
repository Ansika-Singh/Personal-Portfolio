"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Code2, BrainCircuit } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="w-full relative"
    >
      <h3 className="text-3xl font-black text-white tracking-tight mb-10 flex items-center gap-3">
        <span className="w-12 h-[2px] bg-cyan-500"></span>
        About Me
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: About Me text */}
        <div className="bg-zinc-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
              <Code2 size={24} />
            </div>
            <h4 className="text-xl font-bold text-white">Who I Am</h4>
          </div>
          
          <div className="space-y-4 text-zinc-400 font-normal leading-relaxed flex-grow">
            <p>
              I am an Information Science student and passionate full-stack developer specializing in the MERN stack. My mission is to build digital experiences that are not just highly performant and scalable, but also deeply accessible.
            </p>
            <p>
              By leveraging applied AI systems and modern web technologies, I love solving real-world challenges—whether that's creating offline-first applications for rural India or building inclusive platforms for marginalized communities.
            </p>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">4+</span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Hackathons Won</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">15+</span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Projects Built</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Photo */}
        {/* Card 2: Photo */}
        <div className="flex flex-col h-full items-center justify-center relative">
          <ProfileCard
            name="Ansika Singh"
            title="Software Engineer"
            handle="Ansika-Singh"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            behindGlowEnabled={true}
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>
    </section>
  );
}
