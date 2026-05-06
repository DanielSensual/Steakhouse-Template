'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuCategories = [
    {
        category: 'Starters',
        items: [
            { name: 'Wagyu Beef Tartare', description: 'Hand-cut A5 wagyu, quail egg yolk, capers, dijon, crostini', price: '28' },
            { name: 'Oysters on the Half Shell', description: 'Half dozen East Coast — mignonette, cocktail, fresh lemon', price: '24' },
            { name: 'Burrata & Heirloom Tomato', description: 'Creamy burrata, aged balsamic reduction, basil oil, fleur de sel', price: '22' },
            { name: 'Jumbo Shrimp Cocktail', description: 'Five chilled colossal shrimp, house-made horseradish cocktail sauce', price: '26' },
            { name: 'French Onion Gratinée', description: 'Slow-caramelized onions, cognac broth, gruyère crouton', price: '18' },
        ],
    },
    {
        category: 'Prime Cuts',
        items: [
            { name: 'Filet Mignon', description: '10oz center-cut tenderloin, butter-basted, the most tender cut', price: '78' },
            { name: 'Bone-In Ribeye', description: '16oz USDA Prime, dry-aged 45 days, rich marbling', price: '89' },
            { name: 'New York Strip', description: '14oz USDA Prime, bold beefy flavor, perfect char', price: '72' },
            { name: 'Tomahawk Ribeye', description: '32oz bone-in showpiece, dry-aged 60 days, carved tableside', price: '165' },
            { name: 'Porterhouse for Two', description: '24oz — the best of both worlds: filet and strip, one bone', price: '145' },
            { name: 'Japanese A5 Wagyu', description: '6oz Kagoshima Prefecture, seared on binchotan charcoal', price: '195' },
            { name: 'The PRIME Burger', description: 'Dry-aged beef blend, aged cheddar, caramelized onions, brioche', price: '28' },
        ],
    },
    {
        category: 'From the Sea',
        items: [
            { name: 'Maine Lobster Tail', description: '12oz cold-water tail, butter-poached, drawn butter', price: '85' },
            { name: 'Chilean Sea Bass', description: 'Miso-glazed, crispy skin, ginger-scallion emulsion', price: '72' },
            { name: 'Pan-Seared Diver Scallops', description: 'Day-boat scallops, cauliflower purée, brown butter, capers', price: '58' },
            { name: 'Grilled Octopus', description: 'Spanish octopus, fingerling potatoes, chorizo vinaigrette, smoked paprika', price: '32' },
        ],
    },
    {
        category: 'Sides & Shareables',
        items: [
            { name: 'Truffle Mac & Cheese', description: 'Aged gruyère, fontina, black winter truffle shavings', price: '22' },
            { name: 'Creamed Spinach', description: 'Classic steakhouse preparation, fresh nutmeg', price: '16' },
            { name: 'Loaded Baked Potato', description: 'Crème fraîche, applewood bacon, chives, cheddar', price: '14' },
            { name: 'Roasted Bone Marrow', description: 'Split femur bones, gremolata, grilled sourdough', price: '24' },
            { name: 'Charred Broccolini', description: 'Lemon zest, chili flake, toasted almonds, garlic oil', price: '16' },
        ],
    },
    {
        category: 'Desserts',
        items: [
            { name: 'Chocolate Lava Cake', description: 'Warm Valrhona center, vanilla bean gelato, gold leaf', price: '18' },
            { name: 'Classic Crème Brûlée', description: 'Madagascar vanilla custard, caramelized sugar crust', price: '16' },
            { name: 'New York Cheesecake', description: 'Dense, creamy, with macerated strawberries and aged balsamic', price: '16' },
            { name: 'Espresso Tiramisu', description: 'Mascarpone cream, ladyfingers, cocoa dust, Kahlúa drizzle', price: '18' },
        ],
    },
];

const wineSelections = [
    { name: 'Opus One 2019', region: 'Napa Valley', glass: '85', bottle: '450' },
    { name: 'Caymus Special Selection', region: 'Napa Valley', glass: '42', bottle: '195' },
    { name: 'Silver Oak Alexander Valley', region: 'Sonoma', glass: '28', bottle: '120' },
    { name: 'Château Margaux 2015', region: 'Bordeaux', glass: '—', bottle: '650' },
];

const categoryIcons: Record<string, string> = {
    'Starters': '◈',
    'Prime Cuts': '🔥',
    'From the Sea': '◇',
    'Sides & Shareables': '◆',
    'Desserts': '✦',
};

export default function MenuShowcase() {
    const [activeCategory, setActiveCategory] = useState(0);

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

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {menuCategories.map((cat, idx) => (
                        <button
                            key={cat.category}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-5 py-2.5 rounded-full text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                                activeCategory === idx
                                    ? 'bg-[#D4AF37] text-[#0D0D0D]'
                                    : 'border border-[#D4AF37]/20 text-[#FAF9F6]/60 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                            }`}
                        >
                            <span className="mr-1.5">{categoryIcons[cat.category]}</span>
                            {cat.category}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-2xl font-display text-[#D4AF37] mb-8 pb-4 border-b border-[#D4AF37]/20 text-center">
                            {menuCategories[activeCategory].category}
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">
                            {menuCategories[activeCategory].items.map((item, itemIdx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: itemIdx * 0.06 }}
                                    className="group glass-card rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-[#FAF9F6] group-hover:text-[#D4AF37] transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-[#FAF9F6]/50 mt-2">
                                                {item.description}
                                            </p>
                                        </div>
                                        <span className="text-2xl font-display text-[#D4AF37] shrink-0">
                                            ${item.price}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Sommelier's Wine Selection */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <div className="glass-card rounded-3xl p-8 sm:p-10 border-[#722F37]/30">
                        <div className="text-center mb-8">
                            <span className="text-3xl mb-3 block">🍷</span>
                            <h3 className="font-display text-2xl sm:text-3xl text-[#D4AF37] mb-2">
                                Sommelier&apos;s Selection
                            </h3>
                            <p className="text-sm text-[#FAF9F6]/50">
                                Hand-picked by our sommelier from a cellar of 500+ selections
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {wineSelections.map((wine) => (
                                <div
                                    key={wine.name}
                                    className="flex items-center justify-between p-4 rounded-xl bg-[#0D0D0D]/50 border border-[#722F37]/20 hover:border-[#D4AF37]/30 transition-colors"
                                >
                                    <div>
                                        <p className="text-[#FAF9F6] font-medium">{wine.name}</p>
                                        <p className="text-xs text-[#FAF9F6]/40 mt-0.5">{wine.region}</p>
                                    </div>
                                    <div className="text-right">
                                        {wine.glass !== '—' && (
                                            <p className="text-sm text-[#D4AF37]">${wine.glass} <span className="text-[#FAF9F6]/30 text-xs">glass</span></p>
                                        )}
                                        <p className="text-sm text-[#D4AF37]">${wine.bottle} <span className="text-[#FAF9F6]/30 text-xs">bottle</span></p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-6 text-xs text-[#FAF9F6]/30 uppercase tracking-[0.2em]">
                            Full wine list available upon request · Ask about our reserve collection
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
