import { Video, Zap, Share2, CheckCircle2 } from 'lucide-react';
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
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".section-label, .section-header h2, .section-sub", {
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
            clearProps: "all"
        })
            .from(".feature-group-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                clearProps: "all"
            }, "-=0.2");

    }, { scope: container });

    const featureGroups = [
        {
            icon: <Video size={28} />,
            title: "Record",
            items: [
                "Capture full screen, a tab, or a window",
                "Record your camera with a simple overlay",
                "Separate webcam track when you need flexibility",
                "Capture system audio and microphone"
            ]
        },
        {
            icon: <Zap size={28} />,
            title: "Make it clear",
            items: [
                "Quick trims to remove dead time",
                "Smooth manual zooms to guide attention",
                "Simple transitions between screen changes",
                "Add text and annotations for context",
                "Save your editing progress in the cloud"
            ]
        },
        {
            icon: <Share2 size={28} />,
            title: "Share & reuse",
            items: [
                "Get a shareable link in seconds",
                "Embed videos where you need them",
                "Download in HD when required",
                "Export MP4 for landing pages or socials"
            ]
        }
    ];

    return (
        <section className="features" id="features" ref={container}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Features</span>
                    <h2>Everything that matters, nothing that slows you down</h2>
                    <p className="section-sub">Tools designed to help you explain things clearly, without unnecessary complexity.</p>
                </div>
                <div className="features-grid-3">
                    {featureGroups.map((group, index) => (
                        <div className="feature-group-card soft-card" key={index}>
                            <div className="feature-group-header">
                                <div className="feature-icon-wrap">
                                    {group.icon}
                                </div>
                                <h3>{group.title}</h3>
                            </div>
                            <ul className="feature-list">
                                {group.items.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={18} className="check-icon" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
            .features { 
                padding: 120px 0; 
                background: transparent; /* Removed solid black */
            }
            
            .section-label {
                display: inline-block;
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--accent-orange);
                margin-bottom: 16px;
            }
            
            .features .section-header h2 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 16px;
                line-height: 1.2;
                background: linear-gradient(to right, #fff, #bbb);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .features .section-sub {
                font-size: 1.25rem;
                color: var(--text-secondary);
                max-width: 600px;
                margin: 0 auto;
            }
            
            .features-grid-3 { 
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                gap: 32px; 
                margin-top: 80px; 
            }
            
            .feature-group-card { 
                padding: 40px; 
                display: flex; 
                flex-direction: column; 
                align-items: start;
                /* Specific transitions, NO ALL */
                transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
                height: 100%;
                /* Glass Effect */
                background: rgba(20, 20, 20, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 24px;
            }
            
            .feature-group-card:hover {
                transform: translateY(-4px);
                background: rgba(25, 25, 25, 0.5);
                border-color: rgba(255, 87, 34, 0.2);
            }
            
            .feature-group-header {
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 30px;
            }
            
            .feature-icon-wrap {
                width: 56px; 
                height: 56px;
                border-radius: 14px;
                background: linear-gradient(135deg, rgba(26,26,26,0.8), rgba(15,15,15,0.8));
                display: flex; 
                align-items: center; 
                justify-content: center;
                color: var(--accent-orange);
                box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                border: 1px solid rgba(255,255,255,0.05);
            }
            
            .feature-group-card h3 { 
                font-size: 1.5rem; 
                font-weight: 600;
                color: white;
            }
            
            .feature-list {
                list-style: none;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            
            .feature-list li {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                font-size: 1rem;
                color: var(--text-secondary);
                line-height: 1.5;
            }
            
            .check-icon {
                color: var(--accent-orange);
                min-width: 18px;
                margin-top: 3px;
            }
            
            @media (max-width: 1024px) { 
                .features-grid-3 { grid-template-columns: 1fr; max-width: 600px; margin: 80px auto 0; } 
            }
            
            @media (max-width: 768px) { 
                .features .section-header h2 { font-size: 2.2rem; }
            }
         `}</style>
        </section>
    );
}
