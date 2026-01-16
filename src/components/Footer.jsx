import { Play, Globe, Shield } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-brand-col">
                    <span className="logo-text">
                        <div className="footer-logo-icon">
                            <Play size={14} fill="white" stroke="none" />
                        </div>
                        BuzzCreen
                    </span>
                    <p className="footer-desc">Professional screen recording with zoom effects. Create, edit, and share videos instantly.</p>
                </div>

                <div className="footer-links-col">
                    <h4>Product</h4>
                    <a href="#">Features</a>
                    <a href="#">How It Works</a>
                    <a href="#">Use Cases</a>
                    <a href="#">Chrome Extension</a>
                </div>

                <div className="footer-links-col">
                    <h4>Legal & Support</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            <div className="container footer-bottom">
                <div className="copyright">
                    &copy; 2026 Buzzcreen. All rights reserved.
                </div>
                <div className="footer-certifications">
                    <div className="cert-item">
                        <Globe size={14} /> GDPR Compliant
                    </div>
                    <div className="cert-item">
                        <Shield size={14} /> EU ODR Platform
                    </div>
                    <a href="#" className="cert-link">Your Rights</a>
                </div>
            </div>

            <style>{`
            footer { 
                margin: 40px 20px 20px; 
                padding: 80px 0 40px; 
                background: #0e0e0e; 
                border-radius: 30px; 
                border: 1px solid rgba(255,255,255,0.03); 
                box-shadow: 
                    0 -10px 40px rgba(0,0,0,0.2),
                    inset 0 1px 0 rgba(255,255,255,0.03);
            }
            
            .footer-grid {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                gap: 60px;
                margin-bottom: 80px;
            }
            
            .logo-text { 
                font-weight: 700; 
                font-size: 1.2rem; 
                display: flex; 
                align-items: center; 
                gap: 12px;
                margin-bottom: 20px;
            }
            
            .footer-logo-icon { 
                width: 32px; height: 32px; 
                background: var(--surface-hover); 
                border-radius: 8px;
                display: flex; align-items: center; justify-content: center; 
                border: 1px solid rgba(255,255,255,0.05);
            }
            
            .footer-desc {
                color: var(--text-secondary);
                line-height: 1.6;
                font-size: 0.95rem;
                max-width: 300px;
            }
            
            .footer-links-col h4 {
                font-size: 0.9rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: white;
                margin-bottom: 24px;
                opacity: 0.8;
            }
            
            .footer-links-col {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .footer-links-col a {
                color: var(--text-secondary);
                font-size: 0.95rem;
                transition: color 0.2s;
            }
            
            .footer-links-col a:hover {
                color: var(--accent-orange);
            }
            
            .footer-bottom {
                padding-top: 40px;
                border-top: 1px solid rgba(255,255,255,0.03);
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: var(--text-secondary);
                font-size: 0.85rem;
            }
            
            .footer-certifications {
                display: flex;
                gap: 24px;
                align-items: center;
            }
            
            .cert-item {
                display: flex;
                align-items: center;
                gap: 8px;
                opacity: 0.7;
            }
            
            .cert-link {
                opacity: 0.7;
            }
            .cert-link:hover { opacity: 1; text-decoration: underline; }
            
            @media (max-width: 768px) { 
                footer { margin: 20px 10px 10px; border-radius: 20px; padding: 60px 0 30px; }
                .footer-grid { grid-template-columns: 1fr; gap: 40px; }
                .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
                .footer-certifications { justify-content: center; flex-wrap: wrap; }
            }
        `}</style>
        </footer>
    );
}
