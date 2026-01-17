import { useEffect, useRef } from 'react';

export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] bg-[#0E0E0F] pointer-events-none">
             {/* Radial gradient to give a spotlight effect at the top */}
            <div className="absolute top-0 left-0 right-0 h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-[#0E0E0F] to-[#0E0E0F] opacity-70"></div>
        </div>
    );
}
