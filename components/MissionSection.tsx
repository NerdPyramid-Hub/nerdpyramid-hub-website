// components/MissionSection.tsx
import { Badge } from "@/components/ui/badge"
import { BookOpen, Rocket, Target, Users } from "lucide-react"

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-emerald-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                <Target className="w-3 h-3 mr-1" />
                Our Vision
              </Badge>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Leading Through Excellence & Innovation
              </h2>
              <p className="text-emerald-100 text-lg mt-4">
                To become a leading developer team known for technical excellence, innovation, and mentorship.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  <Users className="h-4 w-4" />
                </div>
                <span>Collaboration & Teamwork</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-600">
                  <Target className="h-4 w-4" />
                </div>
                <span>Impact-Driven Work</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                <Rocket className="w-3 h-3 mr-1" />
                Our Mission
              </Badge>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Learn, Teach, Build, Innovate</h2>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold">Learn and Upskill</h3>
                <p className="text-emerald-100 text-sm">
                  Continuously master new technologies, frameworks, and best practices in software development.
                </p>
              </div>
              <div className="border-l-4 border-emerald-400 pl-4">
                <h3 className="font-semibold">Teach and Mentor</h3>
                <p className="text-emerald-100 text-sm">
                  Share knowledge with students and junior developers to foster the next generation of tech talent.
                </p>
              </div>
              <div className="border-l-4 border-slate-400 pl-4">
                <h3 className="font-semibold">Build and Deliver</h3>
                <p className="text-emerald-100 text-sm">
                  Work on real-world projects that meet customer needs with clean, scalable, and efficient code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
