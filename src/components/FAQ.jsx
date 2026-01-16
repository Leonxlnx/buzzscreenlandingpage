import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "Do I need to install software?", a: "No, BuzzScreen works directly in your browser. We also offer desktop apps for Mac and Windows if you prefer a native experience." },
        { q: "Is there a free plan?", a: "Yes, our personal plan is free forever with up to 10 videos per month. No credit card required." },
        { q: "Can I record my webcam?", a: "Absolutely. You can record your screen, your webcam, or both simultaneously with picture-in-picture." },
        { q: "What about video quality?", a: "We support recording up to 4K resolution at 60fps. Your videos will look crisp and professional." },
        { q: "How do I share my recordings?", a: "After recording, you get an instant link you can share with anyone. No file uploads or downloads needed." }
    ];

    return (
        <section className="faq">
            <div className="container faq-container">
                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2>Common questions</h2>
                    <p className="section-sub">Everything you need to know about BuzzScreen.</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item soft-card ${openIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                <div className="faq-icon">
                                    {openIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                                </div>
                            </div>
                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .faq { 
                    padding: 120px 0;
                    background: #0d0d0d;
                }
                
                .faq-container {
                    max-width: 800px;
                }
                
                .faq .section-label {
                    display: inline-block;
                    font-size: 0.85rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--accent-orange);
                    margin-bottom: 16px;
                }
                
                .faq .section-header h2 {
                    font-size: 2.8rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                
                .faq .section-sub {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                }
                
                .faq-list { 
                    margin-top: 60px; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 16px; 
                }
                
                .faq-item { 
                    padding: 0; 
                    cursor: pointer;
                    transition: all 0.3s ease;
                    overflow: hidden;
                }
                
                .faq-item:hover {
                    border-color: rgba(255,255,255,0.1);
                }
                
                .faq-item.active {
                    border-color: var(--accent-orange);
                    background: linear-gradient(135deg, rgba(255,87,34,0.05) 0%, transparent 100%);
                }
                
                .faq-question { 
                    display: flex; 
                    justify-content: space-between; 
                    padding: 24px 28px; 
                    align-items: center; 
                    font-weight: 600; 
                    font-size: 1.1rem;
                }
                
                .faq-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: rgba(255,255,255,0.05);
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                }
                
                .faq-item.active .faq-icon {
                    background: var(--accent-orange);
                    color: white;
                }
                
                .faq-answer { 
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                }
                
                .faq-answer.open {
                    max-height: 200px;
                }
                
                .faq-answer p {
                    padding: 0 28px 24px;
                    color: var(--text-secondary); 
                    font-size: 1rem; 
                    line-height: 1.7;
                }
                
                @media (max-width: 768px) {
                    .faq .section-header h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
