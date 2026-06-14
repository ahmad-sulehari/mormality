"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";
import { contact as contactContent } from "../content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF2D78]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-4 block">
              Get In Touch
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {contactContent.heading} <span className="gradient-text">{contactContent.headingAccent}</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              {contactContent.subheading}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${contactContent.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <Mail size={18} className="text-[#FF2D78]" />
                {contactContent.email}
              </a>
              <a
                href={`https://wa.me/${contactContent.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle size={18} className="text-[#FF2D78]" />
                {contactContent.whatsappLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {sent ? (
              <div className="card-dark rounded-3xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                  <Send size={24} className="text-white" />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/50">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-dark rounded-3xl p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF2D78]/50 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF2D78]/50 transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                    Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF2D78]/50 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="" className="bg-[#0f0f0f]">Select a service…</option>
                    {contactContent.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0f0f0f]">{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#FF2D78]/50 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>

                <button
                  type="submit"
                  className="gradient-bg text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 cursor-pointer mt-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
