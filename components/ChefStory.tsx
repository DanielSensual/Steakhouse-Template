'use client';

import { motion } from 'framer-motion';

export default function ChefStory() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Parallax background image */}
            <div className="absolute inset-0">
                <img
                    src="/chef-experience.png"
                    alt="Executive Chef at PRIME Steakhouse"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-[#0D0D0D]/60" />
                {/* Grain overlay */}
                <div className="absolute inset-0 noise-overlay opacity-30" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                            The Chef
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] mb-8 leading-[1.1]">
                            25 Years of Fire,<br />
                            <span className="text-gold-gradient">Steel & Obsession</span>
                        </h2>
                    </motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="border-l-2 border-[#D4AF37] pl-6 mb-10"
                    >
                        <p className="text-lg sm:text-xl text-[#FAF9F6]/80 leading-relaxed italic font-display">
                            &ldquo;A great steak doesn&apos;t need tricks. It needs respect — for the animal,
                            for the fire, and for the person sitting across the table. Every cut that leaves
                            my kitchen carries 25 years of learning when to leave it alone.&rdquo;
                        </p>
                        <footer className="mt-4">
                            <cite className="not-italic">
                                <span className="text-[#D4AF37] font-semibold">Chef Marcus Rivera</span>
                                <span className="text-[#FAF9F6]/40 text-sm ml-2">Executive Chef & Partner</span>
                            </cite>
                        </footer>
                    </motion.blockquote>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-[#FAF9F6]/60 leading-relaxed mb-12"
                    >
                        Trained in the kitchens of Peter Luger and Wolfgang&apos;s, Chef Rivera brought his
                        obsession with dry-aging and open-flame technique to Orlando in 2001. At PRIME,
                        every steak is hand-selected, aged in our custom-built dry-aging room, and cooked
                        over a 1,200°F infrared broiler — the same technique used by the greatest
                        steakhouses in the world.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                    >
                        {[
                            { value: '25', label: 'Years' },
                            { value: '3', label: 'James Beard Noms' },
                            { value: '12', label: 'Signature Dishes' },
                            { value: '1,200°', label: 'Broiler Temp' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center glass-card rounded-2xl p-4">
                                <span className="block text-3xl font-display text-[#D4AF37]">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/50 mt-1 block">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
