"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export default function ProjectsSection() {
  const projects = [
    {
      title: "UnifyTalk — Accessibility Communication Platform",
      badge: "🏆 1st Prize Winner, Aldeastorm 2026 | Collaboration Project",
      tech: ["Web Technologies", "MediaPipe", "Web Speech API", "TTS/STT", "Braille Output"],
      description: "Unified real-time communication platform with Medical Mode and Accessibility Mode integrating sign language detection (MediaPipe), pictogram AAC board, and TTS/STT. Screen reader with Braille output, multilingual support; led frontend development and ideation.",
      github: "https://github.com/bishnu24ise-prog/UnifyTalk",
      live: "https://unify-talk.vercel.app"
    },
    {
      title: "Alias — AI Facial Recognition Attendance System",
      badge: "",
      tech: ["React", "FastAPI", "Python", "Twilio", "Hugging Face Spaces", "Vercel"],
      description: "College portal with four role-based dashboards (Student, Teacher, Principal, Parent) featuring QR + facial recognition attendance, AI anomaly detection, and Twilio WhatsApp/SMS parent alerts. Integrated Web Speech API voice assistant and live seating heatmap.",
      github: "https://github.com/Ansika-Singh/Alias",
      live: "https://alias-self.vercel.app"
    },
    {
      title: "Agni AI — India-First AI-Powered 3D Home Designer",
      badge: "",
      tech: ["React", "Three.js", "Web Speech API", "Python", "AutoCAD DXF Export"],
      description: "AI 3D home designer with Vastu Shastra integration, BHK templates, multilingual voice commands, budget-aware Indian e-commerce furnishing recommendations, and Blueprint Mode. AutoCAD-inspired features including DXF/PDF blueprint export and sun path simulation; targeted at GSSOC '25 and Infosys Springboard Pragati Cohort 8.",
      github: "https://github.com/Ansika-Singh/Agni-AI",
      live: "https://agni-ai-pi.vercel.app"
    },
    {
      title: "Celine — Digital Khata & CRM for Indian Street Vendors",
      badge: "",
      tech: ["Next.js", "IndexedDB", "Service Workers", "Gemini API", "PWA"],
      description: "Offline-first, AI-powered Digital Khata (ledger) and POS/CRM for Indian street vendors and MSMEs with Udhar (credit) tracking, crash-safe atomic writes, and background sync queue. Hands-free voice navigation (English/Hindi), tiered AI assistant (Gemini API online, rule-based engine offline), and Yojana Sahayak government scheme matcher.",
      github: "https://github.com/Ansika-Singh/celine-app",
      live: "https://celine-app.vercel.app"
    },
    {
      title: "Luma — Offline-First, Bias-Aware AI Health Platform",
      badge: "Currently Building 🚧",
      tech: ["React", "Vite", "TensorFlow.js (MobileNet)", "Firebase", "PWA"],
      description: "Currently Building. Offline-first AI platform unifying skin analysis, dental analysis, and skincare recommendations for rural India with on-device inference. Fitzpatrick V/VI bias calibration to eliminate fair-skin diagnostic bias, dynamic tone-matched skincare engine, and severity escalation system.",
      github: null,
      live: null
    },
    {
      title: "Nexus — Semantic People Discovery Platform",
      badge: "",
      tech: ["React", "FastAPI", "Claude AI", "REST APIs"],
      description: "Semantic people discovery and AI outreach platform with backend-connected real API calls, advanced filtering, AI-generated personalized outreach messages, and distinctive multi-accent UI.",
      github: "https://github.com/Ansika-Singh/Nexus",
      live: "https://nexus-taupe-sigma.vercel.app"
    }
  ];

  return (
    <section 
      id="projects"
      className="w-full relative"
    >
      <h3 className="text-3xl font-black text-white tracking-tight mb-10 flex items-center gap-3">
        <span className="w-12 h-[2px] bg-cyan-500"></span>
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-zinc-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
          >
            {project.badge && (
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold mb-4 self-start">
                <Trophy size={14} />
                {project.badge}
              </div>
            )}
            
            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              {project.title.split(" — ")[0]}
              {project.title.includes(" — ") && (
                <span className="block text-lg text-zinc-400 font-medium mt-1">
                  {project.title.split(" — ")[1]}
                </span>
              )}
            </h4>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            {(project.github || project.live) && (
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
