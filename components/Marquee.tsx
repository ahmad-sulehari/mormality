"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "../content";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-white/5 py-5 bg-[#0d0d0d]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-semibold text-white/30 flex items-center gap-4">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D78] inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
