import { Video, Zap, Share2, MousePointer2, Layers, Download } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".section-label, .section-title, .section-sub", {
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
            clearProps: "all"
        })
        .from(".bento-item", {
            y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
            clearProps: "all"
        }, "-=0.4");

    }, { scope: container });

    return (
        <section className="py-32 relative z-10 bg-[#0E0E0F]" id="features" ref={container}>
             {/* Local Grid with Radial Mask */}
             <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
                }}
            />
            
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Section Header */}
                <div className="mb-24 text-center">
                    <span className="section-label inline-block text-xs font-bold uppercase tracking-widest text-brand mb-4">Features</span>
                    <h2 className="section-title text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        More than just recording.
                    </h2>
                    <p className="section-sub text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        A complete suite of tools designed for clarity. Record, refine, and share without leaving your browser.
                    </p>
                </div>

                {/* Bento Grid Redesigned */}
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 auto-rows-[minmax(180px,auto)]">
                    
                    {/* Card 1: Record (Large - 4 cols) */}
                    <div className="bento-item md:col-span-4 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/50">
                        <div className="relative z-10 max-w-md">
                            <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4 border border-brand/20">
                                <Video size={20} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">Flexible Recording</h3>
                            <p className="text-zinc-400">Capture your entire screen, a specific window, or just a browser tab. Include your webcam with a single click.</p>
                        </div>
                        
                        {/* Interactive Visual */}
                        <div className="absolute top-8 right-[-40px] md:right-[-20px] w-[320px] h-[220px] rounded-xl bg-[#1A1A1A] border border-white/10 shadow-2xl rotate-[-6deg] group-hover:rotate-[-3deg] group-hover:translate-x-[-10px] transition-all duration-500 ease-out overflow-hidden">
                             {/* Fake UI */}
                             <div className="h-8 bg-zinc-800 border-b border-white/5 flex items-center px-3 gap-2">
                                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                 <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                             </div>
                             <div className="p-4 grid grid-cols-2 gap-2">
                                 <div className="h-24 rounded bg-zinc-800/50 animate-pulse"></div>
                                 <div className="h-24 rounded bg-zinc-800/50"></div>
                             </div>
                        </div>
                    </div>

                    {/* Card 2: Instant Share (Small - 2 cols) */}
                    <div className="bento-item md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col transition-all duration-500 hover:border-blue-500/30 hover:bg-blue-900/10">
                         <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 border border-blue-500/20">
                            <Share2 size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Instant Sharing</h3>
                        <p className="text-zinc-400 text-sm mb-6">Get a shareable link the moment you stop recording.</p>
                        
                        {/* Link Visual */}
                        <div className="mt-auto bg-black/40 rounded-lg border border-white/10 p-3 flex items-center gap-3 backdrop-blur-sm group-hover:border-blue-500/30 transition-colors">
                             <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                                 <Share2 size={14} />
                             </div>
                             <div className="flex-1 h-2 bg-zinc-700 rounded w-1/2"></div>
                        </div>
                    </div>

                    {/* Card 3: Editing (Tall - 2 cols) */}
                    <div className="bento-item md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col transition-all duration-500 hover:border-purple-500/30 hover:bg-purple-900/10">
                         <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 border border-purple-500/20">
                            <MousePointer2 size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Point & Click Zoom</h3>
                        <p className="text-zinc-400 text-sm mb-8">Zoom in on key details without complex keyframes.</p>
                        
                        {/* Zoom Visual */}
                        <div className="flex-1 relative rounded-xl border border-white/10 overflow-hidden bg-black/20 group-hover:border-purple-500/30 transition-colors">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Cursor */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                                <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Web Editor (Medium - 4 cols) */}
                    <div className="bento-item md:col-span-4 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 hover:border-brand/20 hover:bg-brand/5">
                        <div className="flex-1">
                             <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4 border border-brand/20">
                                <Layers size={20} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-2">Powerful Web Editor</h3>
                            <p className="text-zinc-400">Trim dead air, add text overlays, and stitch clips together. A full-featured editor right in your browser.</p>
                        </div>
                        <div className="flex-1 w-full h-[160px] bg-[#0E0E0F] rounded-xl border border-white/10 relative overflow-hidden flex flex-col shadow-2xl group-hover:translate-y-[-5px] transition-transform duration-500">
                             {/* Timeline UI */}
                             <div className="flex-1 flex gap-1 p-2 items-end">
                                 <div className="w-1/3 h-12 bg-zinc-800 rounded-md"></div>
                                 <div className="w-1/4 h-12 bg-brand/20 rounded-md border border-brand/30"></div>
                                 <div className="w-1/3 h-12 bg-zinc-800 rounded-md"></div>
                             </div>
                             <div className="h-8 bg-[#1A1A1A] border-t border-white/5 flex items-center px-3 gap-2">
                                 <div className="w-4 h-4 bg-zinc-700 rounded"></div>
                                 <div className="w-full h-1 bg-zinc-800 rounded-full relative">
                                     <div className="absolute left-1/3 w-3 h-3 -top-1 bg-white rounded-full shadow"></div>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Card 5: Exports (Small - 2 cols) */}
                    <div className="bento-item md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col transition-all duration-500 hover:border-green-500/30 hover:bg-green-900/10">
                         <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 mb-4 border border-green-500/20">
                            <Download size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">MP4 Export</h3>
                        <p className="text-zinc-400 text-sm">Download in 1080p instantly.</p>
                    </div>

                     {/* Card 6: Performance (Small - 2 cols) */}
                    <div className="bento-item md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/10 p-8 flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-zinc-800/50">
                         <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4 border border-yellow-500/20">
                            <Zap size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                        <p className="text-zinc-400 text-sm">No rendering times. Just share.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
