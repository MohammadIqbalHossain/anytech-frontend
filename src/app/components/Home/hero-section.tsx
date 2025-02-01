"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import heroImage from "../../../../public/Assets/hero-image .jpg";
import { WaveLines } from "./web-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#0044AA] to-[#0066FF] overflow-hidden"
    >
      <WaveLines />

      {/* Curved bottom shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-[#EEEFF2]"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
        }}
      />

      {/* Content wrapper with diagonal split */}
      <div className="z-10 min-h-screen mt-20 lg:mt-0">
        <div className="flex items-center min-h-screen lg:mx-20 mx-10">
          <div ref={contentRef} className="hero-content pb-32 lg:pb-0">
            <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight">
              Embrace the
              <br />
              future of finance
            </h1>

            <p className="text-white/90 text-lg lg:text-xl mt-6 max-w-2xl">
              Reimagine financial services with AnyTech&apos;s open platform,
              distributed banking solution that powers transformation
            </p>

            <Button
              size="lg"
              className="bg-[#FE8B53] hover:bg-[#c97951]  text-white px-6 py-4 rounded transition-colors duration-1000 text-lg mt-10 "
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                Reach out to us <ChevronRight className="font-bold" />
              </Link>
            </Button>
          </div>

          {/* Image positioned on the left */}
          <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 min-h-[500px] lg:min-h-screen w-full lg:w-1/2">
            <Image
              src={heroImage}
              alt="Professional using AnyTech platform"
              fill
              className="object-cover overflow-hidden"
              style={{
                clipPath: "polygon(50% 0%, 100% 0%, 100% 80%, 0% 90%)",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
