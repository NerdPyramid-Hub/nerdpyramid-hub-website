// components/AboutSection.tsx
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Heart, Rocket, Users, Target } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              Our Rich History
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
              From Campus Lab to Tech Excellence
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our journey began with nine passionate classmates united by a shared love for technology and a dream to create meaningful change.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Rocket className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Humble Beginnings</h3>
                  <p className="text-gray-600">
                    Started in our campus computer science lab, staying after hours, helping each other through academic challenges, and dreaming about the future.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Hackathon Origins</h3>
                  <p className="text-gray-600">
                    Our foundation was laid at a hackathon with long nights, big dreams, and powerful teamwork that showed us what we could achieve together.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                  <Target className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Shared Vision</h3>
                  <p className="text-gray-600">
                    United by the belief that technology should empower people, and that learning should be exciting, accessible, and practical.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="\Untitled design.png"
            width={550}
            height={400}
            alt="Team working together"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-emerald-200 shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
