"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [targetNum, symbol] = parseValue(value);

  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    stiffness: 50,
    damping: 15,
    restSpeed: 0.5,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(targetNum);
    }
  }, [count, inView, targetNum]);

  useEffect(() => {
    rounded.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      <div className="text-blue-600 text-6xl md:text-7xl font-bold mb-2">
        {symbol === ">" ? ">" : ""}
        {displayValue}
        {symbol === "+" ? "+" : ""}
        {symbol === "m" ? "m" : ""}
      </div>
      <div className="text-slate-600 text-lg text-center">{label}</div>
    </motion.div>
  );
}

function parseValue(value: string): [number, string] {
  if (value.startsWith(">")) {
    return [Number.parseInt(value.slice(1)), ">"];
  } else if (value.endsWith("+")) {
    return [Number.parseInt(value.slice(0, -1)), "+"];
  } else if (value.endsWith("m")) {
    return [Number.parseInt(value.slice(0, -1)), "m"];
  }
  return [Number.parseInt(value), ""];
}

export default function AnimatedCounters() {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-blue-600 font-medium text-center mb-12"
        >
          TRUSTED BY THE BEST
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Counter value=">20" label="Years of Experience" />
          <Counter value="40+" label="Financial Institutions" />
          <Counter value=">200m" label="Customers Each" />
        </div>
      </div>
    </section>
  );
}
