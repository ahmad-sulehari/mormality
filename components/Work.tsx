"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../content";

export default function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-4 block">
            Portfolio
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-6xl font-extrabold text-white">
            Our <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden card-dark bg-gradient-to-br ${p.bg} p-8 flex flex-col gap-4 group hover:border-[#FF2D78]/40 transition-colors duration-300`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B9D]">
                {p.category}
              </span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#FF2D78] opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                View case study <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
