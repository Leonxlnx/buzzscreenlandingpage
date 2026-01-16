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
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .steps { 
                padding: 220px 0 100px; 
                margin-top: -120px;
                position: relative;
                z-index: 1;
                background: linear-gradient(180deg, #1a0703 0%, #2a0a04 20%, #381101 45%, #0d0d0d 100%);
            }
            
            .steps::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                background: radial-gradient(circle at top, rgba(255,87,34,0.15) 0%, transparent 70%);
                pointer-events: none;
                z-index: 0;
            }
            
            .steps .section-header {
                opacity: 0;
                animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
            }
            
            .step-card {
                opacity: 0;
                animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .step-card:nth-child(1) { animation-delay: 0.3s; }
            .step-card:nth-child(2) { animation-delay: 0.5s; }
            .step-card:nth-child(3) { animation-delay: 0.7s; }
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
