"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users } from "lucide-react";
import { about } from "../content";

const iconMap = { Zap, Target, Users };

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FF2D78]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B9D] mb-4 block">
              About Us
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {about.heading}{" "}
              <span className="gradient-text">{about.headingAccent}</span>
            </h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`text-white/50 leading-relaxed${i < about.paragraphs.length - 1 ? " mb-6" : ""}`}>
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {about.values.map((v, i) => {
              const Icon = iconMap[v.iconName];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-dark rounded-2xl p-6 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-white font-bold mb-1">
                      {v.title}
                    </h4>
                    <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
