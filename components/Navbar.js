// File: components/Navbar.js

"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Folk Art", href: "#folk-art" },
  ];

  const rightLinks = [
    { title: "Contemporary", href: "#contemporary" },
    { title: "Academic", href: "#academic" },
    { title: "Exhibitions", href: "#exhibitions" },
    { title: "Publications", href: "#publications" },
    { title: "Awards", href: "#awards" },
    { gallery: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className="bg-[#006680] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER ROW */}
        <div className="flex flex-col lg:block border-b border-amber-600/30">

          {/* Line 1: Name */}
          <div className="text-center py-4">
            <h1 className="text-2xl md:text-4xl font-extrabold font-serif">
              Dr. Uttama Dixit
            </h1>
            <p className="text-sm md:text-lg italic font-serif">
              Artist | Educator | Researcher
            </p>
          </div>

          {/* Line 2: Mobile Hamburger */}
          <div className="lg:hidden flex justify-end pb-3">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center justify-center py-4">
          <div className="flex gap-10">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-rose-600 transition font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="w-10" />

          <div className="flex gap-10">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-pink-600 transition font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE MENU (NO EXTRA LINE) */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {[...leftLinks, ...rightLinks].map((link) => (
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
