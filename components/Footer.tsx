"use client"
import { useEffect, useState } from "react"
import { Code } from "lucide-react"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
      <div className="flex items-center space-x-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-r from-blue-600 to-emerald-600">
          <Code className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-medium">NerdPyramid Hub</span>
      </div>
      <p className="text-xs text-gray-600 sm:ml-auto">
        © {year ?? ""} NerdPyramid Hub. Building digital futures through code & education.
      </p>
    </footer>
  )
}
