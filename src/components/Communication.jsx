import { Rocket, MessageSquare, BarChart, Globe } from 'lucide-react';

export default function Communication() {
    const items = [
        { icon: <Rocket />, bg: "rgba(255, 87, 34, 0.2)", color: "#ff5722", title: "Faster reviews", desc: "Speed up your design reviews by 10x." },
        { icon: <MessageSquare />, bg: "rgba(156, 39, 176, 0.2)", color: "#ab47bc", title: "Clear feedback", desc: "Leaving comments at exact timestamps." },
        { icon: <BarChart />, bg: "rgba(33, 150, 243, 0.2)", color: "#42a5f5", title: "Analytics", desc: "Know who watched and when." },
        { icon: <Globe />, bg: "rgba(76, 175, 80, 0.2)", color: "#66bb6a", title: "Guest access", desc: "Share with anyone, no account needed." },
    ];

    return (
        <section className="communication">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">clarity</p>
                    <h2>Built for clear communication</h2>
                    <p className="section-sub">Get your point across, faster than a meeting.</p>
                </div>
                <div className="comm-grid">
                    {items.map((item, index) => (
                        <div className="comm-card" key={index}>
                            <div className="comm-icon" style={{ background: item.bg, color: item.color }}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
            .communication { padding: 100px 0; }
            .comm-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 60px; }
            .comm-card { background: var(--surface); padding: 24px; border-radius: 12px; border: 1px solid var(--border-color); }
            .comm-icon { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
            .comm-card h3 { font-size: 1.1rem; margin-bottom: 8px; }
            .comm-card p { font-size: 0.9rem; color: var(--text-secondary); }
            @media (max-width: 768px) { .comm-grid { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
