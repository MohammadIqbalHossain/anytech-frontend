"use client";

import { motion } from "framer-motion";
import { WaveLines } from "../Home/wave-lines";

interface ISectionHeader {
  subtitle?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
}: ISectionHeader) {
  return (
    <div
      className="relative bg-blue-600 pt-32 pb-24 px-4 md:px-6 lg:px-8"
      style={{
        clipPath: "polygon(0 0%, 100% 0%, 100% 70%, 0% 100%)",
      }}
    >
      {/* Animated Background Lines */}
      <WaveLines />

      {/* Content */}
      <div className="relative max-w-5xl ">
        <span className="text-xl font-bold text-[#00DFE0]">{subtitle}</span>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-[7vw] font-extrabold text-white"
          >
            {title}
          </motion.h1>
          <motion.p className="text-lg text-white font-bold">
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
