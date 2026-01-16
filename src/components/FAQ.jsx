import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "Do I need to download any software?", a: "No. Everything works from your browser." },
        { q: "Do early users get any benefits?", a: "Yes. Early access users will receive a lifetime discount on buzzscreen plans as a thank-you for helping shape the product." },
        { q: "Can I share videos without downloading anything?", a: "Yes, you get an instant link when you finish recording." },
        { q: "What video quality is supported?", a: "High quality recording, MP4 export." },
        { q: "Can I edit my videos?", a: "Yes, with our web editor: trimming, text, zooms, transitions and more." },
        { q: "Can I continue editing another day?", a: "Yes, projects are saved in the cloud." }
    ];

    return (
        <section className="faq">
            <div className="container faq-container">
                <div className="section-header">
                    <h2>FAQ</h2>
                    <p className="section-sub">Frequently Asked Questions</p>
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
                
                .faq .section-header h2 {
                    font-size: 2.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
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
