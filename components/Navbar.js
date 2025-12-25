"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic categories - can be fetched from Sanity later
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Folk Art", href: "/folk-art" },
    { title: "Contemporary", href: "/contemporary" },
    { title: "Gallery", href: "/gallery" },
    { title: "Exhibitions", href: "/exhibitions" },   
    { title: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-[#006680] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:block border-b border-amber-600/30">
          <div className="text-center py-4">
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-extrabold font-serif cursor-pointer hover:text-amber-300 transition">
                Dr. Uttama Dixit
              </h1>
              <p className="text-sm md:text-lg italic font-serif mt-2">
                Artist | Educator | Researcher
              </p>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex justify-end pb-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-8 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-amber-300 transition font-medium text-lg"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}