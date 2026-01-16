import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="cta-bottom">
            <div className="container">
                <div className="cta-content soft-card">
                    <span className="cta-label">Get Started</span>
                    <h2>Ready to create better videos?</h2>
                    <p className="cta-desc">Join thousands of creators using BuzzScreen to polish their content and communicate faster.</p>
                    <div className="cta-buttons">
                        <a href="#" className="btn btn-cta">
                            Get started free
                            <ArrowRight size={20} style={{ marginLeft: 10 }} />
                        </a>
                    </div>
                    <p className="sub-cta">No credit card required · Free forever plan</p>
                </div>
            </div>
            <style>{`
            .cta-bottom { 
                padding: 120px 0; 
                text-align: center;
                background: #0d0d0d;
            }
            
            .cta-content { 
                max-width: 700px;
                margin: 0 auto;
                padding: 80px 60px; 
                background: linear-gradient(135deg, #161616 0%, #0f0f0f 100%);
                border: 1px solid rgba(255,255,255,0.05);
            }
            
            .cta-label {
                display: inline-block;
                font-size: 0.85rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: var(--accent-orange);
                margin-bottom: 20px;
            }
            
            .cta-content h2 { 
                font-size: 3rem; 
                font-weight: 700;
                margin-bottom: 20px;
                line-height: 1.2;
            }
            
            .cta-desc { 
                color: var(--text-secondary); 
                margin-bottom: 40px; 
                font-size: 1.2rem;
                line-height: 1.6;
                max-width: 500px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .cta-buttons {
                margin-bottom: 20px;
            }
            
            .btn-cta {
                display: inline-flex;
                align-items: center;
                padding: 18px 36px;
                font-size: 1.1rem;
                font-weight: 600;
                background: var(--gradient-orange);
                color: white;
                border-radius: 12px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(255,87,34,0.3);
            }
            
            .btn-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 30px rgba(255,87,34,0.4);
            }
            
            .sub-cta { 
                font-size: 0.9rem; 
                color: var(--text-secondary); 
                opacity: 0.7; 
            }
            
            @media (max-width: 768px) { 
                .cta-content { 
                    padding: 50px 30px; 
                }
                .cta-content h2 {
                    font-size: 2rem;
                }
            }
        `}</style>
        </section>
    );
}
