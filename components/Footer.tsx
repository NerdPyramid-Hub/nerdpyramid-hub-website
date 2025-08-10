"use client"

import { useEffect, useState } from "react"
import { Code, Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full px-4 md:px-6 py-10 bg-gradient-to-br from-[#F3F3E0] via-white to-[#F3F3E0] shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-3">
         <div className="flex  items-center justify-center">
                     <Image src="/nerdpyramid_logo_bg_removed.png.png" alt="Logo" width={60} height={60} />
                   </div>
          <span className="text-base font-semibold text-[#183B4E]">NerdPyramid Hub</span>
        </div>
        <p className="text-sm text-[#27548A] text-center md:text-left">
          © {year ?? ""} NerdPyramid Hub. Building digital futures through code.
        </p>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" className="text-[#27548A] hover:text-[#DDA853]">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/company/108231989" target="_blank" className="text-[#27548A] hover:text-[#DDA853]">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-[#27548A] hover:text-[#DDA853]">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
