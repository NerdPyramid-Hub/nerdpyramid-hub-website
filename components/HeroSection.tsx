// components/HeroSection.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Lightbulb, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit bg-[#DDA853] text-[#183B4E]">
                <Lightbulb className="w-3 h-3 mr-1" />
                Let’s turn your ideas into real, working software that makes a difference
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#183B4E]">
                Building{" "}
                <span className="text-[#27548A]">
                  Digital Futures
                </span>{" "}
                Through Code
              </h1>
              <p className="max-w-[600px] text-[#183B4E] md:text-xl">
                We combine cutting-edge technology with innovative thinking to craft meaningful digital solutions that are resilient and built to last forever.
              </p>
            </div>
            <div className="flex flex-col gap-6 min-[400px]:flex-row">
              <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-[#27548A] text-white hover:bg-[#183B4E]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              <Link href="/learn-with-us">
              <Button
                variant="outline"
                size="lg"
                className="border-[#DDA853] text-[#27548A] hover:bg-[#F3F3E0]"
              >
                Learn With Us
              </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm text-[#183B4E]">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>5 Founding Members</span>
              </div>
              <div className="flex items-center space-x-1">
                <Code className="h-4 w-4" />
                <span>8+ Projects Delivered</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="relative">
              {/* Remove gradient background blur */}
              <Image
                src="/kidWithAPyramid.jpg"
                width={600}
                height={400}
                alt="NerdPyramid Hub"
                className="w-full h-auto relative rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
