import { Video, Share2, BarChart2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Steps() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-label", { y: 20, opacity: 0, duration: 0.6 })
            .from(".section-header h2", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
            .from(".section-sub", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
            .from(".step-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.2");

    }, { scope: container });

    return (
        <section className="steps" ref={container}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">How it works</span>
                    <h2>Three simple steps</h2>
                    <p className="section-sub">Start recording in seconds, edit with powerful tools, and share instantly.</p>
                </div>
                <div className="steps-grid">
                    <div className="step-card soft-card">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <Video size={28} color="white" />
                        </div>
                        <h3>Record</h3>
                        <p>Click the extension and start recording your screen, tab, or window. Optional webcam overlay and separate webcam track available.</p>
                    </div>
                    <div className="step-card soft-card">
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <Share2 size={28} color="white" />
                        </div>
                        <h3>Share</h3>
                        <p>Get an instant shareable link when you finish. Share without downloading or exporting anything.</p>
                    </div>
                    <div className="step-card soft-card">
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <BarChart2 size={28} color="white" />
                        </div>
                        <h3>Improve</h3>
                        <p>Open your video in the web editor to trim, add manual zooms, transitions, and text. Export or share when ready.</p>
                    </div>
                </div>
            </div>
            <style>{`
            .steps { 
                padding: 120px 0 120px; 
                margin-top: -80px; /* Slight overlap with masked hero */
                position: relative;
                z-index: 10;
                background: transparent;
                pointer-events: none;
            }
            .steps .container { pointer-events: auto; }
            
            .steps .section-label {
                display: inline-block;
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--accent-orange);
                margin-bottom: 16px;
            }
            
            .steps .section-header h2 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 16px;
                background: linear-gradient(to right, #fff, #aaa);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .steps .section-sub {
                font-size: 1.25rem;
                color: var(--text-secondary);
                max-width: 600px;
                margin: 0 auto;
            }
            
            .steps-grid { 
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                gap: 32px;
                margin-top: 80px;
            }
            
            .step-card { 
                padding: 48px 36px; 
                position: relative; 
                overflow: hidden; 
                display: flex; 
                flex-direction: column; 
                align-items: flex-start;
                transition: transform 0.3s ease;
                /* Glass Effect */
                background: rgba(20, 20, 20, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .step-card:hover {
                transform: translateY(-4px);
                background: rgba(25, 25, 25, 0.5);
                border-color: rgba(255, 87, 34, 0.2);
            }
            
            .step-number { 
                position: absolute; 
                top: 24px; 
                right: 32px; 
                font-size: 7rem; 
                font-weight: 800; 
                color: rgba(255,255,255,0.02); 
                line-height: 1; 
                pointer-events: none; 
            }
            
            .step-icon { 
                width: 72px; 
                height: 72px; 
                border-radius: 20px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                margin-bottom: 28px;
                background: linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(15,15,15,0.8) 100%);
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }
            
            .step-card:hover .step-icon {
                border-color: var(--accent-orange);
                box-shadow: 0 0 25px rgba(255,87,34,0.3);
                transform: scale(1.05);
            }
            
            .step-card h3 { 
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 16px; 
                color: white;
            }
            
            .step-card p { 
                color: var(--text-secondary); 
                font-size: 1.05rem; 
                line-height: 1.7; 
            }
            
            @media (max-width: 1024px) {
                .steps-grid { grid-template-columns: 1fr; max-width: 500px; margin: 80px auto 0; }
            }
            
            @media (max-width: 768px) { 
                .steps .section-header h2 { font-size: 2.2rem; }
            }
        `}</style>
        </section>
    );
}
