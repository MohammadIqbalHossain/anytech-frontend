"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/libs/utlis/cn";

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

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Logo */}
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
        <div className="hidden lg:flex items-center gap-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
              className={cn(
                "flex items-center gap-1 hover:underline",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Solutions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                {["Option 1", "Option 2", "Option 3"].map((option) => (
                  <Link
                    key={option}
                    href="#"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {option}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="#"
            className={cn(
              "hover:underline",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Services
          </Link>
          <Link
            href="#"
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
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition-colors"
          >
            Contact Us
          </Link>
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
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isSolutionsOpen ? "rotate-180" : ""
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {["Option 1", "Option 2", "Option 3"].map((option) => (
                    <Link
                      key={option}
                      href="#"
                      className="block text-white hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              href="#"
              className="block py-2 text-white hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
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
              className="mt-4 block bg-cyan-400 text-white px-4 py-2 rounded text-center hover:bg-cyan-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
