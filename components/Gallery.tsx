'use client';

import { motion } from 'framer-motion';

const galleryImages = [
    { id: 1, alt: 'Signature Ribeye', span: 'col-span-2 row-span-2', src: '/gallery-1.png' },
    { id: 2, alt: 'Wine Cellar', span: 'col-span-1 row-span-1', src: '/gallery-2.png' },
    { id: 3, alt: 'Intimate Dining Room', span: 'col-span-1 row-span-1', src: '/gallery-3.png' },
    { id: 4, alt: 'Craft Cocktails', span: 'col-span-1 row-span-1', src: '/gallery-4.png' },
    { id: 5, alt: 'Private Dining', span: 'col-span-1 row-span-1', src: '/hero-poster.png' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="relative py-24 sm:py-32 bg-[#0D0D0D]">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#722F37]/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                        Gallery
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] mb-6">
                        A Feast for the Senses
                    </h2>
                    <p className="text-[#FAF9F6]/60 max-w-xl mx-auto">
                        From the sizzle of the grill to the ambiance of our dining rooms,
                        every detail is crafted to delight.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`${image.span} relative group rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-sm text-[#FAF9F6] font-medium">
                                    {image.alt}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Instagram CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#E8C857] transition-colors group"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Follow @primesteakhouse
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
