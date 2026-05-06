'use client';

import { motion } from 'framer-motion';

const rooms = [
    {
        name: 'The Cellar Room',
        capacity: '12 Guests',
        description: 'Intimate wine-surrounded dining with a curated tasting menu experience.',
        icon: '🍷',
    },
    {
        name: 'The Board Room',
        capacity: '20 Guests',
        description: 'Polished private dining with AV setup, ideal for corporate events and celebrations.',
        icon: '◈',
    },
    {
        name: 'Full Restaurant Buyout',
        capacity: '120 Guests',
        description: 'Exclusive use of the entire venue with custom menus, open bar, and dedicated staff.',
        icon: '✦',
    },
];

export default function PrivateEvents() {
    return (
        <section id="private-events" className="relative py-24 sm:py-32 bg-[#0D0D0D]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4AF37]/20">
                            <img
                                src="/wine-cellar.png"
                                alt="PRIME Steakhouse wine cellar and private dining"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 border-[#722F37]/30">
                            <div className="text-center">
                                <span className="block text-2xl font-display text-[#D4AF37]">500+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/60">Wine Labels</span>
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
                            Private Events
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl text-[#FAF9F6] mb-6">
                            Your Event,<br />
                            <span className="text-gold-gradient">Our Stage</span>
                        </h2>
                        <p className="text-[#FAF9F6]/60 text-lg mb-10 leading-relaxed">
                            From intimate wine dinners to full restaurant buyouts, PRIME offers
                            private dining experiences as exceptional as our cuisine. Our events
                            team handles every detail so you can focus on what matters.
                        </p>

                        {/* Room Cards */}
                        <div className="space-y-4">
                            {rooms.map((room, idx) => (
                                <motion.div
                                    key={room.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="glass-card rounded-2xl p-5 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-xl shrink-0">
                                            {room.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="text-lg font-semibold text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors">
                                                    {room.name}
                                                </h3>
                                                <span className="text-xs text-[#D4AF37] uppercase tracking-[0.15em] font-medium">
                                                    {room.capacity}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#FAF9F6]/50">{room.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-8"
                        >
                            <a
                                href="#reserve"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#E8C857] transition-all duration-300 btn-glow"
                            >
                                Inquire About Private Events
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
