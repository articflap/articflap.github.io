"use client";

import { User, LayoutGrid, Sparkles, MessageCircle } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-6 w-full max-w-md mx-auto pointer-events-none">
      <nav className="bg-background/90 border border-primary/20 rounded-full py-2 px-6 shadow-[0_8px_32px_rgba(137,207,240,0.15)] flex justify-around items-center backdrop-blur-xl pointer-events-auto">
        <a 
          href="#profile" 
          className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors duration-300 w-16"
          aria-label="Profile"
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-heading font-black mt-0.5">Profile</span>
        </a>
        <a 
          href="#projects" 
          className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors duration-300 w-16"
          aria-label="Projects"
        >
          <LayoutGrid className="w-6 h-6" />
          <span className="text-[10px] font-heading font-black mt-0.5">Projects</span>
        </a>
        <a 
          href="#about" 
          className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors duration-300 w-16"
          aria-label="About"
        >
          <Sparkles className="w-6 h-6" />
          <span className="text-[10px] font-heading font-black mt-0.5">About</span>
        </a>
        <a 
          href="https://wa.me/6285899987772" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors duration-300 w-16"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-heading font-black mt-0.5">Chat</span>
        </a>
      </nav>
    </div>
  );
}
