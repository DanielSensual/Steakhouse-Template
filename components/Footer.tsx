'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative bg-[#0D0D0D] border-t border-[#D4AF37]/10">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                                <span className="text-[#D4AF37] font-bold text-xl">P</span>
                            </div>
                            <span className="font-display text-2xl text-[#FAF9F6]">
                                PRIME
                            </span>
                        </a>
                        <p className="text-sm text-[#FAF9F6]/50 leading-relaxed mb-6">
                            Where the art of the steak meets modern elegance. Fine dining redefined.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {['instagram', 'facebook', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/20 flex items-center justify-center text-[#FAF9F6]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        {social === 'instagram' && (
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        )}
                                        {social === 'facebook' && (
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        )}
                                        {social === 'twitter' && (
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Location Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
                            Location
                        </h4>
                        <address className="not-italic text-sm text-[#FAF9F6]/60 leading-relaxed">
                            123 Gourmet Avenue<br />
                            Downtown District<br />
                            New York, NY 10001
                        </address>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 mt-4 text-sm text-[#D4AF37] hover:text-[#E8C857] transition-colors"
                        >
                            Get Directions
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Hours Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
                            Hours
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between text-[#FAF9F6]/60">
                                <span>Monday – Thursday</span>
                                <span className="text-[#FAF9F6]">5 PM – 10 PM</span>
                            </li>
                            <li className="flex justify-between text-[#FAF9F6]/60">
                                <span>Friday – Saturday</span>
                                <span className="text-[#FAF9F6]">5 PM – 11 PM</span>
                            </li>
                            <li className="flex justify-between text-[#FAF9F6]/60">
                                <span>Sunday</span>
                                <span className="text-[#FAF9F6]">4 PM – 9 PM</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="tel:+15551234567" className="text-[#FAF9F6]/60 hover:text-[#D4AF37] transition-colors">
                                    (555) 123-4567
                                </a>
                            </li>
                            <li>
                                <a href="mailto:reservations@primesteakhouse.com" className="text-[#FAF9F6]/60 hover:text-[#D4AF37] transition-colors">
                                    reservations@primesteakhouse.com
                                </a>
                            </li>
                        </ul>
                        <a
                            href="#reserve"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
                        >
                            Reserve Now
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#D4AF37]/10">
                <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[#FAF9F6]/40">
                        © {new Date().getFullYear()} PRIME Steakhouse. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-[#FAF9F6]/40">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
