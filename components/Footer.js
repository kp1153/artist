import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dr. Uttama Dixit</h3>
            <p className="text-sm leading-relaxed mb-4">
              Distinguished artist, educator, and researcher. Professor and Dean at Faculty of Visual Arts, Banaras Hindu University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gallery" className="hover:text-amber-400 transition">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition">About</Link></li>
              <li><Link href="/workshops" className="hover:text-amber-400 transition">Workshops</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>uttama.dixit@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91-9793331447</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Faculty of Visual Arts, BHU, Varanasi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} Dr. Uttama Dixit. All rights reserved.
            </p>
            <p className="text-gray-400">
              Passionately created by{' '}
              <Link 
                href="https://www.web-developer-kp.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition font-medium"
              >
                web-developer-kp.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}