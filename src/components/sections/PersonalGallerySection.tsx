"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PersonalGallerySection() {
  const photos = [
    { src: "/gallery/gallery_1.png", title: "Tech Hackathon Collaboration" },
    { src: "/gallery/gallery_2.png", title: "Focused Coding Session" },
    { src: "/gallery/gallery_3.png", title: "Building in the Zone" },
    { src: "/gallery/gallery_4.jpg", title: "CropIQ Project Presentation" },
    { src: "/gallery/gallery_5.jpg", title: "Team Brainstorming & Development" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section id="personal-gallery" className="w-full relative mt-12 sm:mt-20 mb-12 sm:mb-20">
      <div className="mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 sm:mb-4 flex items-center gap-3">
          <span className="w-8 sm:w-12 h-[2px] bg-cyan-500"></span>
          Personal Gallery
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-10">Behind the scenes moments</p>
      </div>

      <div className="relative w-full h-[260px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-2xl p-2 sm:p-4 md:p-8 overflow-hidden">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 z-40 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all shadow-lg active:scale-95"
          aria-label="Previous Photo"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 z-40 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white backdrop-blur-md transition-all shadow-lg active:scale-95"
          aria-label="Next Photo"
        >
          <ChevronRight size={20} />
        </button>

        <AnimatePresence initial={false}>
          {photos.map((photo, index) => {
            // Find position relative to currentIndex
            let offset = index - currentIndex;
            
            // Adjust for infinite wrap-around
            if (offset < -Math.floor(photos.length / 2)) {
              offset += photos.length;
            } else if (offset > Math.floor(photos.length / 2)) {
              offset -= photos.length;
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
                key={photo.src}
                initial={false}
                animate={{ 
                  x: xPos, 
                  scale, 
                  zIndex, 
                  opacity 
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[88%] sm:w-[70%] md:w-[60%] lg:w-[55%] aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-zinc-950 flex justify-center items-center"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                
                <div 
                  className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 transition-opacity duration-500 ${offset === 0 ? "opacity-100 delay-200" : "opacity-0"}`}
                >
                  <span className="text-[9px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase text-cyan-400 bg-zinc-950/90 px-2.5 py-1 sm:px-4 sm:py-2 border border-cyan-500/50 rounded-md backdrop-blur-md shadow-lg line-clamp-1">
                    {photo.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5">
          {photos.map((_, i) => (
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
