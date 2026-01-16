import { useState } from 'react';

export default function EditSection() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 0, title: "Trim the ends", desc: "Cut the fluff from start and finish." },
        { id: 1, title: "Crop the frame", desc: "Focus on the important part of the screen." },
        { id: 2, title: "Add a thumbnail", desc: "Set the perfect preview image." },
        { id: 3, title: "Add text", desc: "Highlight key points with overlay text." },
    ];

    return (
        <section className="edit-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Editing Suite</span>
                    <h2>Edit only what matters</h2>
                    <p className="section-sub">Make your recording shine with simple, streamlined edits.</p>
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
                                    <p>{tab.desc}</p>
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
                                {activeTab === 0 && <span className="ui-badge">Trim Mode</span>}
                                {activeTab === 1 && <span className="ui-badge">Crop Tool</span>}
                                {activeTab === 2 && <span className="ui-badge">Thumbnail Editor</span>}
                                {activeTab === 3 && <span className="ui-badge">Text Overlay</span>}
                            </div>
                        </div>
                        <div className="caption">
                            <h4>{tabs[activeTab].title}</h4>
                            <p>Modifying your video in real-time without rendering.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            .edit-section { 
                padding: 120px 0; 
                background: #0d0d0d;
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
                transition: all 0.3s ease; 
                cursor: pointer;
                border: 1px solid transparent;
                margin-bottom: 4px;
            }
            .edit-feat-item:hover { background: rgba(255,255,255,0.02); }
            
            .edit-feat-item.active { 
                background: #141414;
                box-shadow: var(--shadow-soft-out);
                border-color: rgba(255,255,255,0.03);
            }
            
            .edit-feat-item .num { 
                width: 32px; height: 32px; 
                min-width: 32px;
                border-radius: 10px; 
                background: #0d0d0d;
                box-shadow: var(--shadow-inset);
                display: flex; align-items: center; justify-content: center; 
                font-size: 0.9rem; font-weight: 700; color: #555;
                transition: all 0.3s ease;
            }
            .edit-feat-item.active .num { 
                background: var(--gradient-orange); 
                color: white; 
                box-shadow: 0 4px 10px rgba(255,87,34,0.3);
            }
            
            .edit-feat-item h4 { margin-bottom: 6px; font-size: 1.1rem; font-weight: 600; }
            .edit-feat-item p { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; }
            
            .edit-visual { padding: 40px; }
            .visual-content { 
                height: 350px; 
                background: #0a0a0a; 
                border-radius: 16px; 
                border: 1px solid rgba(255,255,255,0.03); 
                box-shadow: var(--shadow-inset); 
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
                background: rgba(255,87,34,0.1);
                color: var(--accent-orange);
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 0.9rem;
                font-weight: 600;
                border: 1px solid rgba(255,87,34,0.2);
            }
            
            .caption h4 { margin-bottom: 8px; font-size: 1.2rem; color: var(--accent-orange); }
            .caption p { color: var(--text-secondary); font-size: 1.05rem; }
            
            @media (max-width: 900px) { .edit-mockup-wrapper { grid-template-columns: 1fr; } }
            @media (max-width: 768px) { .edit-section .section-header h2 { font-size: 2.2rem; } }
        `}</style>
        </section>
    );
}
