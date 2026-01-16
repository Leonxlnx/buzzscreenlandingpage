import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

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
        <section className="cta-bottom" ref={container}>
            <div className="container">
                <div className="cta-content soft-card">
                    <h2>Ready to create better videos?</h2>
                    <p className="cta-desc">Join creators using BuzzCreen to make clear, professional screen recordings in seconds.</p>
                    <div className="cta-buttons">
                        <a href="#" className="btn btn-cta">
                            Get Started Free
                            <ArrowRight size={20} style={{ marginLeft: 10 }} />
                        </a>
                    </div>
                    <p className="sub-cta">Start for free · No credit card required</p>
                </div>
            </div>
            <style>{`
            .cta-bottom { 
                padding: 120px 0; 
                text-align: center;
                background: transparent; /* Seamless */
            }
            
            .cta-content { 
                max-width: 800px;
                margin: 0 auto;
                padding: 80px 40px; 
                /* Glass */
                background: linear-gradient(135deg, rgba(22,22,22,0.8) 0%, rgba(15,15,15,0.8) 100%);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 30px;
                box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            }
            
            .cta-content h2 { 
                font-size: 3rem; 
                font-weight: 700;
                margin-bottom: 20px;
                line-height: 1.2;
                background: linear-gradient(to right, #fff, #ddd);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .cta-desc { 
                color: var(--text-secondary); 
                margin-bottom: 40px; 
                font-size: 1.25rem;
                line-height: 1.6;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .cta-buttons {
                margin-bottom: 20px;
            }
            
            .btn-cta {
                display: inline-flex;
                align-items: center;
                padding: 18px 36px;
                font-size: 1.1rem;
                font-weight: 600;
                background: var(--gradient-orange);
                color: white;
                border-radius: 12px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(255,87,34,0.3);
                position: relative;
                overflow: hidden;
            }
            
            .btn-cta::after {
                content: '';
                position: absolute;
                top: 0; left: -100%;
                width: 100%; height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: 0.5s;
            }
            
            .btn-cta:hover::after {
                left: 100%;
            }
            
            .btn-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 30px rgba(255,87,34,0.4);
            }
            
            .sub-cta { 
                font-size: 0.95rem; 
                color: var(--text-secondary); 
                opacity: 0.7; 
            }
            
            @media (max-width: 768px) { 
                .cta-content { padding: 50px 20px; }
                .cta-content h2 { font-size: 2rem; }
            }
        `}</style>
        </section>
    );
}
