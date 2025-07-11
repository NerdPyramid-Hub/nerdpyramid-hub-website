import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Mail, Linkedin, Users, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Luvolwethu Tokwe",
    position: "Lead Developer & Co-Founder",
    image: "/placeholder.svg?height=200&width=200",
    email: "luvolwethu.tokwe@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    experience:
      "Former Software Engineer at Google, 5+ years in full-stack development",
    specialties: ["React", "Node.js", "Cloud Architecture"],
  },
  {
    name: "Sakhe Morosi",
    position: "UI/UX Designer & Frontend Lead",
    image: "/placeholder.svg?height=200&width=200",
    email: "morosisakhe@gmail.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    experience: "Ex-Design Lead at Spotify, 4+ years in product design",
    specialties: ["UI/UX Design", "React", "Design Systems"],
  },
  {
    name: "Abulele Maqungo",
    position: "Backend Architect & DevOps",
    image: "/placeholder.svg?height=200&width=200",
    email: "abulele.maqungo@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    experience:
      "Former Backend Engineer at Netflix, 6+ years in scalable systems",
    specialties: ["Python", "AWS", "Microservices"],
  },
  {
    name: "Clinton Mgoduswa",
    position: "Mobile Development Lead",
    image: "/placeholder.svg?height=200&width=200",
    email: "clinton.mgoduswa@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    experience:
      "Ex-Mobile Developer at Uber, 4+ years in cross-platform development",
    specialties: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    name: "Lusanda Gutswana",
    position: "Data Engineer & AI Specialist",
    image: "/placeholder.svg?height=200&width=200",
    email: "lusanda.gutswana@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    experience: "Former ML Engineer at Tesla, 5+ years in data science",
    specialties: ["Python", "Machine Learning", "Data Analytics"],
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-emerald-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Meet the Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The Minds Behind NerdPyramid Hub
            </h2>
            <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Five passionate professionals who started as classmates and now
              lead the future of digital innovation and education.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <CardHeader className="text-center flex-1 flex flex-col">
                <div className="mx-auto mb-4">
                  <Image
                    src={member.image}
                    width={120}
                    height={120}
                    alt={member.name}
                    className="rounded-full object-cover border-4 border-gradient-to-r from-blue-200 to-emerald-200"
                  />
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold text-sm mb-4 min-h-[2.5rem] flex items-center justify-center">
                  {member.position}
                </CardDescription>

                <div className="space-y-3 text-gray-600 flex-1">
                  <div className="flex items-start justify-center space-x-2">
                    <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed text-center">
                      {member.experience}
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {member.specialties.map((spec, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-blue-600" />
                  </Link>
                  <Link
                    href={`https://${member.linkedin}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-emerald-600" />
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}

          {/* Call to Action Card */}
          <Link href="/team">
            <Card
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col bg-gradient-to-br from-blue-600 to-emerald-600 text-white cursor-pointer animate-pulse hover:animate-none"
              style={{ animationDuration: "9s" }}
            >
              <CardHeader className="text-center flex-1 flex flex-col justify-center">
                <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-4 text-white">
                  Meet Our Full Team
                </CardTitle>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    Discover the complete story behind our journey from
                    classmates to changemakers
                  </p>
                  <div className="inline-flex items-center justify-center bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                    Click here to Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "9s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "10" }}
                    ></div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
