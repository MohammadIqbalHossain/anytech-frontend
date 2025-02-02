"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/libs/utlis/cn";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const routes = [
    { name: "AnySaas", path: "/anysass" },
    { name: "AnyBass", path: "/anybass" },
    { name: "AnyPass", path: "/anypass" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        {/* TODO: Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold",
            isScrolled ? "text-gray-900" : "text-white"
          )}
        >
          ANYTECH
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 ">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setIsSolutionsOpen(true)}
              // onMouseLeave={() => setIsSolutionsOpen(false)}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={cn(
                "flex items-center gap-1 hover:underline",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Solutions
              <ChevronDown />
            </button>

            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                {routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.path}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 border-b border-gray-200 last:border-0"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/services"
            className={cn(
              "hover:underline",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className={cn(
              "hover:underline",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            About Us
          </Link>

          {/* Language Selector */}
          <select
            className={cn(
              "bg-transparent border rounded-full px-2 py-1",
              isScrolled
                ? "text-gray-900 border-gray-900"
                : "text-white border-white"
            )}
          >
            <option value="en">EN</option>
          </select>
        </div>

        {/* Contact Button - Desktop */}
        <div className="hidden lg:block ">
          <Button
            size="lg"
            className={cn(
              "bg-transparent hover:bg-white hover:text-black  text-white px-4 py-2 rounded outline-1 border border-white transition-colors duration-1000 text-lg",
              isScrolled ? "bg-[#FE8B53] hover:bg-[#FE8B53]" : ""
            )}
          >
            <Link href="/contact-us" className="flex items-center gap-2">
              Contact Us <ChevronRight className="font-bold" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-md",
            isScrolled ? "text-gray-900" : "text-white"
          )}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full bg-[#0044AA] shadow-lg transition-all duration-300 overflow-hidden ",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            {/* Solutions Dropdown */}
            <div className="mb-4">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-2 text-white w-full"
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isSolutionsOpen && "rotate-180"
                  )}
                />
              </button>

              {isSolutionsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.path}
                      className="block text-white hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              href="/services"
              className="block py-2 text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="block py-2 text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Language Selector */}
            <select className="mt-4 bg-transparent border border-gray-300 text-white rounded-full px-4 py-2 w-full">
              <option value="en">EN</option>
            </select>

            {/* Contact Button - Mobile */}
            <Link
              href="#"
              className="flex items-center mt-4 justify-center gap-2 bg-[#FE8B53] text-white px-4 py-2 rounded text-center hover:bg-[#FE8B53] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
