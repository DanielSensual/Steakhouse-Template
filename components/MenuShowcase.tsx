'use client';

import { motion } from 'framer-motion';

const menuItems = [
    {
        category: 'Prime Cuts',
        items: [
            {
                name: 'Ribeye',
                description: '16oz USDA Prime, dry-aged 45 days, bone-in',
                price: '89',
            },
            {
                name: 'Filet Mignon',
                description: '10oz center-cut tenderloin, butter-basted',
                price: '78',
            },
            {
                name: 'Porterhouse',
                description: '24oz prime cut for two, with both filet and strip',
                price: '145',
            },
            {
                name: 'Wagyu A5',
                description: 'Japanese A5 grade, 6oz, Kagoshima Prefecture',
                price: '195',
            },
        ],
    },
    {
        category: 'From the Sea',
        items: [
            {
                name: 'Maine Lobster Tail',
                description: 'Butter-poached, 12oz tail, drawn butter',
                price: '85',
            },
            {
                name: 'Chilean Sea Bass',
                description: 'Miso-glazed, crispy skin, ginger emulsion',
                price: '72',
            },
        ],
    },
    {
        category: 'Sides',
        items: [
            {
                name: 'Truffle Mac & Cheese',
                description: 'Aged gruyère, black truffle shavings',
                price: '22',
            },
            {
                name: 'Creamed Spinach',
                description: 'Classic preparation, nutmeg',
                price: '16',
            },
            {
                name: 'Baked Potato',
                description: 'Loaded with crème fraîche, chives, bacon',
                price: '14',
            },
        ],
    },
];

export default function MenuShowcase() {
    return (
        <section id="menu" className="relative py-24 sm:py-32 bg-[#0D0D0D]">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-48 top-1/4 w-96 h-96 rounded-full bg-[#722F37]/10 blur-3xl" />
                <div className="absolute -right-48 bottom-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                        Our Menu
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] mb-6">
                        Crafted for Connoisseurs
                    </h2>
                    <p className="text-[#FAF9F6]/60 max-w-xl mx-auto">
                        Every cut is hand-selected and aged to perfection. Our menu celebrates
                        the timeless art of the steakhouse.
                    </p>
                </motion.div>

                {/* Menu Categories */}
                <div className="space-y-16">
                    {menuItems.map((category, catIdx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: catIdx * 0.1 }}
                        >
                            <h3 className="text-2xl font-display text-[#D4AF37] mb-8 pb-4 border-b border-[#D4AF37]/20">
                                {category.category}
                            </h3>

                            <div className="grid gap-6 md:grid-cols-2">
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                                        className="group glass-card rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors">
                                                    {item.name}
                                                </h4>
                                                <p className="text-sm text-[#FAF9F6]/50 mt-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <span className="text-2xl font-display text-[#D4AF37]">
                                                ${item.price}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Full Menu Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#E8C857] transition-colors group"
                    >
                        View Full Menu
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
