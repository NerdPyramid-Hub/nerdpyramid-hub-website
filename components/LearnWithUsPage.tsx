"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Code,
  Database,
  Clock,
  Users,
  Star,
  ArrowRight,
  Globe,
  X
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const learningPrograms = [
  {
    id: "java-programming",
    title: "Java Programming",
    description:
      "Master Java from basics to advanced object-oriented programming",
    icon: Code,
    duration: "10 weeks",
    level: "Beginner to Advanced",
    technologies: ["Java", "OOP", "Spring Framework", "Maven", "JUnit"],
    price: "R3,999",
    highlights: [
      "Object-oriented programming mastery",
      "Build enterprise applications",
      "Industry-standard practices",
      "Real-world coding projects",
    ],
  },
  {
    id: "web-development",
    title: "Web Development Fundamentals",
    description: "Learn the essential web technologies for modern websites",
    icon: Globe,
    duration: "8 weeks",
    level: "Complete Beginner",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM"],
    price: "R2,999",
    highlights: [
      "Build responsive websites",
      "Interactive web applications",
      "Modern CSS techniques",
      "JavaScript fundamentals",
    ],
  },
  {
    id: "sql-database",
    title: "SQL & Database Management",
    description: "Master database design and SQL queries for data management",
    icon: Database,
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design", "Queries"],
    price: "R2,499",
    highlights: [
      "Database design principles",
      "Complex SQL queries",
      "Data analysis techniques",
      "Real database projects",
    ],
  },
  {
    id: "assignment-assistance",
    title: "Assignment Assistance",
    description:
      "Get expert help with your programming assignments and projects",
    icon: BookOpen,
    duration: "Flexible",
    level: "All Levels",
    technologies: ["Java", "HTML/CSS/JS", "SQL", "Debugging", "Code Review"],
    price: "R150 per Assgnmt",
    highlights: [
      "One-on-one tutoring sessions",
      "Code review and debugging",
      "Assignment completion help",
      "Concept explanation and guidance",
    ],
  },
];

export default function LearnWithUsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEnroll = (programId: string) => {
    setSelectedProgram(programId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedProgram(null);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-[#F3F3E0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-[#27548A] rounded-full p-3 shadow-lg">
              <BookOpen className="h-8 w-8 text-[#F3F3E0]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#183B4E]">
              Learn With Us
            </h1>
          </div>
          <div className="border-l-4 border-[#DDA853] bg-white px-8 py-6 shadow-md rounded-lg max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#27548A] font-semibold">
              Transform your career with our <span className="font-bold text-[#183B4E]">industry-focused</span> learning programs.<br />
              From coding fundamentals to advanced AI, we'll guide you every step of the way.
              <span className="italic text-[#DDA853] mt-2 block">Choose your path to success!</span>
            </p>
          </div>
        </div>

        {/* Learning Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {learningPrograms.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card
                key={program.id}
                className="bg-white shadow-lg border border-[#F3F3E0] hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#27548A] rounded-full p-3 shadow">
                      <IconComponent className="h-8 w-8 text-[#F3F3E0]" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#183B4E]">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-[#27548A] text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-[#27548A]">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <Badge variant="outline" className="text-[#27548A] border-[#27548A]">
                      {program.level}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#183B4E]">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-[#DDA853]/10 text-[#DDA853]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#183B4E]">What you'll get:</h4>
                    <ul className="space-y-1 text-sm text-[#27548A]">
                      {program.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-[#DDA853]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#183B4E]">
                        {program.price}
                      </span>
                      {program.price !== "Contact Us" && (
                        <span className="text-sm text-[#27548A]">
                          one-time payment
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => handleEnroll(program.id)}
                      className="w-full bg-[#27548A] text-[#F3F3E0] font-bold hover:bg-[#183B4E] transition-all duration-300"
                    >
                      Enroll Now <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enrollment Modal */}
        {selectedProgram && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
    <div className="max-w-xl w-full bg-[#F3F3E0] rounded-2xl p-8 shadow-2xl border-2 border-[#27548A]">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#183B4E]">
          Enrollments are Closed
        </h2>
        <p className="text-[#27548A] text-lg font-medium">
          Thank you for your interest in our learning programs!
        </p>
        <p className="text-[#183B4E]/80 text-base">
          We’re currently preparing exciting new sessions. Enrollments will reopen on{" "}
          <span className="font-semibold text-[#DDA853]">01 August 2025</span>.
        </p>
        <p className="italic text-[#27548A] mt-2">
          Stay tuned and keep coding — the future is bright! 🌟
        </p>
        <button
          onClick={() => setSelectedProgram(null)}
          className="mt-6 px-6 py-2 rounded-lg bg-[#27548A] text-white font-semibold hover:bg-[#183B4E] transition-all duration-300"
        >
          Back to Programs
        </button>
      </div>
    </div>
  </div>
)}

        {/* {selectedProgram && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
            <div className="bg-white max-w-2xl w-full rounded-xl shadow-2xl p-8 border border-[#F3F3E0] relative">
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 text-[#27548A] hover:text-[#183B4E]"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#183B4E] mb-2">
                  Ready to Start Learning?
                </h2>
                <p className="text-[#27548A]">
                  You selected: <span className="font-semibold text-[#DDA853]">{learningPrograms.find((p) => p.id === selectedProgram)?.title}</span>
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#27548A] font-semibold mb-2" htmlFor="fullName">Full Name</label>
                  <input id="fullName" type="text" required className="w-full px-4 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-[#27548A] font-semibold mb-2" htmlFor="email">Email Address</label>
                  <input id="email" type="email" required className="w-full px-4 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[#27548A] font-semibold mb-2" htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" required className="w-full px-4 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg" placeholder="+27 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-[#27548A] font-semibold mb-2" htmlFor="experience">Current Experience Level</label>
                  <select id="experience" required className="w-full px-4 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg">
                    <option value="">Select your level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#27548A] font-semibold mb-2" htmlFor="goals">Learning Goals & Questions</label>
                  <textarea id="goals" rows={4} className="w-full px-4 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg" placeholder="Tell us about your goals, questions, or any specific topics you'd like to focus on..." />
                </div>
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setSelectedProgram(null)} className="flex-1 border-[#27548A] text-[#27548A] hover:bg-[#F3F3E0]">Back</Button>
                  <Button type="submit" className="flex-1 bg-[#27548A] text-[#F3F3E0] font-bold hover:bg-[#183B4E] transition-all duration-300">
                    {formSubmitted ? (
                      <span className="flex items-center gap-2">
                        Enrolled! <span className="animate-bounce">🎉</span>
                      </span>
                    ) : (
                      <>
                        Submit Enrollment <Users className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )} */}

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-[#183B4E] text-[#F3F3E0] rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 text-[#F3F3E0]/90">
              Our learning advisors are here to help you choose the perfect program
            </p>
            <Link href="/contact-us">
              <Button size="lg" variant="secondary" className="bg-[#DDA853] text-[#183B4E] hover:bg-[#c7983f] font-bold">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
