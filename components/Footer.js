import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Research", href: "/research" },
    { title: "Contact", href: "/contact" },
    { title: "Administrative Roles", href: "/administrative" },
    { title: "Research Scholars", href: "/scholars" },
  ];

  return (
    <footer className="bg-gradient-to-br from-teal-900 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Dr. Uttama Dixit
            </h3>

            <p className="text-white/80 mb-4 leading-relaxed">
              Professor, Dean & Head of Department of Painting at Faculty of Visual Arts,
              Banaras Hindu University. Expert in Folk Art and Contemporary Painting.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:uttama.dixit@bhu.ac.in"
                  className="hover:text-amber-300"
                >
                  uttama.dixit@bhu.ac.in
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 9793331447
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} /> Faculty of Visual Arts, BHU, Varanasi
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/uttama.dixit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/uttamadixit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://x.com/uttamad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition"
                aria-label="X (Twitter)"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-amber-300 transition"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Statistics */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              Academic Highlights
            </h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>• 23+ Years Teaching Experience</li>
              <li>• 45+ Exhibitions (National & International)</li>
              <li>• 12 PhDs Successfully Awarded</li>
              <li>• 34 Research Papers Published</li>
              <li>• Member: State Lalit Kala Academy, UP</li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Book</h5>
              <p className="text-white/80 text-sm">
                <em>"Kashi Sanskriti evam Lok Chitrakala"</em>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dr. Uttama Dixit. All Rights Reserved.
          </p>

          <p className="mt-2">
            Dean, Faculty of Visual Arts | Banaras Hindu University, Varanasi
          </p>

          <div className="mt-3">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              web-developer-kp.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
