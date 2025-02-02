"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import weblineDesktop1 from "../../../../public/Assets/backgrounds/WaveLinesDesktop1.svg";
import weblineDesktop2 from "../../../../public/Assets/backgrounds/WaveLinesDesktop2.svg";
import weblineDesktop4 from "../../../../public/Assets/backgrounds/WaveLinesDesktop4.svg";
import weblineMobile1 from "../../../../public/Assets/backgrounds/WaveLinesMobile1.svg";
import weblineMobile2 from "../../../../public/Assets/backgrounds/WaveLinesMobile2.svg";
import ctalineMobileLine from "../../../../public/Assets/backgrounds/ctaMobileWaveLines.svg";

interface WaveLinesProps {
  colors?: WaveLineColors;
}

export interface WaveLineColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  bottomLine: string;
}

export interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  colors?: WaveLineColors;
  alignment?: "left" | "center";
}

export function WaveLines({}: WaveLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const lineVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    hover: (custom: number) => ({
      x: custom * 15,
      y: custom * 8,
      transition: { duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      animate={controls}
      initial="hidden"
      whileHover="hover"
    >
      {/* Desktop Lines */}
      <div className="hidden lg:block">
        {[
          {
            url: weblineDesktop1,
            delay: 0,
            opacity: 0.4,
          },
          {
            url: weblineDesktop4,
            delay: 0.1,
            opacity: 0.5,
          },
          {
            url: weblineDesktop2,
            delay: 0.2,
            opacity: 0.6,
          },
        ].map((line, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            variants={lineVariants}
            custom={index - 1}
            style={{
              opacity: line.opacity,
              mixBlendMode: "multiply",
            }}
          >
            <Image
              src={line.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Lines */}
      <div className="lg:hidden">
        {[
          {
            url: weblineMobile1,
            delay: 0,
            opacity: 0.4,
          },
          {
            url: weblineMobile2,
            delay: 0.1,
            opacity: 0.5,
          },
          {
            url: ctalineMobileLine,
            delay: 0.2,
            opacity: 0.6,
          },
        ].map((line, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            variants={lineVariants}
            custom={index - 1}
            style={{
              opacity: line.opacity,
              mixBlendMode: "multiply",
            }}
          >
            <Image
              src={line.url || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
