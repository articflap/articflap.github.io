"use client";

import Image from "next/image";
import { Sparkles, MessageCircle, Github, Heart, Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ProjectShowcase } from "./components/project-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import ParticlesBackground from "./components/Particles";

// Hoisted static array (Performance best practice)
const SKILLS = [
  "PHP", "Laravel", "CodeIgniter", "MySQL", "PostgreSQL",
  "React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vite"
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col select-none text-[#1E192B] font-sans">
      {/* Background ambient glow shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C9E252]/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#7452E8]/15 rounded-full blur-[100px] pointer-events-none" />
      <ParticlesBackground />

      {/* --- APP SCROLLABLE SCREEN BODY --- */}
      <div className="flex-grow overflow-y-auto scrollbar-none pt-8 pb-28 relative z-10 px-4 mx-auto w-full max-w-md flex flex-col gap-6">
        
        {/* Signature Hero Profile Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          id="profile" 
          className="scroll-mt-24 w-full flex flex-col items-center text-center gap-5 relative z-10 pt-2"
        >
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative"
          >
            <div className="p-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-white">
              <Avatar className="w-28 h-28 border-2 border-[#C9E252] bg-white">
                <AvatarImage src="/mascot.webp" alt="Articflap" className="object-cover" />
                <AvatarFallback className="text-3xl font-black bg-[#F2EDFF] text-[#7452E8]">AF</AvatarFallback>
              </Avatar>
            </div>
            <span className="absolute bottom-1.5 right-1.5 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9E252] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#C9E252] border-2 border-white shadow-xs"></span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col gap-1"
          >
            <h1 className="text-3xl font-heading font-black tracking-tight text-[#1E192B]">
              Hi, I'm <span className="bg-[#C9E252] px-3 py-0.5 rounded-2xl text-[#1E192B] inline-block shadow-xs">Articflap</span>
            </h1>
            <p className="text-xs text-[#685F7A] font-bold tracking-wide mt-1">
              Architecting Scalable Backends & Fluid Frontends
            </p>
          </motion.div>

          {/* Action Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5 w-full mt-1"
          >
            <div className="px-4 py-2 bg-white/90 border border-white text-[#1E192B] hover:bg-[#C9E252] rounded-full text-xs font-black flex items-center gap-1.5 shadow-xs backdrop-blur-md transition-all cursor-default">
              <Code2 className="w-4 h-4 text-[#7452E8]" />
              7+ Years Exp
            </div>
            <a 
              href="https://wa.me/6285899987772" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/90 border border-white text-[#1E192B] hover:bg-[#C9E252] hover:scale-105 active:scale-95 rounded-full text-xs font-black flex items-center gap-1.5 shadow-xs backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#7452E8]" />
              Chat Info
            </a>
            <a 
              href="https://github.com/articflap" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/90 border border-white text-[#1E192B] hover:bg-[#C9E252] hover:scale-105 active:scale-95 rounded-full text-xs font-black flex items-center gap-1.5 shadow-xs backdrop-blur-md transition-all"
            >
              <Github className="w-4 h-4 text-[#7452E8]" />
              GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* Lime Accent Banner Card (Reference Design Highlight) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-br from-[#C9E252] via-[#C5DE4B] to-[#B3CD39] text-[#1E192B] rounded-[28px] p-6 shadow-xs relative overflow-hidden flex flex-col gap-2 border border-white/50"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/70 rounded-full text-[#1E192B] backdrop-blur-xs">
              Featured Services
            </span>
            <Sparkles className="w-5 h-5 text-[#1E192B]" />
          </div>
          <h2 className="text-xl font-heading font-black leading-snug mt-1 text-[#1E192B]">
            Unlock Your Full Digital Product Potential
          </h2>
          <p className="text-xs text-[#1E192B]/85 font-semibold leading-relaxed">
            High-performance fullstack web & mobile development crafted with precision and care.
          </p>
        </motion.div>

        {/* Featured Apps Showcase Grid */}
        <ProjectShowcase />

        {/* About & Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="about" 
          className="flex flex-col gap-4 w-full"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-white/80 rounded-[28px] shadow-[0_8px_30px_rgba(110,95,170,0.06)] p-6">
            <CardHeader className="p-0 pb-3">
              <CardTitle className="text-xs font-heading font-black uppercase tracking-widest text-[#7452E8] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9E252]" />
                System Architect
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-[#685F7A] text-xs leading-relaxed font-semibold">
                Over 7 years crafting scalable architectures. Deep backend expertise (PHP, Laravel, CodeIgniter) meets responsive modern frontend development (React, Next.js). I design products that deliver absolute customer satisfaction without compromising on performance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-xl border-white/80 rounded-[28px] shadow-[0_8px_30px_rgba(110,95,170,0.06)] p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-xs font-heading font-black uppercase tracking-widest text-[#7452E8] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7452E8]" />
                Core Modules
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 120 }}
                    key={i} 
                    className="px-3.5 py-1.5 bg-[#F2EDFF] border border-[#E4DCFC] text-[#7452E8] rounded-2xl text-xs font-extrabold shadow-2xs hover:bg-[#C9E252] hover:text-[#1E192B] hover:border-[#C9E252] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>

      {/* Fixed App Footer */}
      <footer className="w-full text-center py-4 bg-white/75 backdrop-blur-md border-t border-white/70 relative z-20 shadow-xs">
        <p className="text-[#685F7A] text-xs flex items-center justify-center gap-1.5 font-bold">
          © {new Date().getFullYear()} Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Articflap
        </p>
      </footer>
    </main>
  );
}
