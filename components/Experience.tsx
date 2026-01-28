'use client';

import { motion } from 'framer-motion';

const features = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
        ),
        title: 'Open Flame',
        description: 'Every steak is kissed by our 1200°F infrared broiler for the perfect crust.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Dry-Aged 45 Days',
        description: 'Our aging room concentrates flavor for unparalleled depth and tenderness.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
        ),
        title: 'Curated Wines',
        description: '500+ selections from world-renowned vineyards, hand-picked by our sommelier.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 sm:py-32 bg-[#1A1A1A]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#722F37]/20 border border-[#D4AF37]/20">
                            {/* Placeholder for chef/kitchen image */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-[#D4AF37]/40 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-[#D4AF37]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-[#FAF9F6]/40 text-sm">Chef & Kitchen Image</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating accent */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                            <div className="text-center">
                                <span className="block text-3xl font-display text-[#D4AF37]">25</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60">Years</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                            The Experience
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl text-[#FAF9F6] mb-6">
                            Where Tradition<br />Meets Innovation
                        </h2>
                        <p className="text-[#FAF9F6]/60 text-lg mb-10 leading-relaxed">
                            At PRIME, we honor the classic steakhouse tradition while embracing
                            modern techniques. Our chefs bring decades of experience to every plate,
                            ensuring each meal is an unforgettable journey.
                        </p>

                        {/* Features */}
                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex gap-5"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#FAF9F6] mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-[#FAF9F6]/50">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
