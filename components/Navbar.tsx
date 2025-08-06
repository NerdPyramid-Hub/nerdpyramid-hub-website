// components/Header.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/software-solutions", label: "Software Solutions" },
    { href: "/cctv-installation", label: "CCTV Installation" },
    { href: "/learn-with-us", label: "Learn with Us" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-[#27548A] backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
            <Code className="h-5 w-5 text-[#27548A]" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            NerdPyramid Hub
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-md font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-white hover:text-[#DDA853] pb-1 ${
                pathname === link.href
                  ? "border-b-2 border-[#DDA853] text-[#DDA853]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact" passHref>
            <Button className="bg-[#DDA853] text-[#183B4E] font-bold shadow-md hover:bg-[#f2c15e] hover:text-[#183B4E]">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-[#DDA853] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#27548A] border-t border-[#DDA853]/20">
          <nav className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-white hover:text-[#DDA853] transition-colors ${
                  pathname === link.href ? "text-[#DDA853] font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#DDA853]/20">
              <Link
                href="/contact"
                passHref
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-[#DDA853] text-[#183B4E] font-bold shadow-md hover:bg-[#f2c15e] hover:text-[#183B4E]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
