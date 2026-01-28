'use client';

import { motion } from 'framer-motion';

export default function Reservation() {
    return (
        <section id="reserve" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#722F37]/30 via-[#1A1A1A] to-[#0D0D0D]" />

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
                <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-[#722F37]/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4">
                            Reservations
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] mb-6">
                            Reserve Your<br />
                            <span className="text-gold-gradient">Experience</span>
                        </h2>
                        <p className="text-[#FAF9F6]/60 text-lg mb-8 leading-relaxed">
                            Join us for an evening of exceptional cuisine and impeccable service.
                            For parties of 8 or more, please call us directly for personalized arrangements.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-[#FAF9F6]">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-[#FAF9F6]">Mon–Sun: 5:00 PM – 11:00 PM</span>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-6">
                            <div className="text-center">
                                <span className="block text-2xl font-display text-[#D4AF37]">4.9</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/50">Rating</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-display text-[#D4AF37]">500+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/50">Wines</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-2xl font-display text-[#D4AF37]">25</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FAF9F6]/50">Years</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="glass-card rounded-3xl p-8 sm:p-10">
                            <h3 className="text-xl font-display text-[#FAF9F6] mb-6">
                                Book a Table
                            </h3>

                            <div className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] placeholder-[#FAF9F6]/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] placeholder-[#FAF9F6]/30 focus:border-[#D4AF37] focus:outline-none transition-colors"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                            Time
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none">
                                            <option value="">Select time</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="17:30">5:30 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="18:30">6:30 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="19:30">7:30 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="20:30">8:30 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                        Party Size
                                    </label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none">
                                        <option value="">Select party size</option>
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5">5 Guests</option>
                                        <option value="6">6 Guests</option>
                                        <option value="7">7 Guests</option>
                                        <option value="8">8+ Guests (Call us)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/60 mb-2">
                                        Special Requests
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D]/50 border border-[#D4AF37]/20 text-[#FAF9F6] placeholder-[#FAF9F6]/30 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                                        placeholder="Allergies, celebrations, seating preferences..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-full bg-[#D4AF37] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#E8C857] transition-all duration-300 btn-glow"
                                >
                                    Request Reservation
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
