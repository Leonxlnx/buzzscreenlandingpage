import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "Do I need to install software?", a: "No, BuzzScreen works directly in your browser, but we also offer desktop apps for power users." },
        { q: "Is there a free plan?", a: "Yes, our personal plan is free forever with up to 10 videos per month." },
        { q: "Can I record my webcam?", a: "Absolutely. You can record your screen, your webcam, or both simultaneously." },
        { q: "What about video quality?", a: "We support recording up to 4K resolution at 60fps." }
    ];

    return (
        <section className="faq">
            <div className="container">
                <h2>Common questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .faq { padding: 80px 0; max-width: 800px; margin: 0 auto; }
                .faq-list { margin-top: 40px; }
                .faq-item { border-bottom: 1px solid var(--border-color); cursor: pointer; transition: background 0.2s; }
                .faq-item:hover { background: var(--surface); }
                .faq-question { display: flex; justify-content: space-between; padding: 20px; align-items: center; font-weight: 500; }
                .faq-answer { padding: 0 20px 20px; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; }
            `}</style>
        </section>
    );
}
