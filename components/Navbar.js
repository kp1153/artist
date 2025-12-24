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
{ title: "Exhibitions", href: "#exhibitions" }
    { title: "Publications", href: "#publications" },
    { title: "Awards", href: "#awards" },
  ];
  return (
    <nav className="bg-zinc-900 text-amber-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Name */}
        <div className="text-center py-6 border-b border-amber-600/30">
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-1">
            DR. UTTAMA DIXIT
          </h1>
          <p className="text-lg italic font-serif">
            Artist | Educator | Researcher
          </p>
        </div>
        {/* DESKTOP MENU — equal spacing */}
        <div className="hidden lg:flex items-center justify-center py-4">
          {/* Left */}
          <div className="flex gap-10">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition font-medium whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
          {/* Equal space between menus */}
          <div className="w-10"></div>
          {/* Right */}
          <div className="flex gap-10">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition font-medium whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* MOBILE BUTTON */}
        <div className="lg:hidden flex justify-end py-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* MOBILE MENU */}
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