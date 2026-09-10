"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AchievementsGallery() {
  const certificates = [
    { src: "/achievements/HACKHAZARDS_26_Achievement_Certificate-1.png", title: "Hackhazards '26" },
    { src: "/achievements/infosys_certificate.png", title: "Infosys Pragati Cohort 8" },
    { src: "/achievements/salesforce_certificate.jpg", title: "Salesforce AI Builders" },
    { src: "/achievements/uniathena_certificate.jpg", title: "UniAthena AI Basics" },
    { src: "/achievements/be10x_certificate.jpg", title: "be10x AI Tools" },
    { src: "/achievements/cbxperts_certificate.png", title: "CreateBytes RAG Webinar" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [certificates.length]);

  return (
    <section id="achievements" className="w-full relative mt-20 mb-20">
      <div className="mb-12">
        <h3 className="text-3xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-cyan-500"></span>
          Certifications
        </h3>
        <p className="text-zinc-400 text-sm tracking-widest uppercase mb-10">Verified professional milestones</p>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden">
        <AnimatePresence initial={false}>
          {certificates.map((cert, index) => {
            // Find position relative to currentIndex
            let offset = index - currentIndex;
            
            // Adjust for infinite wrap-around
            if (offset < -Math.floor(certificates.length / 2)) {
              offset += certificates.length;
            } else if (offset > Math.floor(certificates.length / 2)) {
              offset -= certificates.length;
            }

            // Define animation states for coverflow
            let xPos = "0%";
            let zIndex = 10;
            let scale = 0.6;
            let opacity = 0;

            if (offset === 0) {
              // Center card
              xPos = "0%";
              zIndex = 30;
              scale = 1;
              opacity = 1;
            } else if (offset === 1) {
              // Right card
              xPos = "85%";
              zIndex = 20;
              scale = 0.8;
              opacity = 0.5;
            } else if (offset === -1) {
              // Left card
              xPos = "-85%";
              zIndex = 20;
              scale = 0.8;
              opacity = 0.5;
            } else if (offset > 1) {
              // Hidden to the right
              xPos = "150%";
              zIndex = 10;
              scale = 0.5;
              opacity = 0;
            } else if (offset < -1) {
              // Hidden to the left
              xPos = "-150%";
              zIndex = 10;
              scale = 0.5;
              opacity = 0;
            }

            return (
              <motion.div
                key={cert.src}
                initial={false}
                animate={{ 
                  x: xPos, 
                  scale, 
                  zIndex, 
                  opacity 
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] aspect-[1.4/1] md:aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-950 flex justify-center items-center"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2"
                />
                
                <div 
                  className={`absolute bottom-4 left-4 transition-opacity duration-500 ${offset === 0 ? "opacity-100 delay-300" : "opacity-0"}`}
                >
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-cyan-400 bg-zinc-950/90 px-3 py-1.5 md:px-4 md:py-2 border border-cyan-500/50 rounded-md backdrop-blur-md shadow-lg">
                    {cert.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
