// components/ContactSection.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#27548A] text-[#F3F3E0]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#F3F3E0]">
              Ready to Build Your Digital Future?
            </h2>
            <p className="max-w-[600px] mx-auto text-[#F3F3E0]/80 text-lg md:text-xl leading-relaxed">
              Join us in creating meaningful digital solutions while learning and growing together. Let's turn your
              ideas into reality.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col min-[400px]:flex-row items-center gap-4">
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#DDA853] text-[#183B4E] font-bold shadow-md hover:bg-[#f2c15e] hover:text-[#183B4E]"
              >
                Start Your Project
              </Button>
            </Link>

            <span className="mx-2 text-lg font-semibold text-[#F3F3E0] min-[400px]:text-center">
              OR
            </span>

            <Link href="/learn-with-us">
              <Button
                size="lg"
                variant="outline"
                className="border-[#F3F3E0] text-[#27548A] font-bold shadow-md hover:bg-[#fcfcf4] hover:text-[#27548A]"
              >
                Learn With Us
              </Button>
            </Link>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 mt-8">
            <Mail className="h-5 w-5 text-[#F3F3E0]" />
            <Link
              href="mailto:morossakhe@gmail.com"
              className="text-[#F3F3E0] hover:underline text-base"
            >
              morosisakhe@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
