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
    <nav className="bg-[#006680] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:block border-b border-amber-600/30">
          <div className="text-center py-4">
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-extrabold font-serif cursor-pointer hover:text-amber-300 transition">
                Prof. Uttama Dixit
              </h1>
              <p className="text-sm md:text-lg italic font-serif mt-2">
                Artist | Educator | Researcher
              </p>
            </Link>
          </div>

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
          <Link href="/" className="hover:text-amber-300 transition font-medium text-lg">
            Home
          </Link>

          <div className="relative group">
            <button className="hover:text-amber-300 transition font-medium text-lg flex items-center gap-1">
              Artworks
              <ChevronDown size={18} />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-teal-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
              {artworkLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 hover:bg-teal-700 transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/workshop" className="hover:text-amber-300 transition font-medium text-lg">
            Workshop
          </Link>
          <Link href="/exhibitions" className="hover:text-amber-300 transition font-medium text-lg">
            Exhibitions
          </Link>
          <Link href="/blog" className="hover:text-amber-300 transition font-medium text-lg">
            Blog
          </Link>
          <Link href="/available-for-sale" className="hover:text-amber-300 transition font-medium text-lg">
            Available for Sale
          </Link>
          <Link href="/contact" className="hover:text-amber-300 transition font-medium text-lg">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <div>
                <button
                  onClick={() => setIsArtworksOpen(!isArtworksOpen)}
                  className="w-full text-left px-4 py-2 rounded hover:bg-white/10 flex items-center justify-between"
                >
                  Artworks
                  <ChevronDown size={18} className={isArtworksOpen ? "rotate-180 transition" : "transition"} />
                </button>
                {isArtworksOpen && (
                  <div className="pl-4">
                    {artworkLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 rounded hover:bg-white/10"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/workshop" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Workshop
              </Link>
              <Link href="/exhibitions" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Exhibitions
              </Link>
              <Link href="/blog" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="/available-for-sale" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Available for Sale
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded hover:bg-white/10" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}