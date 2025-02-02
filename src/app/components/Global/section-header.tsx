"use client";

import { motion } from "framer-motion";

import { SectionHeaderProps, WaveLines } from "../Home/wave-lines";

const defaultColors = {
  primary: "#00DFE0",
  secondary: "#1F80F0",
  accent: "#0059BF",
  background: "#1F80F0",
  bottomLine: "#00DFE0",
};

export default function SectionHeader({
  subtitle,
  title,
  description,
  colors = defaultColors,
  alignment = "left",
}: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 95px), 0 100%)",
        background: `linear-gradient(to bottom right, ${colors.background}, ${colors.accent})`,
      }}
    >
      {/* Main Content Section */}
      <div
        className="relative bg-gradient-to-br pt-24 pb-32 px-4 md:px-6 lg:px-8 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${colors.background}, ${colors.accent})`,
        }}
      >
        {/* Clip path for the main content */}
        <div className="absolute inset-0" />

        {/* Background Lines */}
        <WaveLines colors={colors} />

        {/* Content */}
        <motion.div
          className={`relative max-w-7xl mx-auto ${
            alignment === "center" ? "text-center" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle && (
            <motion.span
              variants={itemVariants}
              className="inline-block text-base md:text-lg uppercase tracking-wider font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-white leading-[1.1] mb-8"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed"
              style={{
                marginLeft: alignment === "center" ? "auto" : "0",
                marginRight: alignment === "center" ? "auto" : "0",
              }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Bottom Line */}
        <div
          className="absolute bottom-0 left-0 w-full h-8"
          style={{
            background: `linear-gradient(to bottom right, ${colors.bottomLine}, ${colors.accent})`,
            transform: "rotate(-4deg) scale(1.05)",
            transformOrigin: "bottom left",
          }}
        />
      </div>

      {/* Bottom-Left Glow Effect */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom left, ${colors.bottomLine}4D 0%, transparent 70%)`,
          transform: "translate(-25%, 25%)",
        }}
      />
    </div>
  );
}
