import { Play, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <div className="logo-icon-wrap">
                        <Play className="logo-icon" size={18} fill="#FF5722" stroke="none" />
                    </div>
                    <span>BuzzScreen</span>
                </div>
                <nav className={`nav ${mobileOpen ? 'mobile-open' : ''}`}>
                    <a href="#features">Features</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#pricing">Pricing</a>
                </nav>
                <div className="header-actions">
                    <a href="#" className="btn btn-nav">Start Recording</a>
                    <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            <style>{`
          .header {
             position: fixed;
             top: 24px;
             left: 0; 
             right: 0;
             z-index: 100;
             display: flex;
             justify-content: center;
             pointer-events: none; /* Allow clicking through side areas */
          }
          .header-container { 
             pointer-events: auto; /* Re-enable clicking on the navbar itself */
             display: flex; 
             justify-content: space-between; 
             align-items: center; 
             width: 100%;
             max-width: 1000px; /* Floating island width */
             background: rgba(13,13,13,0.85);
             backdrop-filter: blur(16px);
             -webkit-backdrop-filter: blur(16px);
             border: 1px solid rgba(255,255,255,0.08);
             border-radius: 100px; /* Fully rounded island */
             padding: 10px 24px;
             box-shadow: 
                0 10px 30px rgba(0,0,0,0.3),
                0 0 0 1px rgba(0,0,0,0.1);
          }
          .logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.15rem; }
          .logo-icon-wrap {
              width: 32px;
              height: 32px;
              border-radius: 50%; /* Rounded icon background */
              background: #1a1a1a;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
          }
          .nav { display: flex; gap: 32px; }
          .nav a { 
              color: var(--text-secondary); 
              font-size: 0.9rem;
              font-weight: 500;
              transition: all 0.3s;
              padding: 6px 0;
          }
          .nav a:hover { color: var(--text-primary); text-shadow: 0 0 12px rgba(255,255,255,0.4); }
          
          .header-actions { display: flex; gap: 12px; align-items: center; }
          
          /* Update button style for the pill navbar */
          .btn-nav {
              padding: 10px 20px;
              border-radius: 100px; /* Pill button */
              font-size: 0.85rem;
          }

          .mobile-toggle { display: none; background: none; border: none; color: white; cursor: pointer; }

          @media (max-width: 1024px) {
              .header { top: 16px; padding: 0 16px; }
              .header-container { max-width: 100%; border-radius: 16px; }
          }

          @media (max-width: 768px) {
              .nav {
                  display: none;
                  position: absolute;
                  top: calc(100% + 12px);
                  left: 0;
                  right: 0;
                  background: #141414;
                  flex-direction: column;
                  padding: 24px;
                  border-radius: 16px;
                  border: 1px solid rgba(255,255,255,0.08);
                  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                  gap: 20px;
                  align-items: center;
              }
              .nav.mobile-open { display: flex; }
              .mobile-toggle { display: block; }
          }
        `}</style>
        </header>
    );
}
