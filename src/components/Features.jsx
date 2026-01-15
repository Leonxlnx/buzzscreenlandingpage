import { Zap, Video, Save, Edit3, Lock, RefreshCcw } from 'lucide-react';

export default function Features() {
    const features = [
        { icon: <Zap size={24} />, title: "Record in browser or app", desc: "Works everywhere you work." },
        { icon: <Video size={24} />, title: "Record screen, cam, or both", desc: "Total control over your layout." },
        { icon: <Save size={24} />, title: "Save locally or to the cloud", desc: "Your data, your choice." },
        { icon: <Edit3 size={24} />, title: "Edit instantly after stopping", desc: "Trim, crop, and polish." },
        { icon: <Lock size={24} />, title: "Secure by default", desc: "Enterprise-grade security built-in." },
        { icon: <RefreshCcw size={24} />, title: "Share with a link", desc: "No large file attachments." },
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2>Everything that matters</h2>
                    <p className="section-sub">Tools designed to help you share your ideas fast.</p>
                </div>
                <div className="features-grid">
                    {features.map((feat, index) => (
                        <div className="feature-item soft-card" key={index}>
                            <div className="feature-icon-wrap">
                                {feat.icon}
                            </div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
            .features { padding: 100px 0; background: #0b0b0b; }
            .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 60px; }
            .feature-item { padding: 32px; display: flex; flex-direction: column; align-items: start; }
            .feature-icon-wrap {
                width: 50px; height: 50px;
                border-radius: 12px;
                background: #141414;
                display: flex; align-items: center; justify-content: center;
                margin-bottom: 20px;
                color: var(--accent-orange);
                box-shadow: var(--shadow-soft-out);
            }
            .feature-item h3 { font-size: 1.1rem; margin-bottom: 8px; }
            .feature-item p { color: var(--text-secondary); font-size: 0.9rem; }
            @media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } }
         `}</style>
        </section>
    );
}
