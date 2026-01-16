import { Monitor, MessageCircle, BookOpen, Users } from 'lucide-react';

export default function Communication() {
    const items = [
        { icon: <Monitor size={28} />, title: "Product Demos", desc: "Show how your product works, clearly and quickly." },
        { icon: <MessageCircle size={28} />, title: "Visual Feedback", desc: "Show what you mean instead of explaining it in text." },
        { icon: <BookOpen size={28} />, title: "Tutorials", desc: "Create short, clear tutorials for your team or clients." },
        { icon: <Users size={28} />, title: "Team Updates", desc: "Share progress, updates, or context with a simple link." },
    ];

    return (
        <section className="communication">
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
                background: linear-gradient(180deg, #0d0d0d 0%, #0b0b0b 100%); 
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
            }
            
            .comm-card:hover {
                transform: translateY(-4px);
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
                background: linear-gradient(135deg, #181818, #101010);
                box-shadow: 
                    6px 6px 12px rgba(0,0,0,0.5),
                    -3px -3px 8px rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }
            
            .comm-card:hover .comm-icon {
                color: var(--accent-orange);
                border-color: var(--accent-orange);
                box-shadow: 0 0 15px rgba(255,87,34,0.3);
            }
            
            .comm-card h3 { 
                font-size: 1.25rem; 
                font-weight: 600;
                margin-bottom: 10px; 
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
