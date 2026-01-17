import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import { Video, Share2, Sparkles, Check, Copy, MoreHorizontal, Scissors, Type, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const content = [
  {
    title: "1. Capture Context",
    description:
      "Don't just explain it—show it. Click to start recording your screen, window, or specific tab. Add your face for a personal touch with a draggable webcam bubble.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full"></div>

        <div className="relative w-64 p-4 bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-4 animate-pulse-slow">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <div className="flex-1 font-mono text-sm text-zinc-300">00:14:32</div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-500 transition-colors cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
        </div>

        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-brand/50 shadow-2xl overflow-hidden bg-zinc-800 flex items-center justify-center">
             <div className="w-full h-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-end justify-center pb-2">
                 <div className="w-12 h-12 bg-zinc-500 rounded-full opacity-50"></div>
             </div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Share Instantly",
    description:
      "Stop waiting for uploads. Your video is processed in real-time. Get a shareable link instantly that unfurls beautifully in Slack, Linear, and Notion.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[#0E0E0F] relative overflow-hidden">
         <div className="w-72 bg-[#141414] rounded-2xl border border-green-500/20 p-6 shadow-[0_0_40px_rgba(34,197,94,0.1)] flex flex-col gap-4 relative z-10 group transform transition-transform hover:scale-105 duration-500">
             <div className="flex items-center gap-3 text-green-500 mb-2">
                 <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                     <Check size={16} />
                 </div>
                 <span className="font-semibold text-sm">Link Created!</span>
             </div>
             
             <div className="h-10 bg-black/40 rounded-lg border border-white/5 flex items-center px-3 justify-between group-hover:border-white/10 transition-colors">
                 <span className="text-xs text-zinc-500 font-mono truncate max-w-[140px]">buzz.new/v/8f92...</span>
                 <div className="flex gap-2">
                     <div className="p-1.5 hover:bg-white/10 rounded cursor-pointer text-zinc-400 hover:text-white transition-colors">
                         <Copy size={12} />
                     </div>
                 </div>
             </div>

             <div className="flex gap-2 mt-2">
                 <button className="flex-1 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors">Copy Link</button>
                 <button className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                     <MoreHorizontal size={14} className="text-zinc-400" />
                 </button>
             </div>
         </div>

         <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full opacity-20 animate-ping"></div>
             <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-20"></div>
         </div>
      </div>
    ),
  },
  {
    title: "3. Polish & Perfect",
    description:
      "A mistake isn't a retake. Use our non-destructive editor to trim silence, zoom in on details, or add text overlays. It's like Google Docs for video.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Zoom Simulation */}
        <motion.div 
             animate={{ scale: [1, 1.4, 1], x: [0, 60, 0], y: [0, -30, 0] }} 
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
             className="w-[90%] bg-[#1A1A1A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col origin-center"
        >
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
                <Scissors size={14} className="text-zinc-400" />
                <Type size={14} className="text-zinc-400" />
                <MousePointer2 size={14} className="text-zinc-400" />
                <div className="ml-auto w-20 h-1.5 bg-zinc-800 rounded-full">
                    <div className="w-1/2 h-full bg-brand rounded-full"></div>
                </div>
            </div>
            
            <div className="h-32 bg-[#0E0E0F] relative flex items-center justify-center">
                <Sparkles className="text-zinc-700 opacity-20" size={48} />
                <div className="absolute top-1/4 left-1/4 w-16 h-12 border-2 border-brand rounded shadow-[0_0_15px_rgba(249,119,46,0.3)] animate-pulse">
                    <div className="absolute -top-3 -right-3 bg-brand text-[8px] px-1 rounded text-black font-bold">ZOOM</div>
                </div>
            </div>

            <div className="h-12 bg-[#111] border-t border-white/5 relative">
                <div className="absolute top-0 bottom-0 left-10 w-[60%] bg-zinc-800/50 border-x border-white/10">
                    <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:20px_100%]"></div>
                </div>
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500 z-10">
                    <div className="absolute -top-1 -left-1.5 w-3 h-3 bg-red-500 transform rotate-45"></div>
                </div>
            </div>
        </motion.div>
      </div>
    ),
  },
];

export default function Steps() {
  return (
    <div className="py-32 relative z-10 bg-[#0E0E0F]">
        <div className="container mx-auto px-6 max-w-7xl mb-16 text-center">
             <span className="section-label inline-block text-xs font-bold uppercase tracking-widest text-brand mb-4">Workflow</span>
             <h2 className="section-title text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                Fluid from start to finish.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Designed to keep you in the flow. No rendering bars, no heavy software, just speed.
            </p>
        </div>
        <StickyScroll content={content} />
    </div>
  );
}
