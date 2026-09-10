"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GameSection from "@/components/sections/GameSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HonorsAwardsSection from "@/components/sections/HonorsAwardsSection";
import AchievementsGallery from "@/components/sections/AchievementsGallery";
import PersonalGallerySection from "@/components/sections/PersonalGallerySection";
import ContactSection from "@/components/sections/ContactSection";
import IntroAnimation from "@/components/ui/IntroAnimation";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    if (!introFinished) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [introFinished]);

  return (
    <main className="relative w-full min-h-screen bg-[#0a0b0e] text-zinc-300 font-sans selection:bg-cyan-500/30">
      
      <AnimatePresence>
        {!introFinished && (
          <motion.div 
            key="intro"
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <IntroAnimation onComplete={() => setIntroFinished(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`w-full transition-opacity duration-1000 ${introFinished ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Navbar />
        
        {/* Main Layout Container with strict vertical flow */}
        <div className="flex flex-col space-y-28 max-w-6xl mx-auto w-full px-6 py-20 relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GameSection />
          <ExperienceSection />
          <HonorsAwardsSection />
          <AchievementsGallery />
          <PersonalGallerySection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
