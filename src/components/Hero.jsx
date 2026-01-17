import { ArrowRight, Play, Mic, Monitor } from 'lucide-react';
import { Button } from './ui/MovingBorder';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-center overflow-visible z-10 w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
             
            {/* Local Grid with Radial Mask */}
            <div className="absolute inset-0 z-[-1] opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
                }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Badge - Glassmorphism */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default animate-fade-in opacity-0 shadow-lg shadow-black/20" style={{ animationDelay: '0.1s' }}>
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    <span className="text-xs font-medium text-white tracking-wide uppercase">BuzzScreen v1.0</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white animate-fade-in opacity-0 leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
                    Your screen recording, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-[#FF9E66]">simplified.</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in opacity-0 font-light" style={{ animationDelay: '0.3s' }}>
                    Record, edit, and share professional video messages in seconds. 
                    <span className="text-white font-medium"> No clunky software. No rendering times.</span>
                </p>

                {/* CTA Group */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                    {/* Aceternity Moving Border Button */}
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white text-black border-neutral-200 dark:border-slate-800 font-semibold text-lg"
                        borderClassName="bg-[radial-gradient(var(--brand)_40%,transparent_60%)]"
                    >
                        Start for Free
                    </Button>

                    <a href="#features" className="h-14 px-8 rounded-full border border-white/20 bg-transparent text-white font-medium text-lg flex items-center justify-center gap-2 hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                        How it Works
                    </a>
                </div>

                {/* Browser Mockup Container */}
                <div className="relative max-w-5xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
                    
                    {/* Glow Effect behind mockup */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand/30 blur-[100px] -z-10 rounded-full"></div>
                    
                    {/* The Mockup Frame */}
                    <div className="relative rounded-xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 backdrop-blur-xl group">
                        
                        {/* Traffic Lights */}
                        <div className="h-10 bg-[#1A1A1A]/90 backdrop-blur border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-zinc-600 font-medium bg-[#111] px-3 py-1 rounded-md border border-white/5">buzzscreen.com/edit/demo</span>
                            </div>
                        </div>

                        {/* Editor Interface Mockup */}
                        <div className="aspect-[16/9] bg-[#0E0E0F] relative flex overflow-hidden">
                            {/* Left Toolbar */}
                            <div className="w-14 bg-[#121212]/90 backdrop-blur-md border-r border-white/5 flex flex-col items-center py-6 gap-6 z-10">
                                <div className="w-8 h-8 rounded-lg bg-brand/20 text-brand flex items-center justify-center"><Monitor size={18} /></div>
                                <div className="w-8 h-8 rounded-lg text-zinc-600 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"><Mic size={18} /></div>
                            </div>

                            {/* Canvas */}
                            <div className="flex-1 relative flex items-center justify-center bg-[#0E0E0F]">
                                {/* Grid Background inside canvas */}
                                <div className="absolute inset-0 opacity-[0.1]"
                                    style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
                                />
                                
                                {/* Video Content Placeholder */}
                                <div className="relative w-[75%] aspect-video bg-zinc-900 rounded-lg shadow-2xl border border-white/10 overflow-hidden group-hover:scale-[1.01] transition-transform duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand/5 to-transparent mix-blend-overlay"></div>
                                    <img src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=2070&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    
                                    {/* Floating Webcam */}
                                    <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-brand overflow-hidden shadow-lg z-20 bg-zinc-800">
                                         <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                                    </div>
                                    
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                                            <Play fill="white" className="ml-1 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="absolute bottom-0 left-14 right-0 h-16 bg-[#121212]/90 backdrop-blur-md border-t border-white/5 flex flex-col justify-center px-4 z-10">
                                <div className="flex gap-1 h-8 items-center">
                                    <div className="w-32 h-6 bg-brand/20 rounded-md border border-brand/30"></div>
                                    <div className="w-48 h-6 bg-blue-500/20 rounded-md border border-blue-500/30"></div>
                                    <div className="w-24 h-6 bg-zinc-700/50 rounded-md border border-zinc-700"></div>
                                </div>
                                {/* Playhead */}
                                <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-brand z-20 h-full">
                                    <div className="absolute top-0 -left-1.5 w-3 h-3 bg-brand rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
