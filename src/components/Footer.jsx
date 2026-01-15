import { Play } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="logo-text">
                        <div className="footer-logo-icon">
                            <Play size={16} fill="white" stroke="none" />
                        </div>
                        BuzzScreen
                    </span>
                </div>
                <div className="footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="container copyright">
                &copy; 2026 BuzzScreen. All rights reserved.
            </div>
            <style>{`
            footer { 
                margin: 40px 20px 20px; /* Floating margin */
                padding: 60px 0 30px; 
                background: #0e0e0e; 
                border-radius: 30px; /* Rounded card style */
                border: 1px solid rgba(255,255,255,0.03); 
                box-shadow: 
                    0 -10px 40px rgba(0,0,0,0.2),
                    inset 0 1px 0 rgba(255,255,255,0.03);
            }
            .footer-content { display: flex; justify-content: space-between; margin-bottom: 40px; align-items: center; }
            .logo-text { font-weight: 700; font-size: 1.2rem; display: flex; align-items: center; gap: 12px; }
            .footer-logo-icon { 
                width: 32px; height: 32px; 
                background: var(--surface-hover); 
                border-radius: 50%;
                display: flex; align-items: center; justify-content: center; 
                border: 1px solid rgba(255,255,255,0.05);
            }
            .footer-links { display: flex; gap: 32px; font-size: 0.95rem; color: var(--text-secondary); }
            .footer-links a { position: relative; }
            .footer-links a::after {
                content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--accent-orange); transition: width 0.3s;
            }
            .footer-links a:hover { color: white; }
            .footer-links a:hover::after { width: 100%; }
            .copyright { text-align: center; color: var(--text-secondary); font-size: 0.85rem; opacity: 0.4; }
            @media (max-width: 768px) { 
                footer { margin: 20px 10px 10px; border-radius: 20px; }
                .footer-content { flex-direction: column; gap: 24px; } 
            }
        `}</style>
        </footer>
    );
}
