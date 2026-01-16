import { Zap, Video, Save, Edit3, Lock, RefreshCcw } from 'lucide-react';

export default function Features() {
    const features = [
        { icon: <Zap size={28} />, title: "Record in browser or app", desc: "Works everywhere you work. No downloads, no setup." },
        { icon: <Video size={28} />, title: "Record screen, cam, or both", desc: "Total control over your layout and capture settings." },
        { icon: <Save size={28} />, title: "Save locally or to the cloud", desc: "Your data, your choice. Always in your control." },
        { icon: <Edit3 size={28} />, title: "Edit instantly after stopping", desc: "Trim, crop, and polish without leaving the app." },
        { icon: <Lock size={28} />, title: "Secure by default", desc: "Enterprise-grade security built into every feature." },
        { icon: <RefreshCcw size={28} />, title: "Share with a link", desc: "No large file attachments. Just send a link." },
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Features</span>
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
            .features { 
                padding: 120px 0; 
                background: #0d0d0d; 
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
            }
            
            .features .section-sub {
                font-size: 1.25rem;
                color: var(--text-secondary);
                max-width: 500px;
                margin: 0 auto;
            }
            
            .features-grid { 
                display: grid; 
                grid-template-columns: repeat(3, 1fr); 
                gap: 32px; 
                margin-top: 80px; 
            }
            
            .feature-item { 
                padding: 40px 32px; 
                display: flex; 
                flex-direction: column; 
                align-items: start;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            .feature-item:hover {
                transform: translateY(-4px);
            }
            
            .feature-icon-wrap {
                width: 60px; 
                height: 60px;
                border-radius: 16px;
                background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
                display: flex; 
                align-items: center; 
                justify-content: center;
                margin-bottom: 24px;
                color: var(--accent-orange);
                box-shadow: 
                    6px 6px 12px rgba(0,0,0,0.4),
                    -3px -3px 8px rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.3s ease;
            }
            
            .feature-item:hover .feature-icon-wrap {
                box-shadow: 0 0 20px rgba(255,87,34,0.3);
                border-color: var(--accent-orange);
            }
            
            .feature-item h3 { 
                font-size: 1.25rem; 
                font-weight: 600;
                margin-bottom: 12px; 
            }
            
            .feature-item p { 
                color: var(--text-secondary); 
                font-size: 1rem; 
                line-height: 1.6;
            }
            
            @media (max-width: 1024px) { 
                .features-grid { grid-template-columns: repeat(2, 1fr); } 
            }
            
            @media (max-width: 768px) { 
                .features-grid { grid-template-columns: 1fr; }
                .features .section-header h2 { font-size: 2.2rem; }
            }
         `}</style>
        </section>
    );
}
