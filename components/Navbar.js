"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isArtworksOpen, setIsArtworksOpen] = useState(false);

  const artworkLinks = [
    { title: "Earlier Work", href: "/earlier-work" },
    { title: "Abstract", href: "/abstract" },
    { title: "Semi-Abstract", href: "/semi-abstract" },
    { title: "Beauty of Nature", href: "/beauty-of-nature" },
    { title: "Spiritual", href: "/spiritual" },
    { title: "Miscellaneous", href: "/miscellaneous" },
  ];

  return (
    <nav className="bg-[#0f4c5c] text-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 py-2">
          <Link href="/" className="leading-tight">
            <h1 className="text-lg md:text-xl font-semibold font-serif hover:text-[#ffd166] transition">
              Prof. Uttama Dixit
            </h1>
            <p className="text-xs md:text-sm italic text-white/80">
              Artist | Educator | Researcher
            </p>
          </Link>

          {/* Hamburger – PC + Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu */}
        {isOpen && (
          <div className="py-4">
            <div className="flex flex-col gap-1 text-sm">

              <Link href="/" className="px-3 py-2 rounded hover:bg-white/10">
                Home
              </Link>

              <button
                onClick={() => setIsArtworksOpen(!isArtworksOpen)}
                className="px-3 py-2 rounded hover:bg-white/10 flex items-center justify-between"
              >
                Artworks
                <ChevronDown
                  size={16}
                  className={`transition ${isArtworksOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isArtworksOpen && (
                <div className="ml-3 border-l border-white/20">
                  {artworkLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 hover:bg-white/10"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/workshop" className="px-3 py-2 rounded hover:bg-white/10">Workshop</Link>
              <Link href="/exhibitions" className="px-3 py-2 rounded hover:bg-white/10">Exhibitions</Link>
              <Link href="/blog" className="px-3 py-2 rounded hover:bg-white/10">Blog</Link>
              <Link href="/available-for-sale" className="px-3 py-2 rounded hover:bg-white/10">Available for Sale</Link>
              <Link href="/contact" className="px-3 py-2 rounded hover:bg-white/10">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
