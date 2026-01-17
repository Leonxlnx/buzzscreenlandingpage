import { Monitor, Briefcase, Building2, Code2, Cpu, Globe } from 'lucide-react';

export default function Logos() {
    const companies = [
        { name: "Acme Corp", icon: <Building2 /> },
        { name: "GlobalTech", icon: <Globe /> },
        { name: "DevSolutions", icon: <Code2 /> },
        { name: "FutureSystems", icon: <Cpu /> },
        { name: "WorkSpace", icon: <Briefcase /> },
        { name: "MonitorIO", icon: <Monitor /> },
    ];

    return (
        <section className="py-10 border-y border-white/5 bg-[#0E0E0F]/50 backdrop-blur-sm relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by teams at</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center gap-2 group cursor-default">
                            <div className="text-white group-hover:text-brand transition-colors">
                                {company.icon}
                            </div>
                            <span className="text-lg font-bold text-zinc-300 group-hover:text-white transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

