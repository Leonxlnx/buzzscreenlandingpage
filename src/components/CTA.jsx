import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="cta-bottom">
            <div className="cta-content">
                <h2>Ready to create better videos?</h2>
                <p>Join thousands of creators using BuzzScreen to polish their content.</p>
                <div className="cta-buttons">
                    <a href="#" className="btn btn-primary">Get started free <ArrowRight size={16} style={{ marginLeft: 8 }} /></a>
                    <p className="sub-cta">No credit card required</p>
                </div>
            </div>
            <style>{`
            .cta-bottom { padding: 100px 0; text-align: center; background: radial-gradient(circle at center, rgba(255,87,34,0.1) 0%, rgba(0,0,0,0) 70%); }
            .cta-content { background: #1a1a1a; display: inline-block; padding: 60px 80px; border-radius: 24px; border: 1px solid var(--border-color); }
            .cta-content h2 { font-size: 2.5rem; margin-bottom: 16px; }
            .cta-content p { color: var(--text-secondary); margin-bottom: 32px; }
            .sub-cta { margin-top: 12px; font-size: 0.8rem; color: var(--text-secondary); }
            @media (max-width: 768px) { .cta-content { padding: 40px 20px; width: 100%; border: none; background: none; } }
        `}</style>
        </section>
    );
}
