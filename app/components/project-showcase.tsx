"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, Smartphone, LayoutGrid, Globe, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
        <h2 className="text-xs font-heading font-black text-[#1E192B] uppercase tracking-wider flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9E252]" />
          Our Portfolio
        </h2>
      </div>

      <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/80 border border-white/80 rounded-full h-auto p-1.5 backdrop-blur-md shadow-xs">
          <TabsTrigger value="All" className="rounded-full py-2.5 text-xs font-extrabold text-[#685F7A] data-[state=active]:bg-[#C9E252] data-[state=active]:text-[#1E192B] data-[state=active]:shadow-2xs transition-all">
            <LayoutGrid className="w-3.5 h-3.5 mr-1.5" /> All
          </TabsTrigger>
          <TabsTrigger value="Web" className="rounded-full py-2.5 text-xs font-extrabold text-[#685F7A] data-[state=active]:bg-[#C9E252] data-[state=active]:text-[#1E192B] data-[state=active]:shadow-2xs transition-all">
            <Monitor className="w-3.5 h-3.5 mr-1.5" /> Web
          </TabsTrigger>
          <TabsTrigger value="Mobile" className="rounded-full py-2.5 text-xs font-extrabold text-[#685F7A] data-[state=active]:bg-[#C9E252] data-[state=active]:text-[#1E192B] data-[state=active]:shadow-2xs transition-all">
            <Smartphone className="w-3.5 h-3.5 mr-1.5" /> Mobile
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
                className="group relative flex flex-col border-white/80 rounded-[24px] overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_25px_rgba(110,95,170,0.06)] hover:shadow-[0_12px_32px_rgba(110,95,170,0.12)] hover:cursor-pointer bg-white h-full"
              >
                <div className="w-full aspect-square relative overflow-hidden bg-[#F2EDFF]">
                  <Image
                    src={project.image.startsWith('http') ? project.image : `/${project.image}`}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E192B]/90 via-[#1E192B]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Caption Area */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end gap-1.5">
                    <h3 className="text-base font-heading font-black text-white leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[11px] bg-[#C9E252] text-[#1E192B] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs group-hover:bg-white transition-colors">
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
          <CarouselPrevious className="static shrink-0 translate-y-0 translate-x-0 w-9 h-9 rounded-full bg-white border border-white text-[#7452E8] hover:bg-[#C9E252] hover:text-[#1E192B] transition-all shadow-xs" />
          <CarouselDots className="gap-2" />
          <CarouselNext className="static shrink-0 translate-y-0 translate-x-0 w-9 h-9 rounded-full bg-white border border-white text-[#7452E8] hover:bg-[#C9E252] hover:text-[#1E192B] transition-all shadow-xs" />
        </div>
      </Carousel>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-white border-white text-[#1E192B] rounded-[28px] max-w-md p-0 overflow-hidden flex flex-col max-h-[90vh] shadow-2xl">
          {selectedProject && (
            <>
              <div className="flex-grow overflow-y-auto scrollbar-none p-6 pt-8 flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-20 h-20 shrink-0 bg-[#F2EDFF] border border-[#E4DCFC] rounded-2xl relative overflow-hidden shadow-xs">
                    {selectedProject.image.includes('placehold.co') ? (
                      <div className="w-full h-full bg-[#F2EDFF] flex items-center justify-center">
                        <span className="text-3xl font-heading font-black text-[#7452E8]">
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
                    <DialogTitle className="text-lg font-heading font-black text-[#1E192B] leading-tight mb-1">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="text-[#685F7A] text-xs font-extrabold mb-2.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9E252]"></span>
                      {selectedProject.type} Application
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tech, j) => (
                        <Badge key={j} variant="outline" className="border-[#E4DCFC] text-[#7452E8] bg-[#F2EDFF] text-[10px] font-extrabold rounded-lg px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <DialogDescription className="bg-[#F8F6FF] border border-[#E4DCFC] rounded-2xl p-5 text-[#685F7A] text-xs leading-relaxed whitespace-pre-wrap font-semibold">
                  {selectedProject.desc}
                </DialogDescription>
              </div>

              <div className="p-5 bg-white border-t border-[#E4DCFC] flex gap-3">
                <Button onClick={() => setSelectedProject(null)} variant="outline" className="flex-1 rounded-full border-[#E4DCFC] text-[#685F7A] hover:bg-[#F2EDFF] hover:text-[#1E192B] font-extrabold h-11 transition-all">
                  Close View
                </Button>
                
                {selectedProject.type === 'Web' && selectedProject.desc.match(/https?:\/\/[^\s)]+/) ? (
                  <Button onClick={() => window.open(selectedProject.desc.match(/https?:\/\/[^\s)]+/)?.[0], "_blank", "noopener,noreferrer")} className="flex-[1.5] rounded-full bg-[#C9E252] hover:bg-[#bada3d] text-[#1E192B] font-black shadow-xs h-11">
                    <Globe className="w-4 h-4 mr-2" />
                    VISIT WEBSITE
                  </Button>
                ) : selectedProject.type !== 'Web' && (
                  <Button onClick={() => window.open("https://wa.me/6285899987772", "_blank", "noopener,noreferrer")} className="flex-[1.5] rounded-full bg-[#7452E8] hover:bg-[#6442d6] text-white font-black shadow-xs h-11">
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
