"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  
  const playheadTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Border Beam Mask - Moves down with scroll
  const beamMask = useTransform(scrollYProgress, (val) => {
    return `linear-gradient(to bottom, transparent ${val * 100 - 20}%, black ${val * 100}%, transparent ${val * 100 + 20}%)`;
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * cardLength), cardLength - 1);
    setActiveCard(index);
  });

  return (
    <motion.div
      className="relative rounded-[2.5rem] max-w-6xl mx-auto group"
      ref={ref}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 overflow-hidden z-0"
           style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 80px -20px rgba(0,0,0,0.5)" }}>
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]) }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/20 blur-[150px] rounded-full pointer-events-none"
          />
          
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-black/20 border-r border-white/5 hidden md:block" />

          {/* Editor Playhead - Maps to container progress */}
          <motion.div 
              style={{ top: playheadTop }} 
              className="absolute left-0 right-0 h-[1px] z-20 pointer-events-none hidden md:flex items-center"
          >
              <div className="absolute left-0 w-32 h-[1px] bg-brand shadow-[0_0_15px_var(--brand)]"></div>
              <div className="absolute left-32 -ml-3 w-5 h-5 bg-[#0E0E0F] border-2 border-brand rotate-45 shadow-lg flex items-center justify-center z-30">
                  <div className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_5px_var(--brand)]"></div>
              </div>
              <div className="absolute left-40 -top-4 bg-zinc-900/90 border border-brand/30 text-brand text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md shadow-lg shadow-brand/10">
                  <motion.span>
                      {useTransform(scrollYProgress, (v) => `00:${Math.floor(v * 59).toString().padStart(2, '0')}:${Math.floor((v * 100) % 30).toString().padStart(2, '0')}`)}
                  </motion.span>
              </div>
          </motion.div>
      </div>

      {/* Scroll Border Beam - Dynamic Highlight */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] border-2 border-brand/50 z-10 pointer-events-none"
        style={{
            maskImage: beamMask,
            WebkitMaskImage: beamMask
        }}
      />

      <div className="relative z-10 flex justify-start p-10">
          
          {/* Timeline Ruler */}
          <div className="hidden md:flex flex-col border-r border-transparent z-10 w-24 flex-shrink-0 relative">
              <div className="sticky top-20 h-[calc(100vh-10rem)] flex flex-col justify-between items-end pr-6 py-4 opacity-60">
                  <div className="text-[10px] font-mono text-zinc-500 tracking-widest">00:00</div>
                  <div className="flex-1 flex flex-col justify-between items-end py-8 w-full">
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={cn(
                                "h-[1px] bg-white/20 rounded-l-full transition-all duration-300",
                                i % 5 === 0 ? "w-6 bg-white/40" : "w-2"
                            )} 
                        />
                    ))}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 tracking-widest">END</div>
              </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-start justify-between relative pl-10">
              
              {/* Text Content */}
              <div className="w-full md:w-1/2 py-10 relative z-20">
                {content.map((item, index) => (
                    <div key={item.title + index} className="my-40 first:mt-0 last:mb-0 min-h-[80vh] flex flex-col justify-center relative group">
                    
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                            opacity: activeCard === index ? 1 : 0.3,
                            x: activeCard === index ? 0 : -20,
                            textShadow: activeCard === index ? "0 0 30px rgba(255,255,255,0.1)" : "none"
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-white mb-6 tracking-tight relative flex items-center gap-4"
                    >
                        {activeCard === index && (
                            <motion.div 
                                layoutId="activeLine"
                                className="absolute -left-6 w-1 h-8 bg-gradient-to-b from-brand to-transparent rounded-full"
                            />
                        )}
                        {item.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                        className="text-xl text-zinc-400 max-w-xl leading-relaxed"
                    >
                        {item.description}
                    </motion.p>
                    
                    <div className="block lg:hidden mt-10">
                        <div className={cn("h-64 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-md", contentClassName)}>
                            {item.content}
                        </div>
                    </div>
                    </div>
                ))}
              </div>

              {/* Sticky Visual Container */}
              <div
                className={cn(
                "hidden lg:block h-96 w-[500px] rounded-[20px] sticky top-[calc(50vh-12rem)] border border-white/10 shadow-2xl z-10 overflow-hidden",
                contentClassName
                )}
                style={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)"
                }}
              >
                <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl z-0"></div>
                
                <div className="relative w-full h-full z-10">
                    <motion.div
                        key={activeCard}
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} 
                        className="w-full h-full"
                    >
                        {content[activeCard].content ?? null}
                    </motion.div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20"></div>
              </div>
          </div>
      </div>
    </motion.div>
  );
};
