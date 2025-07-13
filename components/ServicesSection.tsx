// components/ServicesSection.tsx
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Code, Users } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4 bg-[#DDA853] text-[#183B4E]">
              <Code className="w-3 h-3 mr-1" />
              What We Do
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-[#183B4E]">
              Smart Digital Solutions & Education
            </h2>
            <p className="max-w-[900px] text-[#183B4E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We build engaging digital solutions and offer coding education to inspire the next generation of
              developers.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F3E0] mb-4">
                <Code className="h-6 w-6 text-[#27548A]" />
              </div>
              <CardTitle className="text-[#183B4E]">Custom Development</CardTitle>
              <CardDescription className="text-[#183B4E]">
                Dynamic platforms, custom websites, and mobile apps built with clean, scalable, and efficient code.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F3E0] mb-4">
                <BookOpen className="h-6 w-6 text-[#DDA853]" />
              </div>
              <CardTitle className="text-[#183B4E]">Coding Education</CardTitle>
              <CardDescription className="text-[#183B4E]">
                Comprehensive coding lessons and mentorship programs to help students and junior developers grow.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F3E0] mb-4">
                <Users className="h-6 w-6 text-[#183B4E]" />
              </div>
              <CardTitle className="text-[#183B4E]">Mentorship</CardTitle>
              <CardDescription className="text-[#183B4E]">
                One-on-one guidance and support to help aspiring developers build real, practical digital skills.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
