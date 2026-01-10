import { Play } from 'lucide-react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="logo-text">
                        <Play size={20} fill="#FF5722" stroke="none" /> BuzzScreen
                    </span>
                </div>
                <div className="footer-links">
                    {/* Links placeholder */}
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="container copyright">
                &copy; 2026 BuzzScreen. All rights reserved.
            </div>
            <style>{`
            footer { border-top: 1px solid var(--border-color); padding: 60px 0 20px; margin-top: 40px; }
            .footer-content { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .logo-text { font-weight: 700; font-size: 1.2rem; display: flex; align-items: center; gap: 8px; }
            .footer-links { display: flex; gap: 24px; font-size: 0.9rem; color: var(--text-secondary); }
            .copyright { text-align: center; color: var(--text-secondary); font-size: 0.85rem; }
            @media (max-width: 768px) { .footer-content { flex-direction: column; gap: 24px; align-items: center; } }
        `}</style>
        </footer>
    );
}
