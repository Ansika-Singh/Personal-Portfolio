"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: <Code size={20} />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "PHP", "C", "DSA"],
    },
    {
      title: "Web & Backend",
      icon: <Database size={20} />,
      color: "from-emerald-500 to-teal-500",
      skills: [
        "MongoDB", "Express.js", "React.js", "Node.js", 
        "Next.js", "FastAPI", "REST APIs"
      ],
    },
    {
      title: "Mobile, AI & Design",
      icon: <Smartphone size={20} />,
      color: "from-pink-500 to-pink-500",
      skills: [
        "Android (Java)", "Agentic AI", "Gen AI", "AI", "ML", "DL",
        "TensorFlow.js", "MediaPipe", "UI/UX Design", "Canva", 
        "Visual Design", "Content Writing"
      ],
    },
    {
      title: "Tools, Cloud & Platforms",
      icon: <Wrench size={20} />,
      color: "from-orange-500 to-red-500",
      skills: [
        "Cloud Computing", "Git", "GitHub", "VS Code", "Postman", 
        "Vercel", "Render", "Docker (basic)", "Firebase", "IndexedDB",
        "LeetCode", "HackerRank"
      ],
    }
  ];

  return (
    <section 
      id="skills"
      className="w-full relative"
    >
      <h3 className="text-3xl font-black text-white tracking-tight mb-10 flex items-center gap-3">
        <span className="w-12 h-[2px] bg-cyan-500"></span>
        Technical Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-zinc-900/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                {category.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:border-cyan-500/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
