"use client";

import { User, LayoutGrid, Cpu, MessageCircle } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-6 w-full max-w-md mx-auto pointer-events-none">
      <nav className="bg-[#0b1021]/85 border border-[#00F0FF]/30 rounded-full py-2 px-5 shadow-[0_0_30px_rgba(0,240,255,0.2)] flex justify-around items-center backdrop-blur-2xl pointer-events-auto relative overflow-hidden">
        {/* Glow accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-75" />

        <a 
          href="#profile" 
          className="flex flex-col items-center gap-0.5 p-2 text-slate-400 hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300 w-16 group"
          aria-label="Profile"
        >
          <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase mt-0.5">Profile</span>
        </a>
        <a 
          href="#projects" 
          className="flex flex-col items-center gap-0.5 p-2 text-slate-400 hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300 w-16 group"
          aria-label="Projects"
        >
          <LayoutGrid className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase mt-0.5">Projects</span>
        </a>
        <a 
          href="#about" 
          className="flex flex-col items-center gap-0.5 p-2 text-slate-400 hover:text-[#00F0FF] hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300 w-16 group"
          aria-label="About"
        >
          <Cpu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase mt-0.5">About</span>
        </a>
        <a 
          href="https://wa.me/6285899987772" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 p-2 text-slate-400 hover:text-[#FF007F] hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] transition-all duration-300 w-16 group"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase mt-0.5">Chat</span>
        </a>
      </nav>
    </div>
  );
}
