import { Video, Zap, Share2, CheckCircle2 } from 'lucide-react';

export default function Features() {
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
        <section className="features" id="features">
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
                line-height: 1.2;
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
                transition: transform 0.3s ease;
                height: 100%;
            }
            
            .feature-group-card:hover {
                transform: translateY(-4px);
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
                background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
                display: flex; 
                align-items: center; 
                justify-content: center;
                color: var(--accent-orange);
                box-shadow: var(--shadow-soft-out);
                border: 1px solid rgba(255,255,255,0.05);
            }
            
            .feature-group-card h3 { 
                font-size: 1.5rem; 
                font-weight: 600;
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
