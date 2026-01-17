import { Check, Zap, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Button } from './ui/MovingBorder';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".pricing-header", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30, opacity: 0, duration: 0.8, ease: "power2.out"
        });
        
        gsap.from(".pricing-card", {
            scrollTrigger: {
                trigger: ".pricing-grid",
                start: "top 85%",
            },
            y: 50, opacity: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)",
            clearProps: "all"
        });
    }, { scope: container });

    const plans = [
        {
            name: "Hobby",
            price: "Free",
            period: "forever",
            description: "Perfect for quick demos and personal use.",
            features: ["720p Recording", "5 Minute Limit", "2GB Cloud Storage", "Basic Trim Editor", "Shareable Links"],
            cta: "Start for Free",
            highlight: false,
            badge: null
        },
        {
            name: "Pro Annual",
            price: "$9",
            period: "/month",
            billing: "Billed $108 yearly",
            description: "Maximum power, best value.",
            features: ["4K Recording", "Unlimited Time", "Unlimited Storage", "Advanced Editor & Zoom", "Custom Branding", "Priority Support"],
            cta: "Start Free Trial",
            highlight: true,
            badge: "BEST VALUE"
        },
        {
            name: "Pro Monthly",
            price: "$24",
            period: "/month",
            billing: "Billed monthly",
            description: "Pay month-to-month with flexibility.",
            features: ["4K Recording", "Unlimited Time", "Unlimited Storage", "Advanced Editor & Zoom", "Custom Branding", "Standard Support"],
            cta: "Subscribe Monthly",
            highlight: false,
            badge: null,
            isPro: true
        }
    ];

    return (
        <section className="py-32 relative z-10" id="pricing" ref={container}>
             <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header */}
                <div className="pricing-header text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-xl text-zinc-400">
                        Start for free, upgrade when you need to.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`pricing-card relative p-8 rounded-3xl border flex flex-col transition-all duration-300 bg-zinc-900/50 backdrop-blur-md ${
                                plan.highlight 
                                ? 'border-brand/50 shadow-[0_0_40px_rgba(249,119,46,0.15)] hover:shadow-[0_0_50px_rgba(249,119,46,0.2)]' 
                                : 'border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                                    <div className="bg-brand text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg tracking-wide flex items-center gap-1.5 animate-pulse">
                                        <Zap size={12} fill="currentColor" />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-3 ${plan.highlight || plan.isPro ? 'text-white' : 'text-zinc-300'}`}>{plan.name}</h3>
                                <p className="text-sm text-zinc-500 min-h-[40px] leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    {plan.period !== "forever" && <span className="text-zinc-500 font-medium">{plan.period}</span>}
                                </div>
                                {plan.billing && (
                                    <div className="flex flex-col gap-1">
                                        <p className={`text-xs font-medium ${plan.highlight ? 'text-brand' : 'text-zinc-500'}`}>
                                            {plan.billing}
                                        </p>
                                        {plan.isPro && (
                                            <p className="text-xs text-zinc-600">
                                                ($288 per year)
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 border-t border-white/5 pt-8 mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand' : 'text-zinc-600'}`} strokeWidth={3} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {plan.highlight ? (
                                <Button
                                    borderRadius="1rem"
                                    className="bg-brand text-white font-bold text-sm hover:bg-brand-hover transition-colors"
                                    containerClassName="w-full h-12"
                                    borderClassName="bg-[radial-gradient(white_40%,transparent_60%)]"
                                >
                                    {plan.cta}
                                </Button>
                            ) : (
                                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all">
                                    {plan.cta}
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-zinc-500">
                        All plans include a <span className="text-white font-semibold">14-day free trial</span>. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
