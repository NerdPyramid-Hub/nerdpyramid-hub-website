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
  Smartphone,
  Globe,
  Brain,
  Clock,
  Users,
  Star,
  ArrowRight,
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
    price: "R150/hour",
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
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full p-3 shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800">
              Learn With Us
            </h1>
          </div>
          <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 border-l-4 border-blue-500 px-8 py-6 shadow-md rounded-lg max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-slate-700 font-semibold">
              Transform your career with our{" "}
              <span className="font-bold text-blue-600">industry-focused</span>{" "}
              learning programs.
              <br />
              From coding fundamentals to advanced AI, we'll guide you every
              step of the way.
              <span className="italic text-emerald-600 mt-2 block">
                Choose your path to success!
              </span>
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
                className="bg-white/95 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full p-3 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-slate-600">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-200"
                    >
                      {program.level}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {program.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-emerald-100 text-emerald-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">
                      What you'll get:
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {program.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-emerald-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-slate-800">
                        {program.price}
                      </span>
                      {program.price !== "Contact Us" && (
                        <span className="text-sm text-slate-500">
                          one-time payment
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => handleEnroll(program.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                    >
                      {program.price === "Contact Us"
                        ? "Get Custom Quote"
                        : "Enroll Now"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enrollment Form */}
        {selectedProgram && (
          <div className="max-w-2xl mx-auto bg-white/95 rounded-3xl shadow-2xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Ready to Start Learning?
              </h2>
              <p className="text-slate-600">
                You selected:{" "}
                <span className="font-semibold text-blue-600">
                  {
                    learningPrograms.find((p) => p.id === selectedProgram)
                      ?.title
                  }
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div>
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="experience"
                >
                  Current Experience Level
                </label>
                <select
                  id="experience"
                  required
                  className="w-full px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg"
                >
                  <option value="">Select your level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-slate-700 font-semibold mb-2"
                  htmlFor="goals"
                >
                  Learning Goals & Questions
                </label>
                <textarea
                  id="goals"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg"
                  placeholder="Tell us about your goals, questions, or any specific topics you'd like to focus on..."
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedProgram(null)}
                  className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-50"
                >
                  Back to Programs
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300"
                >
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
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Our learning advisors are here to help you choose the perfect
              program
            </p>
            <Link href="/ContactUs">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
