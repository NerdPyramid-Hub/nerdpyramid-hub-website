"use client";
import { useEffect, useState } from "react";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#team", label: "Our Team" },
  { href: "/#values", label: "Our Values" },
];

const serviceLinks = [
  { href: "/software-solutions", label: "Software Solutions" },
  { href: "/cctv-installation", label: "CCTV Installation" },
  { href: "/learn-with-us", label: "Learn With Us" },
  { href: "/contact-us", label: "Get a Quote" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://www.linkedin.com/company/108231989", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="w-full bg-[#183B4E]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image src="/android-chrome-192x192.png" alt="Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-black text-white">
                NerdPyramid <span className="text-[#DDA853]">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-[#F3F3E0]/55 leading-relaxed">
              Building digital futures through innovative software solutions, professional education, and reliable CCTV installations across South Africa.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#DDA853] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#DDA853]/25 group"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-[#F3F3E0] group-hover:text-[#183B4E] transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigate Column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-[#DDA853] uppercase tracking-[0.15em]">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F3E0]/55 hover:text-[#DDA853] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-0 group-hover:w-2.5 h-px bg-[#DDA853] transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-[#DDA853] uppercase tracking-[0.15em]">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F3F3E0]/55 hover:text-[#DDA853] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="block w-0 group-hover:w-2.5 h-px bg-[#DDA853] transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-[#DDA853] uppercase tracking-[0.15em]">Contact</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-[#F3F3E0]/55">
                <Phone className="h-4 w-4 text-[#DDA853] flex-shrink-0 mt-0.5" />
                <span>+27 79 015 3035</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F3F3E0]/55">
                <Mail className="h-4 w-4 text-[#DDA853] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@nerdpyramidhub.com" className="hover:text-[#DDA853] transition-colors break-all">
                  info@nerdpyramidhub.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#F3F3E0]/55">
                <MapPin className="h-4 w-4 text-[#DDA853] flex-shrink-0 mt-0.5" />
                <span>South Africa</span>
              </li>
            </ul>
            <Link
              href="https://wa.me/27790153035"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#22c55e] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#F3F3E0]/35">
          © {year ?? "2025"} NerdPyramid Hub. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="#" className="text-xs text-[#F3F3E0]/35 hover:text-[#DDA853] transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-xs text-[#F3F3E0]/35 hover:text-[#DDA853] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
