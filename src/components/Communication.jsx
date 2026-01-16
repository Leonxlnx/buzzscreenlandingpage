import { Monitor, MessageCircle, BookOpen, Users } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Communication() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-label, .section-header h2, .section-sub", {
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out"
        })
            .from(".comm-card", {
                y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)"
            }, "-=0.4");

    }, { scope: container });

    const items = [
        { icon: <Monitor size={28} />, title: "Product Demos", desc: "Show how your product works, clearly and quickly." },
        { icon: <MessageCircle size={28} />, title: "Visual Feedback", desc: "Show what you mean instead of explaining it in text." },
        { icon: <BookOpen size={28} />, title: "Tutorials", desc: "Create short, clear tutorials for your team or clients." },
        { icon: <Users size={28} />, title: "Team Updates", desc: "Share progress, updates, or context with a simple link." },
    ];

    return (
        <section className="communication" ref={container}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Use Cases</span>
                    <h2>Built for clear communication</h2>
                    <p className="section-sub">Real use cases for fast, clear screen recordings.</p>
                </div>
                <div className="comm-grid">
                    {items.map((item, index) => (
                        <div className="comm-card soft-card" key={index}>
                            <div className="comm-icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
            .communication { 
                padding: 120px 0; 
                background: transparent; /* Seamless flow */
            }
            
            .communication .section-label {
                display: inline-block;
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--accent-orange);
                margin-bottom: 16px;
            }
            
            .communication .section-header h2 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 16px;
                background: linear-gradient(to right, #fff, #bbb);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .communication .section-sub {
                font-size: 1.25rem;
                color: var(--text-secondary);
                max-width: 500px;
                margin: 0 auto;
            }
            
            .comm-grid { 
                display: grid; 
                grid-template-columns: repeat(4, 1fr); 
                gap: 24px; 
                margin-top: 80px; 
            }
            
            .comm-card { 
                padding: 32px; 
                display: flex; 
                flex-direction: column; 
                align-items: start;
                transition: transform 0.3s ease;
                /* Glass */
                background: rgba(20, 20, 20, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 20px;
            }
            
            .comm-card:hover {
                transform: translateY(-8px);
                background: rgba(25, 25, 25, 0.6);
                border-color: rgba(255, 87, 34, 0.2);
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            }
            
            .comm-icon { 
                width: 64px; 
                height: 64px; 
                border-radius: 16px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                margin-bottom: 24px;
                color: var(--text-primary);
                background: linear-gradient(135deg, rgba(24,24,24,0.9), rgba(16,16,16,0.9));
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }
            
            .comm-card:hover .comm-icon {
                color: var(--accent-orange);
                border-color: var(--accent-orange);
                box-shadow: 0 0 15px rgba(255,87,34,0.3);
                transform: rotate(-5deg) scale(1.1);
            }
            
            .comm-card h3 { 
                font-size: 1.25rem; 
                font-weight: 600;
                margin-bottom: 10px; 
                color: white;
            }
            
            .comm-card p { 
                font-size: 1rem; 
                color: var(--text-secondary); 
                line-height: 1.6;
            }
            
            @media (max-width: 1024px) { 
                .comm-grid { grid-template-columns: repeat(2, 1fr); } 
            }
            
            @media (max-width: 768px) { 
                .comm-grid { grid-template-columns: 1fr; } 
                .communication .section-header h2 { font-size: 2.2rem; }
            }
        `}</style>
        </section>
    );
}
