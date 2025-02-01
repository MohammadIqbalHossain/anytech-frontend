"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react";

import { SectionTitle } from "@/libs/utlis/section-title";
import { TABS } from "@/libs/data";

export default function FinanceCarousel() {
  const [activeTab, setActiveTab] = useState("compliance");
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetAutoPlay();
  };

  const goToNextSlide = useCallback(() => {
    const currentIndex = TABS.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % TABS.length;
    setActiveTab(TABS[nextIndex].id);
  }, [activeTab]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(goToNextSlide, 4000);
  }, [goToNextSlide]);

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (event: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;

    const clientX =
      "changedTouches" in event
        ? event.changedTouches[0].clientX
        : event.clientX;
    const delta = dragStart - clientX;

    if (Math.abs(delta) > 50) {
      // Minimum drag distance to trigger slide
      const currentIndex = TABS.findIndex((tab) => tab.id === activeTab);
      if (delta > 0 && currentIndex < TABS.length - 1) {
        // Drag left -> next slide
        setActiveTab(TABS[currentIndex + 1].id);
      } else if (delta < 0 && currentIndex > 0) {
        // Drag right -> previous slide
        setActiveTab(TABS[currentIndex - 1].id);
      }
      resetAutoPlay();
    }

    setDragging(false);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [resetAutoPlay]);

  return (
    <section className="w-full p-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <SectionTitle
          subtitle="TECHNOLOGY BUILT FOR YOU"
          title=" The future of finance"
        />
        {/* Tabs/Carousel */}
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full "
        >
          <TabsList className="w-full justify-center gap-4 h-auto flex-wrap bg-transparent mb-12">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`transition-all duration-300 rounded-full lg:text-lg px-4 ${
                  activeTab === tab.id
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div
            className="mt-8 relative lg:px-16"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              {TABS.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-12 items-center shadow-2xl p-4 rounded-lg cursor-pointer"
                    >
                      <div>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-blue-600 font-extrabold tracking-wider mb-4"
                        >
                          {tab.label.toUpperCase()}
                        </motion.p>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-4xl font-extrabold text-slate-900 mb-6"
                        >
                          {tab.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-4"
                        >
                          {tab.description
                            .split("\n\n")
                            .map((paragraph, index) => (
                              <p key={index} className="text-slate-600">
                                {paragraph}
                              </p>
                            ))}
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative aspect-[4/3] w-full"
                      >
                        <Image
                          src={tab.image || "/placeholder.svg"}
                          alt={tab.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
