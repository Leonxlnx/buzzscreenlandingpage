import { Play, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Play className="logo-icon" size={24} fill="#FF5722" stroke="none" />
                    <span>BuzzScreen</span>
                </div>
                <nav className={`nav ${mobileOpen ? 'mobile-open' : ''}`}>
                    <a href="#features">Features</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#pricing">Pricing</a>
                </nav>
                <div className="header-actions">
                    <a href="#" className="btn btn-primary-sm">Start Recording</a>
                    <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            <style>{`
          .header {
             padding: 24px 0;
             position: sticky;
             top: 0;
             z-index: 100;
             background-color: rgba(13, 13, 13, 0.8);
             backdrop-filter: blur(12px);
             border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .header-container { display: flex; justify-content: space-between; align-items: center; }
          .logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 1.25rem; }
          .nav { display: flex; gap: 32px; }
          .nav a { color: var(--text-secondary); font-size: 0.95rem; }
          .nav a:hover { color: var(--text-primary); }
          .header-actions { display: flex; gap: 10px; align-items: center; }
          .btn-primary-sm { background: var(--accent-orange); color: white; padding: 8px 16px; font-size: 0.9rem; }
          .btn-primary-sm:hover { background: #f4511e; }
          .mobile-toggle { display: none; background: none; border: none; color: white; cursor: pointer; }

          @media (max-width: 768px) {
              .nav {
                  display: none;
                  position: absolute;
                  top: 100%;
                  left: 0;
                  right: 0;
                  background: var(--bg-color);
                  flex-direction: column;
                  padding: 20px;
                  border-bottom: 1px solid var(--border-color);
              }
              .nav.mobile-open { display: flex; }
              .mobile-toggle { display: block; }
          }
        `}</style>
        </header>
    );
}
