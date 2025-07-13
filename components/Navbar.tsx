// components/Header.tsx
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [selected, setSelected] = useState("#about")

  const links = [
    { href: "#services", label: "Services" },
    { href: "#values", label: "Values" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#mission", label: "Mission" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#27548A] backdrop-blur">
      <div className="mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
            <Code className="h-5 w-5 text-[#27548A]" />
          </div>
         <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
  NerdPyramid Hub
</span>

        </div>
        <nav className="hidden md:flex items-center space-x-6 text-md font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-white hover:text-[#DDA853] ${
                selected === link.href ? "border-b-2 border-[#DDA853]" : ""
              }`}
              onClick={() => setSelected(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" passHref>
          <Button className="bg-[#DDA853] text-[#183B4E] font-bold shadow-md hover:bg-[#f2c15e] hover:text-[#183B4E]">
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  )
}
