"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { href: "/software-solutions", label: "Software " },
    { href: "/cctv-installation", label: "CCTV " },
    { href: "/learn-with-us", label: "Learn " },
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
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Home"
        >
          <div className="flex  items-center justify-center">
            <Image
              src="/android-chrome-192x192.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <span
            className="text-lg md:text-2xl font-black tracking-tight text-[#5997e2] drop-shadow-sm"
            style={{
              letterSpacing: "0.01em",
              lineHeight: "1.1",
            }}
          >
            NerdPyramid <span className="text-[#DDA853]">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-md font-medium">
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
          <Link href="/contact-us" passHref>
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
                href="/contact-us"
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
