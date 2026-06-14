"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-4 block">
            Client Love
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-6xl font-extrabold text-white">
            Happy <span className="gradient-text">Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-dark rounded-3xl p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[#FF2D78] text-[#FF2D78]" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto">
                <p style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-white font-semibold">
                  {t.name}
                </p>
                <p className="text-white/35 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
