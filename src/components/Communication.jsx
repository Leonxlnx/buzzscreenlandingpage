import { Rocket, MessageSquare, BarChart, Globe } from 'lucide-react';

export default function Communication() {
    const items = [
        { icon: <Rocket size={24} />, title: "Faster reviews", desc: "Speed up your design reviews by 10x." },
        { icon: <MessageSquare size={24} />, title: "Clear feedback", desc: "Leaving comments at exact timestamps." },
        { icon: <BarChart size={24} />, title: "Analytics", desc: "Know who watched and when." },
        { icon: <Globe size={24} />, title: "Guest access", desc: "Share with anyone, no account needed." },
    ];

    return (
        <section className="communication">
            <div className="container">
                <div className="section-header">
                    <h2>Built for clear communication</h2>
                    <p className="section-sub">Get your point across, faster than a meeting.</p>
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
            .communication { padding: 100px 0; background: #0b0b0b; }
            .comm-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 60px; }
            .comm-card { padding: 32px; display: flex; flex-direction: column; align-items: start; }
            .comm-icon { 
                width: 56px; height: 56px; 
                border-radius: 14px; 
                display: flex; align-items: center; justify-content: center; 
                margin-bottom: 20px;
                color: var(--text-primary);
                background: linear-gradient(135deg, #181818, #101010);
                box-shadow: 
                    5px 5px 10px rgba(0,0,0,0.5),
                    -2px -2px 5px rgba(255,255,255,0.05);
            }
            .comm-card:hover .comm-icon {
                color: var(--accent-orange);
            }
            .comm-card h3 { font-size: 1.1rem; margin-bottom: 8px; }
            .comm-card p { font-size: 0.9rem; color: var(--text-secondary); }
            @media (max-width: 768px) { .comm-grid { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
