"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AchievementsGallery() {
  const certificates = [
    { src: "/achievements/luminix26_runner.jpg", title: "LUMINIX'26 2nd Prize (Runner Up)" },
    { src: "/achievements/HACKHAZARDS_26_Achievement_Certificate-1.png", title: "Hackhazards '26" },
    { src: "/achievements/infosys_certificate.png", title: "Infosys Pragati Cohort 8" },
    { src: "/achievements/salesforce_certificate.jpg", title: "Salesforce AI Builders" },
    { src: "/achievements/uniathena_certificate.jpg", title: "UniAthena AI Basics" },
    { src: "/achievements/be10x_certificate.jpg", title: "be10x AI Tools" },
    { src: "/achievements/cbxperts_certificate.png", title: "CreateBytes RAG Webinar" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [certificates.length]);

  return (
    <section id="achievements" className="w-full relative mt-12 sm:mt-20 mb-12 sm:mb-20">
      <div className="mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 sm:mb-4 flex items-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-cyan-500"></span>
          Certifications
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-10">Verified professional milestones</p>
      </div>

      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-2xl p-2 sm:p-4 md:p-8 overflow-hidden">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 z-40 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all shadow-lg active:scale-95"
          aria-label="Previous Certificate"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all shadow-lg active:scale-95"
          aria-label="Next Certificate"
        >
          <ChevronRight size={20} />
        </button>

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
              xPos = "0%";
              zIndex = 30;
              scale = 1;
              opacity = 1;
            } else if (offset === 1) {
              xPos = "75%";
              zIndex = 20;
              scale = 0.8;
              opacity = 0.35;
            } else if (offset === -1) {
              xPos = "-75%";
              zIndex = 20;
              scale = 0.8;
              opacity = 0.35;
            } else if (offset > 1) {
              xPos = "140%";
              zIndex = 10;
              scale = 0.5;
              opacity = 0;
            } else if (offset < -1) {
              xPos = "-140%";
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
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[85%] sm:w-[65%] md:w-[50%] lg:w-[45%] aspect-[1.4/1] md:aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-zinc-950 flex justify-center items-center"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-contain p-1.5 sm:p-2"
                />
                
                <div 
                  className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 transition-opacity duration-500 ${offset === 0 ? "opacity-100 delay-200" : "opacity-0"}`}
                >
                  <span className="text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase text-cyan-400 bg-zinc-950/90 px-2.5 py-1 sm:px-4 sm:py-2 border border-cyan-500/50 rounded-md backdrop-blur-md shadow-lg line-clamp-1">
                    {cert.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-cyan-400" : "w-1.5 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
