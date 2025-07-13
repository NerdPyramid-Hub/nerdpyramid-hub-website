import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Luvolwethu Tokwe",
    position: "Business Development Manager & Founder",
    image: "/luvolwethu.jpeg",
    email: "luvolwethu.tokwe@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/luvolwethu-tokwe-318584180/",
  },
  {
    name: "Clinton Mgoduswa",
    position: "Project Manager",
    image: "/clintonmgoduswa.jpeg",
    email: "clinton.mgoduswa@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/clinton-mgoduswa-bb461322b/",
  },
  {
    name: "Abulele Maqungo",
    position: "Business Analyst",
    image: "/abulele.jpeg",
    email: "abulele.maqungo@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/abulele-maqungo-53938b241",
  },
  {
    name: "Lusanda Gutswana",
    position: "Lead Developer",
    image: "/lusandaImg.jpeg",
    email: "lusanda.gutswana@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/lusanda-gutswana-926115220/",
  },
  {
    name: "Sakhe Morosi",
    position: "Software Developer",
    image: "/sakhe.png",
    email: "sakhe.morosi@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-[#f3f2e6]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-2 bg-[#DDA853] text-[#183B4E]">
            <Users className="w-3 h-3 mr-1" />
            Meet the Team
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-[#183B4E]">
            The Minds Behind NerdPyramid Hub
          </h2>
          <p className="max-w-2xl text-[#27548A] text-lg md:text-xl leading-relaxed">
            Five passionate professionals who started as classmates and now
            lead the future of digital innovation and education.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-7xl gap-8 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-[#faf9f3] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col w-full max-w-sm"
            >
              <CardHeader className="text-center flex-1 flex flex-col">
                {/* Profile Image */}
                <div className="mx-auto mb-4">
                  <div className="w-[120px] h-[120px] mx-auto rounded-full overflow-hidden shadow-lg flex items-center justify-center">
                    <Image
                      src={member.image}
                      width={120}
                      height={120}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <CardTitle className="text-xl font-semibold text-[#183B4E] mb-1">
                  {member.name}
                </CardTitle>
                <div className="h-1 w-12 bg-[#DDA853] rounded mx-auto mb-3" />
                <CardDescription className="text-[#27548A] font-bold text-base mb-4">
                  {member.position}
                </CardDescription>

                {/* Contact Icons */}
                <div className="flex justify-center space-x-3 mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6ECF3] hover:bg-[#DDA853] transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#27548A]" />
                  </Link>
                  <Link
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E6ECF3] hover:bg-[#DDA853] transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-[#27548A]" />
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
