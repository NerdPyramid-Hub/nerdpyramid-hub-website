// components/HeroSection.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Code, Lightbulb, Users } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Lightbulb className="w-3 h-3 mr-1" />
                From Classmates to Tech Leaders
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Building{" "}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Digital Futures
                </span>{" "}
                Through Code & Education
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                We combine cutting-edge technology with passionate education to create meaningful digital solutions while mentoring the next generation of developers.
              </p>
            </div>
            <div className="flex flex-col gap-6 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur-3xl opacity-20"></div>
              <Image
  src="/88db48156be1dd3bd387fd65d091c05ebe6c46f7.jpg"
  width={600}
  height={400}
  alt="NerdPyramid Hub"
  className="w-full h-auto shadow-green-600 relative rounded-full object-cover shadow-2xl"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
