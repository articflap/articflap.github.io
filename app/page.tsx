"use client";

import Image from "next/image";
import { Sparkles, MessageCircle, Github, Heart, Cpu, ShieldCheck, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectShowcase } from "./components/project-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ParticlesBackground from "./components/Particles";

// Hoisted static array (Performance best practice)
const SKILLS = [
  "PHP", "Laravel", "CodeIgniter", "MySQL", "PostgreSQL",
  "React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vite", "n8n"
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col select-none text-slate-100 font-sans bg-[#070A14] bg-cyber-grid">
      {/* Background ambient glowing neon shapes (Cyan, Magenta, Purple - NO Yellow) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#00F0FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF007F]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-[#9D4EDD]/15 rounded-full blur-[120px] pointer-events-none" />
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
          {/* Cyber Holographic Avatar Container */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative group"
          >
            {/* Animated Rotating Neon Aura (Cyan & Magenta) */}
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-[#00F0FF] via-[#9D4EDD] to-[#FF007F] opacity-80 blur-md animate-spin-slow group-hover:opacity-100 transition-opacity" />
            
            <div className="relative p-1 rounded-full bg-[#0B1021] border border-[#00F0FF]/60 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              <Avatar className="w-32 h-32 border-2 border-[#00F0FF] bg-[#070A14]">
                <AvatarImage src="/mascot.webp" alt="Articflap Profile" className="object-cover" />
                <AvatarFallback className="text-3xl font-black bg-[#0B1021] text-[#00F0FF]">AF</AvatarFallback>
              </Avatar>
            </div>

            {/* Online Live Status Indicator */}
            <span className="absolute bottom-1 right-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B1021]/90 border border-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.6)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F0FF]"></span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#00F0FF]">ONLINE</span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex flex-col gap-1.5 items-center"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1021]/80 border border-[#00F0FF]/40 text-[#00F0FF] text-[10px] font-mono font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(0,240,255,0.2)]">
              <Code2 className="w-3.5 h-3.5 text-[#00F0FF]" />
              FULLSTACK WEB & MOBILE DEVELOPER
            </div>
            <h1 className="text-3xl font-heading font-black tracking-tight text-white mt-1">
              Hi, I'm <span className="bg-gradient-to-r from-[#00F0FF] via-[#A855F7] to-[#FF007F] bg-clip-text text-transparent font-black inline-block drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]">Articflap</span>
            </h1>
            <p className="text-xs text-slate-300 font-mono tracking-wide max-w-xs">
              Building High-Performance Web Applications & Scalable Backends
            </p>
          </motion.div>

          {/* Action Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5 w-full mt-1"
          >
            <div className="px-4 py-2 bg-[#0B1021]/90 border border-[#00F0FF]/40 text-[#00F0FF] hover:border-[#00F0FF] rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md transition-all cursor-default">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              7+ Years Exp
            </div>
            <a 
              href="https://wa.me/6285899987772" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0B1021]/90 border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/20 hover:border-[#00F0FF] hover:scale-105 active:scale-95 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#00F0FF]" />
              Chat Info
            </a>
            <a 
              href="https://github.com/articflap" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0B1021]/90 border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF]/20 hover:border-[#00F0FF] hover:scale-105 active:scale-95 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md transition-all"
            >
              <Github className="w-4 h-4 text-[#00F0FF]" />
              GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-br from-[#0B1021] via-[#0F172A] to-[#070A14] text-white rounded-[24px] p-6 shadow-[0_0_25px_rgba(0,240,255,0.15)] relative overflow-hidden flex flex-col gap-2 border border-[#00F0FF]/40 group"
        >
          {/* Cyber Edge Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#9D4EDD] to-[#FF007F]" />
          
          <h2 className="text-xl font-heading font-black leading-tight bg-gradient-to-r from-white via-cyan-200 to-[#00F0FF] bg-clip-text text-transparent">
            Unlock Your Full Digital Product Potential
          </h2>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            High-performance fullstack web & mobile development crafted with modern frameworks and robust backend architecture.
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
          <Card className="bg-[#0B1021]/80 backdrop-blur-xl border-[#00F0FF]/30 rounded-[24px] shadow-[0_0_20px_rgba(0,240,255,0.1)] p-6">
            <CardHeader className="p-0 pb-3">
              <CardTitle className="text-xs font-mono font-bold uppercase tracking-widest text-[#00F0FF] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00F0FF]" />
                SYSTEM ARCHITECT & DEVELOPER
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-slate-300 text-xs leading-relaxed font-medium">
                Over 7 years crafting scalable architectures. Deep backend expertise (PHP, Laravel, CodeIgniter) meets responsive modern frontend development (React, Next.js). I design products that deliver absolute customer satisfaction without compromising on performance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0B1021]/80 backdrop-blur-xl border-[#FF007F]/30 rounded-[24px] shadow-[0_0_20px_rgba(255,0,127,0.1)] p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF007F] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#FF007F]" />
                CORE TECH STACK
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
                    className="px-3.5 py-1.5 bg-[#070A14] border border-[#00F0FF]/30 text-[#00F0FF] rounded-xl text-xs font-mono font-bold shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:border-[#00F0FF] hover:bg-[#00F0FF]/20 hover:text-white transition-all cursor-default"
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
      <footer className="w-full text-center py-4 bg-[#0B1021]/80 backdrop-blur-md border-t border-[#00F0FF]/20 relative z-20 shadow-xs">
        <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5 font-medium">
          © {new Date().getFullYear()} Made with <Heart className="w-4 h-4 text-[#FF007F] fill-[#FF007F] animate-pulse" /> by Articflap
        </p>
      </footer>
    </main>
  );
}
