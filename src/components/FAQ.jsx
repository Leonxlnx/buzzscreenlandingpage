import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".section-header", { y: 20, opacity: 0, duration: 0.6 })
            .from(".faq-item", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                clearProps: "all"
            }, "-=0.2");

    }, { scope: container });

    const faqs = [
        { q: "Do I need to download any software?", a: "No. Everything works from your browser." },
        { q: "Do early users get any benefits?", a: "Yes. Early access users will receive a lifetime discount on buzzscreen plans as a thank-you for helping shape the product." },
        { q: "Can I share videos without downloading anything?", a: "Yes, you get an instant link when you finish recording." },
        { q: "What video quality is supported?", a: "High quality recording, MP4 export." },
        { q: "Can I edit my videos?", a: "Yes, with our web editor: trimming, text, zooms, transitions and more." },
        { q: "Can I continue editing another day?", a: "Yes, projects are saved in the cloud." }
    ];

    return (
        <section className="py-32 relative z-10" ref={container}>
             {/* Local Grid with Radial Mask */}
             <div className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
                }}
            />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="section-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">FAQ</h2>
                    <p className="text-xl text-zinc-400">Frequently Asked Questions</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item group cursor-pointer border rounded-2xl overflow-hidden transition-all duration-300
                            ${openIndex === index 
                                ? 'bg-zinc-900/80 border-brand/50 shadow-[0_0_30px_rgba(249,119,46,0.15)]' 
                                : 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10'
                            }`}
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex justify-between items-center p-6 md:p-8">
                                <span className={`font-semibold text-lg md:text-xl transition-colors ${openIndex === index ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${openIndex === index ? 'bg-brand text-white rotate-180' : 'bg-white/5 text-zinc-400 group-hover:bg-white/10'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </div>
                            
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="px-6 md:px-8 pb-8 text-zinc-400 leading-relaxed text-lg">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
