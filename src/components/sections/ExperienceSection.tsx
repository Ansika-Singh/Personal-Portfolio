"use client";
import React from "react";
import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "01",
      company: "Open Source Connect India",
      role: "Next.js Developer",
      type: "Active Role",
      date: "Aug 2026 – Present",
      location: "Remote",
      description: [
        "Selected as Next.js Developer for Open Source Connect India 2026.",
        "Contributing to core initiatives and developer adoption strategies.",
        "Building and optimizing open source platforms for community engagement."
      ],
      skills: ["Next.js", "React", "Open Source", "Community Building"]
    },
    {
      id: "02",
      company: "One Tappe (Tappverse)",
      role: "Back End Developer",
      type: "Active Role",
      date: "Aug 2026 – Present",
      location: "Remote",
      description: [
        "Contributing to MERN stack web development and robust system architecture.",
        "Engineering REST APIs for seamless data flow and integration.",
        "Implementing AI/LLM-powered recommendation and support features to enhance user experience."
      ],
      skills: ["MERN Stack", "REST APIs", "Node.js", "AI Integration"]
    },
    {
      id: "03",
      company: "NoviTech R&D",
      role: "Full Stack Development Intern",
      type: "Internship",
      date: "July 2026 – August 2026",
      location: "Coimbatore / Remote",
      description: [
        "Immersed in a comprehensive, learning-based internship focusing on advanced Web Development.",
        "Gained hands-on experience and deep architectural insights into the MERN stack (MongoDB, Express, React, Node.js).",
        "Developed scalable full-stack application structures and refined backend logic."
      ],
      skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      id: "04",
      company: "DevStack Technologies",
      role: "Web Developer Intern",
      type: "Internship",
      date: "June 2026",
      location: "Remote",
      description: [
        "Developed real-world web projects utilizing modern HTML, CSS, and JavaScript.",
        "Demonstrated strong enthusiasm and dedication to building highly responsive user interfaces.",
        "Awarded the Outstanding Intern Award for impactful contributions and rapid skill acquisition."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: "05",
      company: "InAmigos Foundation",
      role: "Visual Design & Content Intern",
      type: "Internship",
      date: "Jan 2026 – Feb 2026",
      location: "Remote",
      description: [
        "Completed a dual-focused internship spanning visual design and content writing disciplines.",
        "Orchestrated cohesive design narratives for digital campaigns.",
        "Crafted engaging content, uniting creative visual strategy with compelling and persuasive copy."
      ],
      skills: ["Visual Design", "Content Writing", "Creative Strategy", "Copywriting"]
    }
  ];

  return (
    <section id="experience" className="w-full relative mt-20 mb-20 selection:bg-cyan-500/30">
      <div className="mb-24 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          Professional Trajectory
        </h2>
        <div className="flex items-center gap-4 opacity-60">
          <div className="h-[1px] w-12 bg-cyan-500"></div>
          <p className="text-[10px] md:text-xs tracking-[0.3rem] uppercase text-cyan-400 font-bold">
            Experience & Impact
          </p>
          <div className="h-[1px] w-12 bg-cyan-500"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative pb-28">
        {experiences.map((exp, index) => {
          // Dynamic calculation for sticky stacking
          const topPosition = 90 + index * 54;
          const zIndex = 10 + index;
          
          return (
            <div 
              key={exp.id}
              style={{ top: `${topPosition}px`, zIndex }}
              className={`sticky transition-all duration-300 ${
                index === experiences.length - 1 ? 'mb-0' : 'mb-24 md:mb-32'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-cyan-500/60 group">
                
                {/* Header */}
                <div className="bg-zinc-900 border-b border-white/5 px-6 md:px-10 py-3.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-cyan-400">
                      {exp.id} // {exp.company.toUpperCase()}
                    </span>
                    <div className="hidden sm:block w-4 h-[1px] bg-cyan-500/40"></div>
                    <span className="hidden sm:inline text-[11px] tracking-wider uppercase text-zinc-400">
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 px-2.5 py-0.5 border border-cyan-500/30 bg-[#0a0b0e] rounded-full">
                      {exp.type}
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-white bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      <Briefcase className="w-2.5 h-2.5 text-cyan-400" />
                      Role
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-cyan-400">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-xs text-zinc-400 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-500" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r from-cyan-500/40 via-white/10 to-transparent mb-6"></div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-zinc-300 leading-relaxed">
                        <span className="text-cyan-500 text-lg leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 bg-[#0a0b0e] border border-white/10 px-3.5 py-1.5 rounded-md group-hover:border-cyan-500/30 group-hover:text-white transition-all shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black text-white/[0.02] pointer-events-none select-none tracking-tighter">
        EXPERIENCE
      </div>
    </section>
  );
}
