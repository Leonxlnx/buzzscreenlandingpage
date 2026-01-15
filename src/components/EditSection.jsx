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
                            {/* Visual Representation */}
                            <div className="visual-header"></div>
                            <div className="visual-body"></div>
                        </div>
                        <div className="caption">
                            <h4>Smooth zoom</h4>
                            <p>Zoom in on key details without losing context.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            .edit-section { padding: 100px 0; }
            .edit-mockup-wrapper { display: grid; grid-template-columns: 320px 1fr; gap: 60px; margin-top: 60px; align-items: center; }
            
            .edit-feat-item { 
                display: flex; gap: 16px; padding: 20px; 
                border-radius: 16px;
                transition: all 0.3s ease; 
                cursor: pointer;
                border: 1px solid transparent;
            }
            .edit-feat-item:hover { background: rgba(255,255,255,0.02); }
            
            .edit-feat-item.active { 
                background: #141414;
                box-shadow: var(--shadow-soft-out);
                border-color: rgba(255,255,255,0.02);
            }
            
            .edit-feat-item .num { 
                width: 28px; height: 28px; 
                border-radius: 8px; 
                background: #0d0d0d;
                box-shadow: var(--shadow-inset);
                display: flex; align-items: center; justify-content: center; 
                font-size: 0.8rem; font-weight: 700; color: #555;
            }
            .edit-feat-item.active .num { 
                background: var(--gradient-orange); color: white; box-shadow: none;
            }
            
            .edit-feat-item h4 { margin-bottom: 4px; font-size: 1rem; }
            .edit-feat-item p { font-size: 0.85rem; color: var(--text-secondary); }
            
            .edit-visual { padding: 30px; }
            .visual-content { height: 300px; background: #0d0d0d; border-radius: 12px; border: 1px solid rgba(255,255,255,0.03); box-shadow: var(--shadow-inset); position: relative; overflow: hidden; margin-bottom: 24px; }
            
            .caption h4 { margin-bottom: 6px; font-size: 1.1rem; color: var(--accent-orange); }
            .caption p { color: var(--text-secondary); }
            
            @media (max-width: 768px) { .edit-mockup-wrapper { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
