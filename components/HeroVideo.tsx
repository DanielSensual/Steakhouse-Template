'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt autoplay on mount
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay blocked - video will show poster
            });
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/hero-poster.png"
                    className="h-full w-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 video-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <div className="text-center max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6"
                    >
                        Fine Dining Experience
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] leading-[1.1] mb-8"
                    >
                        The Art of{' '}
                        <span className="text-gold-gradient">Prime</span>
                        <br />
                        Cuts
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg sm:text-xl text-[#FAF9F6]/70 max-w-2xl mx-auto mb-10"
                    >
                        Exceptional steaks, curated wines, and an atmosphere crafted for those who appreciate the finer things.
                    </motion.p>

                    {/* AI Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex justify-center mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em]">
                            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                            AI-Powered Ordering — Call or Text
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="tel:+13210000000"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#E8C857] transition-all duration-300 btn-glow"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call to Order
                        </a>
                        <a
                            href="#reserve"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                        >
                            Reserve Table
                        </a>
                        <a
                            href="#menu"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#FAF9F6]/30 text-[#FAF9F6] text-sm uppercase tracking-[0.2em] font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                        >
                            View Menu
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#FAF9F6]/50">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="w-5 h-8 rounded-full border border-[#FAF9F6]/30 flex items-start justify-center p-1"
                    >
                        <div className="w-1 h-2 rounded-full bg-[#D4AF37]" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
