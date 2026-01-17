import { Play, Globe, Shield, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from("footer", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="relative z-50">
            <footer className="pt-20 pb-10 bg-[#050505] border-t border-white/5 relative overflow-hidden">
                
                {/* Subtle Horizon Glow - Replaces Grid */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        
                        {/* Brand Column */}
                        <div className="md:col-span-5 flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-6 text-xl font-bold text-white tracking-tight">
                                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/10 shadow-inner">
                                    <Play size={14} fill="white" stroke="none" className="ml-0.5" />
                                </div>
                                BuzzScreen
                            </div>
                            <p className="text-zinc-500 leading-relaxed text-sm max-w-md mb-8 font-medium">
                                The fastest way to record and share video messages. 
                                <br />Built for modern teams who value clarity over meetings.
                            </p>
                            
                            {/* Newsletter Input - Cleaned up */}
                            <div className="flex w-full max-w-sm gap-2">
                                <input 
                                    type="email" 
                                    placeholder="email@example.com" 
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand/30 focus:bg-white/10 transition-all flex-1"
                                />
                                <button className="bg-white text-black px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Spacer */}
                        <div className="md:col-span-1"></div>

                        {/* Links Column */}
                        <div className="md:col-span-2">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Product</h4>
                            <ul className="space-y-3">
                                {['Features', 'Workflow', 'Use Cases', 'Extension', 'Changelog'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links Column */}
                        <div className="md:col-span-2">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Company</h4>
                            <ul className="space-y-3">
                                {['About', 'Careers', 'Blog', 'Brand', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links Column */}
                        <div className="md:col-span-2">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">Legal</h4>
                            <ul className="space-y-3">
                                {['Privacy', 'Terms', 'Cookies', 'Security'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar - Minimalist */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                        <div className="flex items-center gap-1">
                            &copy; 2026 BuzzScreen Inc.
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-zinc-400 transition-colors flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                Systems Operational
                            </a>
                            <div className="w-px h-3 bg-white/10"></div>
                            <div className="flex items-center gap-1.5 cursor-pointer hover:text-zinc-400 transition-colors">
                                <Globe size={12} />
                                <span>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
