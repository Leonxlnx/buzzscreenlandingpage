import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export default function Testimonials() {
  return (
    <section className="h-[40rem] rounded-md flex flex-col antialiased bg-[#0E0E0F] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 mb-12 text-center relative z-10 max-w-7xl">
            <span className="section-label inline-block text-xs font-bold uppercase tracking-widest text-brand mb-4">Community</span>
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                Trusted by creators worldwide
            </h2>
            <p className="section-sub text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who are already creating better videos with BuzzScreen.
            </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "BuzzScreen has completely transformed how I handle bug reports. Instead of writing long emails, I just record a 30s clip.",
    name: "Alex Rivera",
    title: "QA Lead at TechFlow",
  },
  {
    quote:
      "The zooming feature is a game changer. I can point exactly to what I'm talking about without editing for hours.",
    name: "Sarah Chen",
    title: "Product Designer",
  },
  {
    quote: "Finally, a screen recorder that doesn't feel like it's from 2010. The UI is gorgeous and the sharing is instant.",
    name: "Marcus Johnson",
    title: "Freelance Developer",
  },
  {
    quote:
      "I use it for all my client updates. They love the clarity, and I love how fast it is to produce.",
    name: "Emily Davis",
    title: "Marketing Consultant",
  },
  {
    quote:
      "Best Chrome extension I've installed this year. The 'Edit in Browser' feature saves me so much time.",
    name: "David Kim",
    title: "Founder, StartupX",
  },
];

