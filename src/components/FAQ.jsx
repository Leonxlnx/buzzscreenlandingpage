import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".section-header", { y: 20, opacity: 0, duration: 0.6 })
            .from(".faq-item", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.2");

    }, { scope: container });

    const faqs = [
        { q: "Do I need to download any software?", a: "No. Everything works from your browser." },
        { q: "Do early users get any benefits?", a: "Yes. Early access users will receive a lifetime discount on buzzscreen plans as a thank-you for helping shape the product." },
        { q: "Can I share videos without downloading anything?", a: "Yes, you get an instant link when you finish recording." },
        { q: "What video quality is supported?", a: "High quality recording, MP4 export." },
        { q: "Can I edit my videos?", a: "Yes, with our web editor: trimming, text, zooms, transitions and more." },
        { q: "Can I continue editing another day?", a: "Yes, projects are saved in the cloud." }
    ];

    return (
        <section className="faq" ref={container}>
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
                    background: transparent;
                }
                
                .faq-container {
                    max-width: 800px;
                }
                
                .faq .section-header h2 {
                    font-size: 2.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: white;
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
                    /* Stronger Glass */
                    background: rgba(10, 10, 10, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                }
                
                .faq-item:hover {
                    border-color: rgba(255,255,255,0.1);
                    background: rgba(30,30,30,0.5);
                }
                
                .faq-item.active {
                    border-color: var(--accent-orange);
                    background: linear-gradient(135deg, rgba(255,87,34,0.1) 0%, rgba(20,20,20,0.6) 100%);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                }
                
                .faq-question { 
                    display: flex; 
                    justify-content: space-between; 
                    padding: 24px 28px; 
                    align-items: center; 
                    font-weight: 600; 
                    font-size: 1.1rem;
                    color: white;
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
                    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
