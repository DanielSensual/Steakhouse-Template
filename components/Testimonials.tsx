'use client';

import { motion } from 'framer-motion';

const reviews = [
    {
        quote: 'The Tomahawk was the best steak I\'ve ever had — and I\'ve eaten at Peter Luger, Keen\'s, and every steakhouse in Manhattan. PRIME is world-class.',
        name: 'Michael Vasquez',
        title: 'Orlando Magazine Food Critic',
        stars: 5,
    },
    {
        quote: 'We hosted our 20th anniversary dinner in the Cellar Room. Chef Rivera came out personally to walk us through the tasting menu. Absolutely unforgettable.',
        name: 'Sarah & James Chen',
        title: 'Private Event — Anniversary',
        stars: 5,
    },
    {
        quote: 'Isabella, the AI ordering system, is genuinely impressive. I called to place a takeout order and she handled everything — allergies, modifications, timing. The future.',
        name: 'David Thornton',
        title: 'Tech Founder & Regular',
        stars: 5,
    },
];

const pressLogos = [
    'Orlando Weekly',
    'Eater Orlando',
    'Food & Wine',
    'Orlando Sentinel',
    'Forbes Travel',
];

export default function Testimonials() {
    return (
        <section className="relative py-24 sm:py-32 bg-[#1A1A1A]">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                        What They Say
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] mb-6">
                        The Verdict
                    </h2>
                </motion.div>

                {/* Review Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[#FAF9F6]/80 text-sm leading-relaxed flex-1 mb-6">
                                &ldquo;{review.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="border-t border-[#D4AF37]/10 pt-4">
                                <p className="text-[#FAF9F6] font-semibold text-sm">{review.name}</p>
                                <p className="text-[#FAF9F6]/40 text-xs mt-0.5">{review.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Press Mentions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#FAF9F6]/30 mb-6">
                        As Featured In
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        {pressLogos.map((name) => (
                            <span
                                key={name}
                                className="font-display text-lg sm:text-xl text-[#FAF9F6]/20 hover:text-[#D4AF37]/60 transition-colors duration-300"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
