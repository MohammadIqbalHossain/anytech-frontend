"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import type React from "react";
import { cn } from "@/libs/utlis/cn";

export interface FloatingIcon {
  icon: React.ReactNode;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  label?: string;
}

interface FloatingFrameProps {
  className?: string;
  image: {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
  icons: FloatingIcon[];
  backgroundImages?: {
    desktop?: string;
    mobile?: string;
    className?: string;
  };
}

export function FloatingFrame({
  className,
  image,
  icons,
  backgroundImages,
}: FloatingFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgImagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) return;

    // Initial animation for icons appearing
    gsap.fromTo(
      iconsRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
      }
    );

    // Floating animation for icons
    iconsRef.current.forEach((icon, index) => {
      if (!icon) return;

      gsap.to(icon, {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        rotation: "random(-5, 5)",
        duration: "random(2, 3)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });
    });

    // Parallax effect for background images
    const handleMouseMove = (e: MouseEvent) => {
      if (!frameRef.current || !isMounted) return;
      const { left, top, width, height } =
        frameRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(bgImagesRef.current, {
        x: x * 30,
        y: y * 30,
        rotation: x * 3,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  // Initial render with no animations
  if (!isMounted) {
    return (
      <div className={cn("relative w-full max-w-4xl mx-auto p-8", className)}>
        {/* Background Images */}
        {backgroundImages && (
          <>
            {/* Desktop Background */}
            {backgroundImages.desktop && (
              <div
                className={cn(
                  "absolute inset-0 hidden md:block",
                  backgroundImages.className
                )}
              >
                <Image
                  src={backgroundImages.desktop || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Mobile Background */}
            {backgroundImages.mobile && (
              <div
                className={cn(
                  "absolute inset-0 md:hidden",
                  backgroundImages.className
                )}
              >
                <Image
                  src={backgroundImages.mobile || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </>
        )}

        {/* Main Image */}
        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Static Icons */}
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute z-20 transition-transform duration-300 hover:scale-110"
            style={icon.position}
          >
            <div className="relative group">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100" />
                <div className="relative text-blue-600 w-8 h-8">
                  {icon.icon}
                </div>
              </div>
              {icon.label && (
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-sm text-blue-600 shadow-md">
                  {icon.label}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Animated version
  return (
    <div
      ref={frameRef}
      className={cn("relative w-full max-w-4xl mx-auto p-8", className)}
    >
      {/* Background Images */}
      {backgroundImages && (
        <>
          {/* Desktop Background */}
          {backgroundImages.desktop && (
            <div
              ref={(el) => {
                if (el) bgImagesRef.current[0] = el;
              }}
              className={cn(
                "absolute inset-0 hidden md:block",
                backgroundImages.className
              )}
            >
              <Image
                src={backgroundImages.desktop || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Mobile Background */}
          {backgroundImages.mobile && (
            <div
              ref={(el) => {
                if (el) bgImagesRef.current[1] = el;
              }}
              className={cn(
                "absolute inset-0 md:hidden",
                backgroundImages.className
              )}
            >
              <Image
                src={backgroundImages.mobile || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </>
      )}

      {/* Main Image */}
      <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 800}
          height={image.height || 600}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) iconsRef.current[index] = el;
          }}
          className="absolute z-20 transition-transform duration-300 hover:scale-110"
          style={icon.position}
        >
          <div className="relative group">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-50 to-blue-100" />
              <div className="relative text-blue-600 w-8 h-8">{icon.icon}</div>
            </div>
            {icon.label && (
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-sm text-blue-600 shadow-md">
                {icon.label}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
