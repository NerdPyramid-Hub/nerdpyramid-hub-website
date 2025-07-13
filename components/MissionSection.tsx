// components/MissionSection.tsx
import { Badge } from "@/components/ui/badge";
import { BookOpen, Rocket, Target, Users } from "lucide-react";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="w-full py-16 md:py-24 lg:py-32 bg-[#183B4E] text-[#F3F3E0]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-6">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Vision Block */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#DDA853]/10 text-[#DDA853] border border-[#DDA853]/30"
              >
                <Target className="w-3 h-3 mr-1" />
                Our Vision
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Leading Through Excellence & Innovation
              </h2>
              <p className="text-[#F3F3E0]/90 text-lg mt-4">
                To become a leading developer team known for technical excellence, innovation, and mentorship.
              </p>
            </div>

            <div className="grid gap-4 text-[#F3F3E0]">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDA853]">
                  <Users className="h-4 w-4 text-[#183B4E]" />
                </div>
                <span className="font-medium">Collaboration & Teamwork</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#27548A]">
                  <BookOpen className="h-4 w-4 text-[#F3F3E0]" />
                </div>
                <span className="font-medium">Continuous Learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F3E0]">
                  <Target className="h-4 w-4 text-[#27548A]" />
                </div>
                <span className="font-medium">Impact-Driven Work</span>
              </div>
            </div>
          </div>

          {/* Mission Block */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#DDA853]/10 text-[#DDA853] border border-[#DDA853]/30"
              >
                <Rocket className="w-3 h-3 mr-1" />
                Our Mission
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Learn, Teach, Build, Innovate
              </h2>
            </div>

            <div className="space-y-5">
              <div className="border-l-4 border-[#27548A] pl-4">
                <h3 className="font-semibold text-[#F3F3E0]">Learn and Upskill</h3>
                <p className="text-[#F3F3E0]/80 text-sm">
                  Continuously master new technologies, frameworks, and best practices in software development.
                </p>
              </div>
              <div className="border-l-4 border-[#DDA853] pl-4">
                <h3 className="font-semibold text-[#F3F3E0]">Teach and Mentor</h3>
                <p className="text-[#F3F3E0]/80 text-sm">
                  Share knowledge with students and junior developers to foster the next generation of tech talent.
                </p>
              </div>
              <div className="border-l-4 border-[#F3F3E0]/50 pl-4">
                <h3 className="font-semibold text-[#F3F3E0]">Build and Deliver</h3>
                <p className="text-[#F3F3E0]/80 text-sm">
                  Work on real-world projects that meet customer needs with clean, scalable, and efficient code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
