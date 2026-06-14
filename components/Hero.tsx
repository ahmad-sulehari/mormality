"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "../content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FF2D78]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E91E8C]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-6 border border-[#FF2D78]/30 px-4 py-1.5 rounded-full">
            {hero.badge}
          </span>

          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6">
            {hero.headline}
            <br />
            <span className="gradient-text">{hero.headlineAccent}</span>
            <br />
            <span className="text-white">{hero.headlineSuffix}</span>
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {hero.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="gradient-bg text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity duration-200 cursor-pointer glow-pink"
            >
              {hero.ctaPrimary} <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              className="text-white font-semibold px-8 py-4 rounded-full border border-white/15 hover:border-white/30 transition-colors duration-200 cursor-pointer"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap gap-6"
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="card-dark rounded-2xl px-8 py-5">
              <p style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl font-bold gradient-text">
                {s.value}
              </p>
              <p className="text-white/40 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
