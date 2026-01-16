import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Background() {
    const container = useRef(null);
    const blob1 = useRef(null);
    const blob2 = useRef(null);
    const blob3 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Blob 1 - Top Left Orange -> Bottom Right
            gsap.to(blob1.current, {
                x: '80vw',
                y: '40vh',
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Blob 2 - Bottom Right Red -> Top Left
            gsap.to(blob2.current, {
                x: '-60vw',
                y: '-40vh',
                duration: 25,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2
            });

            // Blob 3 - Center Pulse
            gsap.to(blob3.current, {
                scale: 1.5,
                opacity: 0.15,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="fixed-background">
            <div ref={blob1} className="blob blob-1"></div>
            <div ref={blob2} className="blob blob-2"></div>
            <div ref={blob3} className="blob blob-3"></div>
            <div className="noise-overlay"></div>
            <style>{`
                .fixed-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    z-index: -1; /* Behind everything */
                    background: #050505; /* Deepest black */
                }

                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.08; /* Much subtler */
                }

                .blob-1 {
                    top: -10%;
                    left: -10%;
                    width: 60vw;
                    height: 60vw;
                    background: radial-gradient(circle, #ff5722 0%, transparent 60%);
                }

                .blob-2 {
                    bottom: -10%;
                    right: -10%;
                    width: 70vw;
                    height: 70vw;
                    background: radial-gradient(circle, #b71c1c 0%, transparent 60%);
                }

                .blob-3 {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 50vw;
                    height: 50vw;
                    /* Darker, less orange, more ambient */
                    background: radial-gradient(circle, #4a140a 0%, transparent 70%);
                    opacity: 0.05;
                }

                .noise-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.03;
                    pointer-events: none;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                }
            `}</style>
        </div>
    );
}
