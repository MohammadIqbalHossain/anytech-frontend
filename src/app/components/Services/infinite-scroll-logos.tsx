"use client";

import { CLIENT_LOGO_DATA } from "@/libs/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function LogoScroll() {
  const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate the logos array to create a seamless loop
    setDuplicatedLogos([...CLIENT_LOGO_DATA, ...CLIENT_LOGO_DATA]);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-16">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 50,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap"
      >
        {duplicatedLogos.map((logo, idx) => (
          <div key={idx} className="relative h-16 w-32 shrink-0">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`Client logo ${idx + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100px, 128px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function InfiniteLogoScroll() {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-medium text-center"
        >
          TRUSTED BY THE BEST
        </motion.p>

        <LogoScroll />
      </div>
    </section>
  );
}
