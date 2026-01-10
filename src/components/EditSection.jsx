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
                    <div className="edit-visual">
                        <div className="browser-simple">
                            <div className="browser-header-simple">
                                <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                            </div>
                            <div className="browser-body-simple">
                                <div className="google-mock">
                                    <span className="google-logo">
                                        <span style={{ color: '#4285F4' }}>G</span>
                                        <span style={{ color: '#EA4335' }}>o</span>
                                        <span style={{ color: '#FBBC05' }}>o</span>
                                        <span style={{ color: '#4285F4' }}>g</span>
                                        <span style={{ color: '#34A853' }}>l</span>
                                        <span style={{ color: '#EA4335' }}>e</span>
                                    </span>
                                    <div className="search-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="caption">
                            <h4>Smooth zoom</h4>
                            <p>Zoom in on key details without losing context. Just click where you want to focus and we'll handle the rest.</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
            .edit-section { padding: 100px 0; background: var(--bg-secondary); }
            .edit-mockup-wrapper { display: grid; grid-template-columns: 300px 1fr; gap: 60px; margin-top: 60px; align-items: center; }
            .edit-feat-item { display: flex; gap: 16px; margin-bottom: 32px; opacity: 0.5; transition: opacity 0.3s; cursor: pointer; }
            .edit-feat-item.active { opacity: 1; }
            .edit-feat-item .num { background: #333; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 0.8rem; font-weight: 600; }
            .edit-feat-item.active .num { background: var(--accent-orange); color: white; }
            .edit-feat-item h4 { margin-bottom: 4px; font-size: 1rem; }
            .edit-feat-item p { font-size: 0.85rem; color: var(--text-secondary); }
            .edit-visual { background: var(--surface); padding: 24px; border-radius: 12px; border: 1px solid var(--border-color); }
            .browser-simple { background: white; border-radius: 8px; overflow: hidden; height: 300px; position: relative; }
            .browser-header-simple { background: #f1f1f1; padding: 8px 12px; display: flex; gap: 6px; }
            .browser-header-simple .dot { width: 8px; height: 8px; border-radius: 50%; }
            .dot.red { background: #ff5f57; }
            .dot.yellow { background: #febc2e; }
            .dot.green { background: #28c840; }
            .browser-body-simple { display: flex; align-items: center; justify-content: center; height: 100%; color: #333; }
            .google-mock { text-align: center; }
            .google-logo { font-size: 2rem; font-weight: bold; }
            .search-bar { width: 200px; height: 20px; border: 1px solid #ddd; border-radius: 100px; margin: 10px auto; }
            .caption { margin-top: 24px; }
            .caption h4 { margin-bottom: 8px; }
            .caption p { font-size: 0.9rem; color: var(--text-secondary); }
            @media (max-width: 768px) { .edit-mockup-wrapper { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
