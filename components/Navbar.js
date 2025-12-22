"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Gallery", href: "/gallery" },
    { title: "Paintings", href: "/gallery/paintings" },
    { title: "Exhibitions", href: "/gallery/exhibitions" },
    { title: "Collections", href: "/gallery/collections" },
    { title: "About", href: "/about" },
    { title: "Publications", href: "/publications" },
    { title: "Research Papers", href: "/publications/research-papers" },
    { title: "Books", href: "/publications/books" },
    { title: "Articles", href: "/publications/articles" },
    { title: "Workshops", href: "/workshops" },
    { title: "Awards", href: "/awards" },
    { title: "Contact", href: "/contact" },
    { title: "Buy Artwork", href: "/buy-artwork" },
  ];

  return (
    <nav className="bg-zinc-900 text-amber-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-6 min-h-[80px]">
          <div className="flex items-center gap-3 w-full justify-center text-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-wider text-amber-600 font-serif">
                DR. UTTAMA DIXIT
              </h1>

              <p className="text-xl font-semibold italic text-amber-600 font-serif drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">
                Artist | Educator | Researcher
              </p>
            </div>
          </div>

          {/* Hamburger Menu - All Devices */}
          <div className="absolute right-4 top-8">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-white/10 rounded">
                  <Menu className="h-8 w-8" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[280px] bg-white overflow-y-auto"
              >
                <SheetTitle className="text-xl font-bold text-amber-600 mb-6">
                  Menu
                </SheetTitle>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-amber-600 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}