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
                    <div className="step-card soft-card">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <Video color="white" />
                        </div>
                        <h3>Record</h3>
                        <p>Click the button and start recording your screen, camera, or both.</p>
                    </div>
                    <div className="step-card soft-card">
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <Share2 color="white" />
                        </div>
                        <h3>Share</h3>
                        <p>Share your videos instantly with a link. No uploads, no waiting.</p>
                    </div>
                    <div className="step-card soft-card">
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <BarChart2 color="white" />
                        </div>
                        <h3>Improve</h3>
                        <p>See who watched your videos and learn what needs to be improved.</p>
                    </div>
                </div>
            </div>
            <style>{`
            .steps { padding: 100px 0; }
            .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .step-card { 
                padding: 40px 32px; 
                position: relative; 
                overflow: hidden; 
                display: flex; flex-direction: column; align-items: flex-start;
            }
            .step-number { 
                position: absolute; 
                top: 20px; 
                right: 30px; 
                font-size: 6rem; 
                font-weight: 800; 
                color: rgba(255,255,255,0.02); 
                line-height: 1; 
                pointer-events: none; 
            }
            .step-icon { 
                width: 64px; 
                height: 64px; 
                border-radius: 16px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                margin-bottom: 24px;
                background: linear-gradient(135deg, #181818, #101010);
                box-shadow: 
                    5px 5px 10px rgba(0,0,0,0.5),
                    -2px -2px 5px rgba(255,255,255,0.05);
                border: 1px solid rgba(255,255,255,0.05);
            }
            .step-card:hover .step-icon {
                border-color: var(--accent-orange);
                box-shadow: 0 0 15px rgba(255,87,34,0.3);
            }
            .step-card h3 { font-size: 1.5rem; margin-bottom: 12px; }
            .step-card p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }
            @media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr; } }
        `}</style>
        </section>
    );
}
