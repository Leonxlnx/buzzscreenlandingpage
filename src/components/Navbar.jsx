import { Play, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 lg:px-0">
            <div 
                className={`pointer-events-auto flex justify-between items-center w-full transition-all duration-500 ease-in-out
                ${scrolled 
                    ? 'max-w-[800px] bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl py-2.5 rounded-full' 
                    : 'max-w-[1200px] bg-transparent border border-transparent py-4 rounded-xl'
                }`}
            >
                <div className={`flex items-center gap-2.5 font-bold text-lg tracking-tight text-white transition-all duration-300 ${!scrolled && 'pl-4'}`}>
                    <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center ring-1 ring-white/10">
                        <Play className="ml-0.5" size={16} fill="#F9772E" stroke="none" />
                    </div>
                    <span>BuzzScreen</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Features', 'Testimonials', 'Pricing'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className={`flex items-center gap-3 transition-all duration-300 ${!scrolled && 'pr-4'}`}>
                    <a href="#" className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black text-sm font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                        Start Recording
                    </a>
                    
                    <button 
                        className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`
                absolute top-full mt-4 left-4 right-4 p-6 bg-[#121212] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex-col items-center gap-5 pointer-events-auto transition-all duration-300 origin-top
                ${mobileOpen ? 'flex opacity-100 scale-100 translate-y-0' : 'hidden opacity-0 scale-95 -translate-y-4'}
            `}>
                {['Features', 'Testimonials', 'Pricing'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        className="text-zinc-400 hover:text-white font-medium text-lg w-full text-center py-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        {item}
                    </a>
                ))}
                <a href="#" className="w-full text-center py-3 rounded-xl bg-white text-black font-semibold transition-colors">
                    Start Recording
                </a>
            </div>
        </header>
    );
}
