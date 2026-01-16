import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/herobg.webp';

export default function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="badge animate-fade" style={{ animationDelay: '0.3s' }}>
                    <span className="badge-dot"></span>
                    Now in early access
                </div>
                <h1 className="animate-fade" style={{ animationDelay: '0.5s' }}>Record. Edit. Share.<br /><span className="gradient-text">In seconds.</span></h1>
                <p className="subhead animate-fade" style={{ animationDelay: '0.7s' }}>Record fast. Make it clear with simple edits. Share instantly.</p>
                <div className="cta-group animate-fade" style={{ animationDelay: '0.9s' }}>
                    <a href="#" className="btn btn-hero">
                        Get Started Free
                        <ArrowRight size={18} style={{ marginLeft: 8 }} />
                    </a>
                </div>
                <p className="sub-cta animate-fade" style={{ animationDelay: '1s' }}>Start for free · No credit card required</p>

                <div className="feature-pills animate-fade" style={{ animationDelay: '1.1s' }}>
                    <span className="pill">Browser extension</span>
                    <span className="pill">Cloud editor</span>
                    <span className="pill">Instant sharing</span>
                </div>

                <div className="browser-mockup animate-fade-up" style={{ animationDelay: '1.3s' }}>
                    <div className="mockup-header">
                        <div className="dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="address-bar">
                            buzzscreen.com
                        </div>
                    </div>
                    <div className="mockup-content">
                        <div className="dashboard-placeholder">
                            <div className="dash-sidebar"></div>
                            <div className="dash-main">
                                <div className="dash-header"></div>
                                <div className="dash-grid">
                                    <div className="dash-card"></div>
                                    <div className="dash-card"></div>
                                    <div className="dash-card"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
          /* Premium Animations */
          @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
              from { opacity: 0; transform: translateY(60px); }
              to { opacity: 1; transform: translateY(0); }
          }
          @keyframes overlayFade {
              from { opacity: 1; }
              to { opacity: 0; }
          }
          
          .animate-fade {
              opacity: 0;
              animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-fade-up {
              opacity: 0;
              animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          .hero-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: #0d0d0d;
              animation: overlayFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
              pointer-events: none;
              z-index: 1;
          }
          
          .hero {
             position: relative;
             padding-top: 160px;
             padding-bottom: 120px; 
             text-align: center; 
             overflow: hidden;
             background-size: cover;
             background-position: center -100px;
             background-repeat: no-repeat;
          }
          
          .hero-content {
              position: relative;
              z-index: 2;
          }
          .badge {
             display: inline-flex;
             align-items: center;
             gap: 8px;
             padding: 8px 16px;
             background: #141414;
             border-radius: 100px;
             font-size: 0.85rem;
             color: var(--text-secondary);
             box-shadow: var(--shadow-soft-out);
             border: 1px solid rgba(255,255,255,0.02);
             margin-bottom: 40px;
          }
          .badge-dot {
              width: 8px; height: 8px; background: var(--accent-orange); border-radius: 50%;
              box-shadow: 0 0 10px var(--accent-orange);
          }
          
          .hero h1 { 
              font-size: 4.2rem; 
              line-height: 1.15; 
              margin-bottom: 24px;
              text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          }
          .gradient-text {
              background: var(--gradient-orange);
              -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent;
          }
          .hero .subhead {
              font-size: 1.15rem;
              color: var(--text-secondary);
              max-width: 480px;
              margin: 0 auto 40px;
              line-height: 1.6;
          }
          .cta-group { display: flex; justify-content: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap; }
          
          .sub-cta {
              color: var(--text-secondary);
              font-size: 0.9rem;
              margin-bottom: 32px;
              opacity: 0.7;
          }
          
          .feature-pills {
              display: flex;
              justify-content: center;
              gap: 12px;
              margin-bottom: 60px;
              flex-wrap: wrap;
          }
          .pill {
              padding: 8px 16px;
              background: rgba(255,255,255,0.03);
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 100px;
              font-size: 0.8rem;
              color: var(--text-secondary);
              transition: all 0.3s;
          }
          .pill:hover {
              background: rgba(255,255,255,0.06);
              color: white;
          }

          .browser-mockup {
             background: #141414;
             border-radius: 20px;
             border: 1px solid rgba(255,255,255,0.05);
             max-width: 960px;
             margin: 0 auto;
             box-shadow: 
                0 40px 80px rgba(0,0,0,0.5),
                0 0 0 1px rgba(255,255,255,0.05);
             overflow: hidden;
          }
          .mockup-header { 
              padding: 14px 20px; 
              display: flex; 
              align-items: center; 
              gap: 16px; 
              background: rgba(20,20,20,0.5);
              border-bottom: 1px solid rgba(255,255,255,0.03);
          }
          .dots { display: flex; gap: 8px; }
          .dots span { width: 12px; height: 12px; border-radius: 50%; background: #333; box-shadow: inset 1px 1px 2px rgba(0,0,0,0.5); }
          .address-bar { 
              flex: 1;
              background: #0a0a0a;
              height: 32px;
              border-radius: 8px;
              display: flex; align-items: center; justify-content: center;
              font-size: 0.8rem; color: #555;
              box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), inset -1px -1px 3px rgba(255,255,255,0.05);
              max-width: 350px; margin: 0 auto;
          }
          
          .mockup-content { 
              background: linear-gradient(135deg, #1c1c1c 0%, #141414 100%); 
              min-height: 400px; 
              padding: 24px;
          }
          .dashboard-placeholder {
              display: flex; gap: 16px; height: 100%;
          }
          .dash-sidebar { width: 50px; background: rgba(0,0,0,0.2); border-radius: 10px; }
          .dash-main { flex: 1; display: flex; flex-direction: column; gap: 16px; }
          .dash-header { height: 50px; background: rgba(255,255,255,0.03); border-radius: 10px; }
          .dash-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; flex: 1; }
          .dash-card { 
              background: rgba(255,255,255,0.02); 
              border-radius: 10px;
              border: 1px solid rgba(255,255,255,0.02);
          }

          @media (max-width: 768px) {
              .hero { padding-top: 120px; }
              .hero h1 { font-size: 2.8rem; }
              .dash-grid { grid-template-columns: 1fr; }
              .cta-group { flex-direction: column; align-items: center; }
          }
        `}</style>
        </section>
    );
}
