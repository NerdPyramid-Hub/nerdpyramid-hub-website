"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Users,
  MapPin,
  Calendar,
  Award,
  Target,
  MessageCircle,
  Phone,
  Building,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const companyStats = [
  {
    icon: <Calendar className="h-6 w-6 text-[#27548A]" />,
    title: "Founded 2023",
    description:
      "Started by passionate computer science students with big dreams",
  },
  {
    icon: <Users className="h-6 w-6 text-[#DDA853]" />,
    title: "5 Team Members",
    description: "Each bringing unique skills and expertise to every project",
  },
  {
    icon: <Award className="h-6 w-6 text-[#183B4E]" />,
    title: "50+ Projects",
    description: "Successful websites, apps, and digital solutions delivered",
  },
  {
    icon: <Building className="h-6 w-6 text-[#27548A]" />,
    title: "Based in South Africa",
    description: "Serving local businesses and international clients",
  },
];

const teamMembers = [
  {
    name: "Luvolwethu Tokwe",
    position: "Business Development Manager & Founder",
    image: "/luvolwethu.jpeg",
    email: "luvolwethu.tokwe@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/luvolwethu-tokwe-318584180/",
    specialty: "Business Strategy & Client Relations",
  },
  {
    name: "Clinton Mgoduswa",
    position: "Project Manager",
    image: "/clintonmgoduswa.jpeg",
    email: "clinton.mgoduswa@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/clinton-mgoduswa-bb461322b/",
    specialty: "Project Coordination & Quality Assurance",
  },
  {
    name: "Abulele Maqungo",
    position: "Business Analyst",
    image: "/abulele.jpeg",
    email: "abulele.maqungo@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/abulele-maqungo-53938b241",
    specialty: "Requirements Analysis & System Design",
  },
  {
    name: "Lusanda Gutswana",
    position: "Lead Developer",
    image: "/lusandaImg.jpeg",
    email: "lusanda.gutswana@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/lusanda-gutswana-926115220/",
    specialty: "Full-Stack Development & Architecture",
  },
  {
    name: "Sakhe Morosi",
    position: "Software Developer",
    image: "/sakhe.png",
    email: "sakhe.morosi@nerdpyramidhub.com",
    linkedin: "linkedin.com/in/sakhe-morosi-790854214/",
    specialty: "Frontend Development & UI/UX",
  },
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-[#F3F3E0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="rounded-full p-3 shadow-lg"
              style={{
                background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
              }}
            >
              <Building className="h-8 w-8 text-white" />
            </div>
            <h1
              className="text-4xl md:text-6xl font-extrabold"
              style={{ color: "#183B4E" }}
            >
              About Our Company
            </h1>
          </div>
          <div
            className="border-l-4 px-8 py-6 shadow-md rounded-lg max-w-4xl mx-auto bg-white"
            style={{ borderColor: "#DDA853" }}
          >
            <p
              className="text-lg md:text-xl font-semibold"
              style={{ color: "#27548A" }}
            >
              We're{" "}
              <span className="font-bold" style={{ color: "#DDA853" }}>
                NerdPyramid Hub
              </span>{" "}
              - a passionate team of developers and tech specialists committed
              to solving real business problems with smart digital solutions.
              <br />
              <span className="italic mt-2 block" style={{ color: "#183B4E" }}>
                Your success is our mission!
              </span>
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#183B4E]">
            Company Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-[#faf9f3] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6ECF3] flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#183B4E] mb-2">
                  {stat.title}
                </h3>
                <p className="text-[#27548A] text-sm">{stat.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section - More Detailed */}
        <section className="mb-16 bg-[#f3f2e6] rounded-xl p-8 shadow-md">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-[#DDA853] text-[#183B4E]"
            >
              <Users className="w-3 h-3 mr-1" />
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-[#183B4E] mb-4">
              Meet the People Behind the Code
            </h2>
            <p className="text-lg text-[#27548A] max-w-3xl mx-auto">
              We're not just developers - we're problem solvers, innovators, and
              your partners in digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-[#faf9f3] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="w-[100px] h-[100px] mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      width={100}
                      height={100}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#183B4E]">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-[#27548A] font-semibold mb-2">
                    {member.position}
                  </CardDescription>
                  <p className="text-sm text-[#27548A] italic mb-4">
                    {member.specialty}
                  </p>

                  <div className="flex justify-center space-x-3">
                    <Link
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E6ECF3] hover:bg-[#DDA853] transition-colors"
                    >
                      <Mail className="h-4 w-4 text-[#27548A]" />
                    </Link>
                    <Link
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E6ECF3] hover:bg-[#DDA853] transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-[#27548A]" />
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Working Hours & Contact Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <Card className="bg-[#faf9f3] rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-[#27548A] mr-3" />
                <h3 className="text-2xl font-bold text-[#183B4E]">
                  Working Hours
                </h3>
              </div>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-semibold text-[#183B4E]">
                      {schedule.day}
                    </span>
                    <span className="text-[#27548A]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#E6ECF3] rounded-lg">
                <p className="text-sm text-[#27548A]">
                  <strong>Need urgent support?</strong> WhatsApp us anytime -
                  we'll get back to you as soon as possible!
                </p>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="bg-[#faf9f3] rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-[#27548A] mr-3" />
                <h3 className="text-2xl font-bold text-[#183B4E]">
                  Get In Touch
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#27548A] mr-3" />
                  <span className="text-[#183B4E]">+27 79 015 3035</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#27548A] mr-3" />
                  <span className="text-[#183B4E]">
                    info@nerdpyramidhub.com
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#27548A] mr-3" />
                  <span className="text-[#183B4E]">South Africa</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  className="font-bold text-white hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                  onClick={() =>
                    window.open("https://wa.me/27790153035", "_blank")
                  }
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  className="font-bold border-2 border-[#27548A] text-[#27548A] hover:bg-[#27548A] hover:text-white"
                  onClick={() => window.open("tel:+27790153035", "_self")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick CTA */}
        <div
          className="text-white rounded-3xl p-8 shadow-2xl text-center"
          style={{
            background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with the right
            technology
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="font-bold hover:opacity-90"
              style={{ backgroundColor: "#DDA853", color: "#183B4E" }}
            >
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
