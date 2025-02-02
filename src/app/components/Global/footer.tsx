"use client";

import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { WaveLines } from "../Home/wave-lines";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      {/* CTA Section */}
      <div className="relative bg-blue-600 pt-32 pb-24 px-4 md:px-6 lg:px-8">
        {/* Animated Background Lines */}
        <WaveLines />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
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
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Legacy no longer
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              Talk to us to find out how we can transform your organisation for
              the future
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                asChild
                className="bg-coral-500 hover:bg-coral-600 text-white rounded-md px-6 py-3 transition-all duration-300 hover:scale-105"
              >
                <Button
                  size="lg"
                  className="bg-[#FE8B53] hover:bg-[#FE8B53] text-white px-4 py-2 rounded transition-colors duration-1000 text-lg"
                >
                  <Link href="/contact-us" className="flex items-center gap-2">
                    Contact Us <ChevronRight className="font-bold" />
                  </Link>
                </Button>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-navy-900 pt-12 px-4 md:px-0 lg:px-0 bg-[#002045]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
            }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 px-4"
          >
            {/* Logo */}
            <div className="mb-8 md:mb-0 text-white">
              <Link href="/" className="text-2xl font-bold">
                ANYTECH
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row gap-6 md:gap-12">
              {[
                { href: "/solutions", label: "Our Solutions" },
                { href: "/caas", label: "AnyCaaS" },
                { href: "/baas", label: "AnyBaaS" },
                { href: "/paas", label: "AnyPaaS" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.7 } },
            }}
            className="h-full flex flex-col md:flex-row justify-between items-center py-4 px-4 border-t border-white/10 bg-[#00152D]"
          >
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              ©2023 All rights reserved. Any Technology Pte Ltd.
            </p>
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white/80 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
