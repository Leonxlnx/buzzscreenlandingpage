import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="cta-bottom">
            <div className="cta-content soft-card">
                <h2>Ready to create better videos?</h2>
                <p>Join thousands of creators using BuzzScreen to polish their content.</p>
                <div className="cta-buttons">
                    <a href="#" className="btn btn-cta">Get started free <ArrowRight size={18} style={{ marginLeft: 8 }} /></a>
                    <p className="sub-cta">No credit card required</p>
                </div>
            </div>
            <style>{`
            .cta-bottom { padding: 120px 0; text-align: center; }
            .cta-content { 
                display: inline-block; 
                padding: 80px 100px; 
                background: linear-gradient(135deg, #161616 0%, #101010 100%);
            }
            .cta-content h2 { font-size: 2.8rem; margin-bottom: 20px; }
            .cta-content p { color: var(--text-secondary); margin-bottom: 40px; font-size: 1.1rem; }
            .sub-cta { margin-top: 16px; font-size: 0.85rem; color: var(--text-secondary); opacity: 0.7; }
            @media (max-width: 768px) { .cta-content { padding: 40px 20px; width: 100%; } }
        `}</style>
        </section>
    );
}
