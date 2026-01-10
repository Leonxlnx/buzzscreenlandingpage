import { Zap, Video, Save, Edit3, Lock, RefreshCcw } from 'lucide-react';

export default function Features() {
    const features = [
        { icon: <Zap />, title: "Record in browser or app", desc: "Works everywhere you work." },
        { icon: <Video />, title: "Record screen, cam, or both", desc: "Total control over your layout." },
        { icon: <Save />, title: "Save locally or to the cloud", desc: "Your data, your choice." },
        { icon: <Edit3 />, title: "Edit instantly after stopping", desc: "Trim, crop, and polish." },
        { icon: <Lock />, title: "Secure by default", desc: "Enterprise-grade security built-in." },
        { icon: <RefreshCcw />, title: "Share with a link", desc: "No large file attachments." },
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">features</p>
                    <h2>Everything that matters, nothing that slows you down</h2>
                    <p className="section-sub">Tools designed to help you share your ideas fast, not mess with settings.</p>
                </div>
                <div className="features-grid">
                    {features.map((feat, index) => (
                        <div className="feature-item" key={index}>
                            <span className="icon">{feat.icon}</span>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
            .features { padding: 100px 0; }
            .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 60px; }
            .feature-item { padding: 24px; }
            .feature-item .icon { font-size: 2rem; margin-bottom: 16px; display: block; color: var(--text-primary); }
            .feature-item h3 { font-size: 1.1rem; margin-bottom: 8px; }
            .feature-item p { color: var(--text-secondary); font-size: 0.9rem; }
            @media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } }
         `}</style>
        </section>
    );
}
