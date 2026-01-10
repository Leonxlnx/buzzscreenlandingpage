import { Video, Share2, BarChart2 } from 'lucide-react';

export default function Steps() {
    return (
        <section className="steps">
            <div className="container">
                <div className="section-header">
                    <h2>Three simple steps</h2>
                    <p className="section-sub">Start recording in seconds. Edit what matters. Share instantly.</p>
                </div>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-icon orange">
                            <div className="record-btn-mock">Start Recording</div>
                        </div>
                        <h3>Record</h3>
                        <p>Click the button and start recording your screen, camera, or both.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-icon purple">
                            <Share2 size={24} color="#d500f9" />
                        </div>
                        <h3>Share</h3>
                        <p>Share your videos instantly with a link. No uploads, no waiting.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-icon blue">
                            <BarChart2 size={24} color="#00bcd4" />
                        </div>
                        <h3>Improve</h3>
                        <p>See who watched your videos and learn what needs to be improved.</p>
                    </div>
                </div>
            </div>
            <style>{`
            .steps { padding: 100px 0; background: var(--bg-secondary); }
            .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .step-card { background: var(--surface); padding: 32px; border-radius: 16px; border: 1px solid var(--border-color); position: relative; overflow: hidden; transition: transform 0.3s; }
            .step-card:hover { transform: translateY(-5px); }
            .step-number { position: absolute; top: 24px; right: 32px; font-size: 6rem; font-weight: 700; color: rgba(255,255,255,0.03); line-height: 1; pointer-events: none; }
            .step-icon { width: 64px; height: 64px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
            .step-icon.orange { background: rgba(255, 87, 34, 0.1); border: 1px solid rgba(255, 87, 34, 0.3); }
            .step-icon.purple { background: rgba(213, 0, 249, 0.1); border: 1px solid rgba(213, 0, 249, 0.3); }
            .step-icon.blue { background: rgba(0, 188, 212, 0.1); border: 1px solid rgba(0, 188, 212, 0.3); }
            .record-btn-mock { background: #ff5722; color: white; font-size: 0.6rem; padding: 4px 8px; border-radius: 4px; box-shadow: 0 4px 10px rgba(255,87,34,0.4); font-weight: 600; white-space: nowrap; }
            .step-card h3 { font-size: 1.5rem; margin-bottom: 12px; }
            .step-card p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }
            @media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
