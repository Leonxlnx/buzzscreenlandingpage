import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="badge">New feature available</div>
                <h1>Record. Edit. Share.<br /><span className="gradient-text">In seconds.</span></h1>
                <p className="subhead">Record your screen and camera with one click. Share instantly.</p>
                <div className="cta-group">
                    <a href="#" className="btn btn-primary">Start Recording <ArrowRight size={16} style={{ marginLeft: 8 }} /></a>
                    <a href="#" className="btn btn-link">Download for MacOS</a>
                </div>

                <div className="browser-mockup">
                    <div className="mockup-header">
                        <div className="dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="address-bar">buzzscreen.com</div>
                    </div>
                    <div className="mockup-content">
                        <div className="dashboard-placeholder">
                            <div className="dash-welcome">
                                <h2>Welcome back, Tom</h2>
                                <button className="btn btn-accent-mock">New video</button>
                            </div>
                            <div className="dash-videos">
                                <div className="video-card"></div>
                                <div className="video-card"></div>
                                <div className="video-card"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
          .hero {
             padding-top: 80px; padding-bottom: 80px; text-align: center; overflow: hidden;
          }
          .hero .badge {
             display: inline-block; padding: 6px 16px; background: rgba(255, 87, 34, 0.1); color: var(--accent-orange);
             border-radius: 100px; font-size: 0.85rem; font-weight: 500; margin-bottom: 24px; border: 1px solid rgba(255, 87, 34, 0.2);
          }
          .hero h1 { font-size: 4.5rem; line-height: 1.1; margin-bottom: 24px; }
          .gradient-text {
              background: linear-gradient(90deg, #ff5722 0%, #ff9e80 50%, #d500f9 100%);
              -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          }
          .hero .subhead { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
          .cta-group { display: flex; justify-content: center; gap: 16px; margin-bottom: 80px; }

          .browser-mockup {
             background: var(--surface); border-radius: 16px 16px 0 0; border: 1px solid var(--border-color); border-bottom: none;
             max-width: 1000px; margin: 0 auto; box-shadow: 0 20px 60px rgba(0,0,0,0.5); overflow: hidden;
          }
          .mockup-header { background: #0f0f0f; padding: 12px 24px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid var(--border-color); }
          .dots { display: flex; gap: 6px; }
          .dots span { width: 10px; height: 10px; border-radius: 50%; background-color: #333; }
          .dots span:nth-child(1) { background: #ff5f57; }
          .dots span:nth-child(2) { background: #febc2e; }
          .dots span:nth-child(3) { background: #28c840; }
          .address-bar { background: #000; flex-grow: 1; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; color: #666; text-align: center; max-width: 400px; margin: 0 auto; }
          .mockup-content { background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%); min-height: 500px; padding: 40px; display: flex; justify-content: center; align-items: center; color: #333; }
          .dashboard-placeholder { width: 100%; max-width: 800px; background: rgba(255,255,255,0.7); border-radius: 8px; height: 400px; border: 1px dashed #ccc; padding: 40px; display: flex; flex-direction: column; gap: 24px; }
          .dash-welcome { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
          .dash-welcome h2 { font-size: 1.5rem; color: #333; }
          .btn-accent-mock { background: #333; color: white; padding: 8px 16px; border-radius: 6px; border: none; }
          .dash-videos { display: flex; gap: 24px; }
          .video-card { flex: 1; height: 120px; background: #e0e0e0; border-radius: 8px; }

          @media (max-width: 768px) {
              .hero h1 { font-size: 3rem; }
              .mockup-content { padding: 20px; min-height: 300px; }
              .dashboard-placeholder { height: 200px; padding: 20px; }
              .dash-videos { display: none; }
          }
        `}</style>
        </section>
    );
}
