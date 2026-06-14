"use client";

import { motion } from "framer-motion";
import { Globe, BarChart2, Share2, CheckCircle } from "lucide-react";
import { services } from "../content";

const iconMap = { Globe, BarChart2, Share2 };

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-4 block">
            What We Do
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-6xl font-extrabold text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-dark rounded-3xl p-8 flex flex-col gap-6 hover:border-[#FF2D78]/40 transition-colors duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <Icon size={26} className="text-white" />
                </div>

                <div>
                  <p className="text-[#FF6B9D] text-xs font-semibold uppercase tracking-wider mb-2">{s.tagline}</p>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl font-bold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
                </div>

                <ul className="flex flex-col gap-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle size={15} className="text-[#FF2D78] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-2 text-sm font-semibold text-[#FF2D78] flex items-center gap-1 group-hover:gap-2 transition-all duration-200 cursor-pointer"
                >
                  Learn more →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
