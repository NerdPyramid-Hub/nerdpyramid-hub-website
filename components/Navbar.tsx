"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { href: "/software-solutions", label: "Software" },
    { href: "/cctv-installation", label: "CCTV" },
    { href: "/learn-with-us", label: "Learn" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-[#1e3f6e]/95 backdrop-blur-lg border-b border-[#DDA853]/20 shadow-xl shadow-[#183B4E]/30"
          : "bg-[#27548A]"
      }`}
    >
      <div className="mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/"
            className="flex items-center space-x-2.5 group w-fit"
            aria-label="Home"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#DDA853]/20 blur-md group-hover:bg-[#DDA853]/35 transition-all duration-300" />
              <Image
                src="/android-chrome-192x192.png"
                alt="NerdPyramid Hub"
                width={38}
                height={38}
                className="relative rounded-full"
              />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tight text-white">
              NerdPyramid <span className="text-[#DDA853]">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-lg text-white/90 hover:text-[#DDA853] hover:bg-white/10 transition-all duration-200 ${
                pathname === link.href ? "text-[#DDA853] bg-white/10 font-semibold" : ""
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#DDA853] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/contact-us" passHref>
            <Button className="bg-[#DDA853] text-[#183B4E] font-bold hover:bg-[#f0c060] hover:shadow-lg hover:shadow-[#DDA853]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:text-[#DDA853] hover:bg-white/10 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}>
              <X className="h-6 w-6" />
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}>
              <Menu className="h-6 w-6" />
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-[#1e3f6e] border-t border-[#DDA853]/20 px-6 py-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 py-2.5 px-4 rounded-lg text-sm font-medium text-white/90 hover:text-[#DDA853] hover:bg-white/10 transition-all duration-200 ${
                pathname === link.href ? "text-[#DDA853] bg-white/10 font-semibold border-l-2 border-[#DDA853]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#DDA853]/20">
            <Link href="/contact-us" passHref onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#DDA853] text-[#183B4E] font-bold hover:bg-[#f0c060] transition-all duration-200">
                Contact Us
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
