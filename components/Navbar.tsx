// components/Header.tsx
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            NerdPyramid Hub
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {[
            { href: "#about", label: "About" },
            { href: "#team", label: "Team" },
            { href: "#services", label: "Services" },
            { href: "#values", label: "Values" },
            { href: "#mission", label: "Mission" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
          Get Started
        </Button>
      </div>
    </header>
  )
}
