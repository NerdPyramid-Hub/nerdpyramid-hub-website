// components/TeamSection.tsx
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Mail, Linkedin, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Luvolwethu Tokwe",
    position: "Lead Developer & Co-Founder",
    image: "/placeholder.svg?height=200&width=200",
    email: "alex@psybernerds.com",
    linkedin: "linkedin.com/in/alexjohnson",
    experience: "Former Software Engineer at Google, 5+ years in full-stack development",
    specialties: ["React", "Node.js", "Cloud Architecture"],
  },
  {
    name: "Sakhe Morosi",
    position: "UI/UX Designer & Frontend Lead",
    image: "/placeholder.svg?height=200&width=200",
    email: "sarah@psybernerds.com",
    linkedin: "linkedin.com/in/sarahchen",
    experience: "Ex-Design Lead at Spotify, 4+ years in product design",
    specialties: ["UI/UX Design", "React", "Design Systems"],
  },
  {
    name: "Abulele Maqungo",
    position: "Backend Architect & DevOps",
    image: "/placeholder.svg?height=200&width=200",
    email: "marcus@psybernerds.com",
    linkedin: "linkedin.com/in/marcusrodriguez",
    experience: "Former Backend Engineer at Netflix, 6+ years in scalable systems",
    specialties: ["Python", "AWS", "Microservices"],
  },
  {
    name: "Clinton Mgoduswa",
    position: "Mobile Development Lead",
    image: "/placeholder.svg?height=200&width=200",
    email: "emily@psybernerds.com",
    linkedin: "linkedin.com/in/emilywatson",
    experience: "Ex-Mobile Developer at Uber, 4+ years in cross-platform development",
    specialties: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    name: "Lusanda Gutswana",
    position: "Data Engineer & AI Specialist",
    image: "/placeholder.svg?height=200&width=200",
    email: "david@psybernerds.com",
    linkedin: "linkedin.com/in/davidkim",
    experience: "Former ML Engineer at Tesla, 5+ years in data science",
    specialties: ["Python", "Machine Learning", "Data Analytics"],
  },
  {
    name: "Unknown Guy",
    position: "Data Engineer & AI Specialist",
    image: "/placeholder.svg?height=200&width=200",
    email: "david@psybernerds.com",
    linkedin: "linkedin.com/in/davidkim",
    experience: "Former ML Engineer at Tesla, 5+ years in data science",
    specialties: ["Python", "Machine Learning", "Data Analytics"],
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Meet the Team
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
              The Minds Behind PsyberNerds
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nine passionate professionals who started as classmates and now lead the future of digital innovation and education.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Image
                    src={member.image}
                    width={120}
                    height={120}
                    alt={member.name}
                    className="rounded-full object-cover border-4 border-gradient-to-r from-blue-200 to-emerald-200"
                  />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium mb-3">{member.position}</CardDescription>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs">{member.experience}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {member.specialties.map((spec, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-3 mt-4 pt-4 border-t">
                  <Link
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-blue-600" />
                  </Link>
                  <Link
                    href={`https://${member.linkedin}`}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-emerald-600" />
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
