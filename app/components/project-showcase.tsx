"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Smartphone, LayoutGrid, Globe, MessageCircle, Sparkles, ArrowRight, ExternalLink, ShieldAlert } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import projectsData from "../../data/projects.json";

export function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = projectsData.filter(project => {
    if (activeTab === "All") return true;
    return project.type === activeTab;
  });

  return (
    <motion.section 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="projects" 
      className="flex flex-col gap-4 scroll-mt-24 w-full"
    >
      <div className="flex justify-between items-center px-1">
        <h2 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider flex items-center gap-2 text-glow-cyan">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
          OUR PORTFOLIO & PROJECTS
        </h2>
      </div>

      <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-[#0B1021]/80 border border-[#00F0FF]/30 rounded-full h-auto p-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]">
          <TabsTrigger 
            value="All" 
            className="rounded-full py-2.5 text-xs font-mono font-bold text-slate-400 data-[state=active]:bg-[#00F0FF] data-[state=active]:text-[#070A14] data-[state=active]:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
          >
            <LayoutGrid className="w-3.5 h-3.5 mr-1.5" /> ALL
          </TabsTrigger>
          <TabsTrigger 
            value="Web" 
            className="rounded-full py-2.5 text-xs font-mono font-bold text-slate-400 data-[state=active]:bg-[#00F0FF] data-[state=active]:text-[#070A14] data-[state=active]:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
          >
            <Monitor className="w-3.5 h-3.5 mr-1.5" /> WEB
          </TabsTrigger>
          <TabsTrigger 
            value="Mobile" 
            className="rounded-full py-2.5 text-xs font-mono font-bold text-slate-400 data-[state=active]:bg-[#00F0FF] data-[state=active]:text-[#070A14] data-[state=active]:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all"
          >
            <Smartphone className="w-3.5 h-3.5 mr-1.5" /> MOBILE
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-3 py-2">
          {filteredProjects.map((project, i) => (
            <CarouselItem key={i} className="pl-3 basis-[85%] sm:basis-[320px]">
              <Card
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col border-[#00F0FF]/30 rounded-[24px] overflow-hidden hover:border-[#00F0FF] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:cursor-pointer bg-[#0B1021] h-full"
              >
                <div className="w-full aspect-square relative overflow-hidden bg-[#070A14]">
                  <Image
                    src={project.image.startsWith('http') ? project.image : `/${project.image}`}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Cyber Grid & Glowing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A14] via-[#070A14]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Caption Area */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end gap-2">
                    <h3 className="text-base font-heading font-black text-white leading-tight group-hover:text-[#00F0FF] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[11px] bg-[#00F0FF]/15 border border-[#00F0FF]/50 text-[#00F0FF] font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,240,255,0.2)] group-hover:bg-[#00F0FF] group-hover:text-[#070A14] transition-all">
                        View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-4 mb-1">
          <CarouselPrevious className="static shrink-0 translate-y-0 translate-x-0 w-9 h-9 rounded-full bg-[#0B1021] border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#070A14] transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]" />
          <CarouselDots className="gap-2" />
          <CarouselNext className="static shrink-0 translate-y-0 translate-x-0 w-9 h-9 rounded-full bg-[#0B1021] border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#070A14] transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]" />
        </div>
      </Carousel>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-[#0B1021] border border-[#00F0FF]/50 text-slate-100 rounded-[28px] max-w-md p-0 overflow-hidden flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(0,240,255,0.25)]">
          {selectedProject && (
            <>
              <div className="flex-grow overflow-y-auto scrollbar-none p-6 pt-8 flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 shrink-0 bg-[#070A14] border border-[#00F0FF]/40 rounded-2xl relative overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                    {selectedProject.image.includes('placehold.co') ? (
                      <div className="w-full h-full bg-[#070A14] flex items-center justify-center">
                        <span className="text-3xl font-heading font-black text-[#00F0FF]">
                          {selectedProject.title.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={selectedProject.image.startsWith('http') ? selectedProject.image : `/${selectedProject.image}`}
                        alt={selectedProject.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col pt-0.5">
                    <DialogTitle className="text-lg font-heading font-black text-white leading-tight mb-1">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="text-[#00F0FF] text-xs font-mono font-bold mb-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
                      {selectedProject.type} Application
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tech, j) => (
                        <Badge key={j} variant="outline" className="border-[#00F0FF]/30 text-[#00F0FF] bg-[#00F0FF]/10 text-[10px] font-mono font-bold rounded-lg px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <DialogDescription className="bg-[#070A14]/90 border border-[#00F0FF]/25 rounded-2xl p-5 text-slate-300 text-xs leading-relaxed whitespace-pre-wrap font-medium">
                  {selectedProject.desc}
                </DialogDescription>
              </div>

              <div className="p-5 bg-[#070A14] border-t border-[#00F0FF]/25 flex gap-3">
                <Button onClick={() => setSelectedProject(null)} variant="outline" className="flex-1 rounded-full border-[#00F0FF]/30 text-slate-300 hover:bg-[#00F0FF]/15 hover:text-[#00F0FF] font-mono font-bold h-11 transition-all">
                  CLOSE SPEC
                </Button>
                
                {selectedProject.type === 'Web' && selectedProject.desc.match(/https?:\/\/[^\s)]+/) ? (
                  <Button onClick={() => window.open(selectedProject.desc.match(/https?:\/\/[^\s)]+/)?.[0], "_blank", "noopener,noreferrer")} className="flex-[1.5] rounded-full bg-[#00F0FF] hover:bg-[#00d2ff] text-[#070A14] font-mono font-black shadow-[0_0_20px_rgba(0,240,255,0.4)] h-11">
                    <Globe className="w-4 h-4 mr-2" />
                    LAUNCH SITE
                  </Button>
                ) : selectedProject.type !== 'Web' && (
                  <Button onClick={() => window.open("https://wa.me/6285899987772", "_blank", "noopener,noreferrer")} className="flex-[1.5] rounded-full bg-gradient-to-r from-[#FF007F] to-[#9D4EDD] hover:opacity-90 text-white font-mono font-black shadow-[0_0_20px_rgba(255,0,127,0.4)] h-11">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    GET LICENSE
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
}
