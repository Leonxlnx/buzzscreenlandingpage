import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EditSection() {
    const [activeTab, setActiveTab] = useState(0);
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none none" // Play once to fix visibility
            }
        });

        tl.from(".section-label, .section-header h2, .section-sub", {
            y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
            clearProps: "all"
        })
            .from(".edit-feat-item", {
                x: -30, opacity: 0, duration: 0.6, stagger: 0.1,
                clearProps: "all"
            }, "-=0.4")
            .from(".edit-visual", {
                x: 30, opacity: 0, duration: 0.8, ease: "back.out(1.2)",
                clearProps: "all"
            }, "-=0.6");

    }, { scope: container });

    const tabs = [
        {
            id: 0,
            title: "Smooth zooms",
            shortDesc: "Zoom exactly where it matters",
            longDesc: "Zoom exactly where it matters, without keyframes or complex controls. Just click where you want to focus, and let BuzzCreen handle the smooth camera movement."
        },
        {
            id: 1,
            title: "Text & layouts",
            shortDesc: "Add context without over-editing",
            longDesc: "Add context without over-editing. Choose from professional layouts and add text overlays to guide your viewers through your content."
        },
        {
            id: 2,
            title: "Smooth transitions",
            shortDesc: "Make screen changes easier to follow",
            longDesc: "Make screen changes easier to follow. Automatic smooth transitions between scenes help your viewers stay focused on what matters."
        },
        {
            id: 3,
            title: "Save & resume",
            shortDesc: "Pick it up later, from anywhere",
            longDesc: "Pick it up later, from anywhere. Your projects are automatically saved and synced, so you can continue editing from any device."
        },
    ];

    return (
        <section className="edit-section" ref={container}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Editing Suite</span>
                    <h2>Edit only what matters</h2>
                    <p className="section-sub">Make your recordings clearer with simple, intentional edits.</p>
                </div>
                <div className="edit-mockup-wrapper">
                    <div className="edit-features">
                        {tabs.map((tab, index) => (
                            <div
                                key={index}
                                className={`edit-feat-item ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className="num">{index + 1}</span>
                                <div>
                                    <h4>{tab.title}</h4>
                                    <p>{tab.shortDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="edit-visual soft-card">
                        <div className="visual-content">
                            {/* Simple abstract UI representation */}
                            <div className="visual-timeline-track">
                                <div className="visual-playhead" style={{ left: `${(activeTab + 1) * 20}%` }}></div>
                            </div>
                            <div className="visual-ui-overlay">
                                {activeTab === 0 && <span className="ui-badge">Smooth Zoom</span>}
                                {activeTab === 1 && <span className="ui-badge">Text Overlay</span>}
                                {activeTab === 2 && <span className="ui-badge">Transition</span>}
                                {activeTab === 3 && <span className="ui-badge">Auto Save</span>}
                            </div>
                        </div>
                        <div className="caption">
                            <h4>{tabs[activeTab].title}</h4>
                            <p>{tabs[activeTab].longDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            .edit-section { 
                padding: 120px 0; 
                background: transparent; /* Seamless */
            }
            
            .edit-section .section-label {
                display: inline-block;
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--accent-orange);
                margin-bottom: 16px;
            }
            
            .edit-section .section-header h2 {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 16px;
                /* Explicit white color for visibility */
                color: white;
                background: linear-gradient(to right, #fff, #bbb);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .edit-section .section-sub {
                font-size: 1.25rem;
                color: var(--text-secondary);
                max-width: 500px;
                margin: 0 auto;
            }
            
            .edit-mockup-wrapper { 
                display: grid; 
                grid-template-columns: 350px 1fr; 
                gap: 80px; 
                margin-top: 80px; 
                align-items: center; 
            }
            
            .edit-feat-item { 
                display: flex; gap: 20px; padding: 24px; 
                border-radius: 16px;
                /* Removed transition: all */
                transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; 
                cursor: pointer;
                border: 1px solid transparent;
                margin-bottom: 4px;
                background: rgba(255, 255, 255, 0.02);
            }
            .edit-feat-item:hover { background: rgba(255,255,255,0.05); }
            
            .edit-feat-item.active { 
                background: rgba(255, 87, 34, 0.08);
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                border-color: rgba(255,87,34,0.2);
            }
            
            .edit-feat-item .num { 
                width: 32px; height: 32px; 
                min-width: 32px;
                border-radius: 10px; 
                background: rgba(0,0,0,0.4);
                box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5);
                display: flex; align-items: center; justify-content: center; 
                font-size: 0.9rem; font-weight: 700; color: #555;
                transition: all 0.3s ease;
            }
            .edit-feat-item.active .num { 
                background: var(--gradient-orange); 
                color: white; 
                box-shadow: 0 4px 10px rgba(255,87,34,0.3);
            }
            
            .edit-feat-item h4 { margin-bottom: 6px; font-size: 1.1rem; font-weight: 600; color: white; }
            .edit-feat-item p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }
            
            .edit-visual { 
                padding: 40px; 
                background: rgba(20, 20, 20, 0.6);
                backdrop-filter: blur(16px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                border-radius: 24px;
            }

            .visual-content { 
                height: 350px; 
                background: rgba(10, 10, 10, 0.8); 
                border-radius: 16px; 
                border: 1px solid rgba(255,255,255,0.03); 
                box-shadow: inset 0 0 20px rgba(0,0,0,0.5); 
                position: relative; 
                overflow: hidden; 
                margin-bottom: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .visual-timeline-track {
                position: absolute; bottom: 40px; left: 40px; right: 40px;
                height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;
            }
            .visual-playhead {
                position: absolute; top: -6px; width: 4px; height: 16px; 
                background: var(--accent-orange); border-radius: 2px;
                transition: left 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
                box-shadow: 0 0 10px rgba(255,87,34,0.5);
            }
            
            .ui-badge {
                background: rgba(255,87,34,0.15);
                color: var(--accent-orange);
                padding: 10px 20px;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: 600;
                border: 1px solid rgba(255,87,34,0.3);
                box-shadow: 0 0 15px rgba(255,87,34,0.2);
            }
            
            .caption h4 { margin-bottom: 8px; font-size: 1.2rem; color: var(--accent-orange); }
            .caption p { color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6; }
            
            @media (max-width: 900px) { .edit-mockup-wrapper { grid-template-columns: 1fr; } }
            @media (max-width: 768px) { .edit-section .section-header h2 { font-size: 2.2rem; } }
        `}</style>
        </section>
    );
}
