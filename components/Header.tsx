'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reserve', href: '#reserve' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                scrolled
                    ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#D4AF37]/20'
                    : 'bg-transparent'
            )}
        >
            <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                        <span className="text-[#D4AF37] font-bold text-lg">P</span>
                    </div>
                    <span className="font-display text-2xl tracking-wide text-[#FAF9F6]">
                        PRIME
                    </span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm uppercase tracking-[0.2em] text-[#FAF9F6]/80 hover:text-[#D4AF37] transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="#reserve"
                    className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 btn-glow"
                >
                    Reserve Table
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span
                        className={clsx(
                            'w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300',
                            mobileOpen && 'rotate-45 translate-y-2'
                        )}
                    />
                    <span
                        className={clsx(
                            'w-6 h-0.5 bg-[#D4AF37] transition-opacity duration-300',
                            mobileOpen && 'opacity-0'
                        )}
                    />
                    <span
                        className={clsx(
                            'w-6 h-0.5 bg-[#D4AF37] transition-transform duration-300',
                            mobileOpen && '-rotate-45 -translate-y-2'
                        )}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0D0D0D]/98 backdrop-blur-lg border-t border-[#D4AF37]/20"
                    >
                        <ul className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-lg uppercase tracking-[0.2em] text-[#FAF9F6]/80 hover:text-[#D4AF37] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#reserve"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] font-semibold"
                                >
                                    Reserve Table
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
