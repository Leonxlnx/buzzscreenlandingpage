import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Button } from './ui/MovingBorder';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".cta-content", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section className="py-20 md:py-32 relative" ref={container}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="cta-content relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#0A0A0A] p-12 md:p-24 text-center">
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-[#0A0A0A] to-[#0A0A0A]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-brand/10 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 z-0 opacity-[0.1]"
                        style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand mb-8 animate-pulse">
                            Get started today
                        </span>
                        
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white max-w-4xl mx-auto leading-[1.1]">
                            Ready to create <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">better videos?</span>
                        </h2>
                        
                        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Join thousands of creators using BuzzScreen to communicate with clarity and speed.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white text-black border-neutral-200 dark:border-slate-800 font-bold text-lg h-14"
                                borderClassName="bg-[radial-gradient(var(--brand)_40%,transparent_60%)]"
                            >
                                Start for Free
                            </Button>
                            
                            <a href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                Contact Sales <ArrowRight size={16} />
                            </a>
                        </div>
                        
                        <p className="text-sm text-zinc-600 mt-12">
                            No credit card required · 14-day free trial · Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
