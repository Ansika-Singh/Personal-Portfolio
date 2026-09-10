"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalGallerySection() {
  const photos = [
    { src: "/gallery/gallery_1.png", title: "Tech Hackathon Collaboration" },
    { src: "/gallery/gallery_2.png", title: "Focused Coding Session" },
    { src: "/gallery/gallery_3.png", title: "Building in the Zone" },
    { src: "/gallery/gallery_4.jpg", title: "CropIQ Project Presentation" },
    { src: "/gallery/gallery_5.jpg", title: "Team Brainstorming & Development" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section id="personal-gallery" className="w-full relative mt-20 mb-20">
      <div className="mb-12">
        <h3 className="text-3xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-cyan-500"></span>
          Personal Gallery
        </h3>
        <p className="text-zinc-400 text-sm tracking-widest uppercase mb-10">Behind the scenes moments</p>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center bg-zinc-900/40 border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden">
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
                key={photo.src}
                initial={false}
                animate={{ 
                  x: xPos, 
                  scale, 
                  zIndex, 
                  opacity 
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[80%] sm:w-[70%] md:w-[60%] lg:w-[55%] aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-950 flex justify-center items-center"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                
                <div 
                  className={`absolute bottom-4 left-4 transition-opacity duration-500 ${offset === 0 ? "opacity-100 delay-300" : "opacity-0"}`}
                >
                  <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-cyan-400 bg-zinc-950/90 px-3 py-1.5 md:px-4 md:py-2 border border-cyan-500/50 rounded-md backdrop-blur-md shadow-lg">
                    {photo.title}
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
