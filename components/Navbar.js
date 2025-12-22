'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ArtistNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Gallery', 
      href: '/gallery',
      submenu: [
        { name: 'Paintings', href: '/gallery/paintings' },
        { name: 'Exhibitions', href: '/gallery/exhibitions' },
        { name: 'Collections', href: '/gallery/collections' }
      ]
    },
    { name: 'About', href: '/about' },
    { 
      name: 'Publications', 
      href: '/publications',
      submenu: [
        { name: 'Research Papers', href: '/publications/research-papers' },
        { name: 'Books', href: '/publications/books' },
        { name: 'Articles', href: '/publications/articles' }
      ]
    },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Awards', href: '/awards' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 uttama.dixit@gmail.com</span>
            <span className="hidden md:inline">📞 +91-9793331447</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/?lang=en" className="hover:text-amber-200 transition">
              🌐 EN
            </Link>
            <span>|</span>
            <Link href="/?lang=hi" className="hover:text-amber-200 transition">
              हिं
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              UD
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Uttama Dixit</h1>
              <p className="text-xs text-gray-600">Artist | Educator | Researcher</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>
                
                {/* Dropdown - pure CSS hover */}
                {item.submenu && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-48 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/buy-artwork"
              className="ml-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Buy Artwork
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-amber-600 font-medium transition"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem, subIdx) => (
                      <Link
                        key={subIdx}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-amber-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/buy-artwork"
              className="block w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buy Artwork
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}