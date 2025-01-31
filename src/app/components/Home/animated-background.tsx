"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const translateX = useTransform(springX, [0, 1000], [10, -10]);
  const translateY = useTransform(springY, [0, 1000], [5, -5]);

  const stripes = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        rotate: 35 + i * 2,
        opacity: 0.1 - i * 0.01,
        delay: i * 0.1,
      })),
    []
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >
      {stripes.map((stripe, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: stripe.opacity,
            scale: 1,
          }}
          style={{
            x: translateX,
            y: translateY,
            rotate: stripe.rotate,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            pointerEvents: "none",
          }}
          transition={{
            duration: 0.8,
            delay: stripe.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
