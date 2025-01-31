"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import weblineDesktop1 from "../../../../public/Assets/backgrounds/WaveLinesDesktop1.svg";
import weblineDesktop4 from "../../../../public/Assets/backgrounds/WaveLinesDesktop4.svg";
import weblineMobile1 from "../../../../public/Assets/backgrounds/WaveLinesMobile1.svg";
import weblineMobile2 from "../../../../public/Assets/backgrounds/WaveLinesMobile2.svg";

export function WaveLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const waves = waveRefs.current.filter(Boolean) as HTMLDivElement[];

    gsap.fromTo(
      waves,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.15,
        ease: "power2.out",
      }
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      waves.forEach((wave, index) => {
        const speed = 0.8 - index * 0.15;
        gsap.to(wave, {
          x: x * 20 * speed,
          y: y * 20 * speed,
          duration: 1.2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const setWaveRef = (index: number) => (el: HTMLDivElement | null) => {
    waveRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Desktop wave lines */}
      <div className="hidden lg:block">
        <div ref={setWaveRef(0)} className="absolute inset-0">
          <Image
            src={weblineDesktop1}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div ref={setWaveRef(1)} className="absolute inset-0">
          <Image
            src={weblineDesktop4}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Mobile wave lines */}
      <div className="lg:hidden">
        <div ref={setWaveRef(2)} className="absolute inset-0">
          <Image
            src={weblineMobile1}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div ref={setWaveRef(3)} className="absolute inset-0">
          <Image
            src={weblineMobile2}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
