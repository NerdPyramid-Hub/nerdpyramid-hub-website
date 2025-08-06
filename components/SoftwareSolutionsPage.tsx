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
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Monitor,
  Cloud,
  Settings,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const softwareServices = [
  {
    id: "websites",
    title: "Modern Websites",
    description:
      "Stunning, fast, and mobile-responsive websites that convert visitors into customers",
    icon: Globe,
    features: [
      "React/Next.js",
      "Mobile-First Design",
      "SEO Optimized",
      "Lightning Fast",
    ],
    examples: [
      "Hair Salon & Beauty",
      "Restaurant & Food",
      "Selling Products",
      "Professional Services",
      "Personal Portfolio",
    ],
  },
  {
    id: "web-apps",
    title: "Web Applications",
    description:
      "Powerful web apps that solve real business problems and streamline operations",
    icon: Monitor,
    features: [
      "Custom Logic",
      "User Authentication",
      "Real-time Updates",
      "Cloud Hosting",
    ],
    examples: [
      "Inventory Management",
      "Employee Scheduling",
      "Customer Portal",
      "Booking System",
      "Financial Tracker",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description:
      "Intelligent chatbots that handle customer inquiries 24/7 and boost sales",
    icon: MessageCircle,
    features: [
      "Natural Language",
      "24/7 Availability",
      "Lead Generation",
      "Multi-Platform",
    ],
    examples: [
      "Customer Support",
      "Lead Generation",
      "FAQ Assistant",
      "Order Taking",
      "Appointment Booking",
    ],
  },
  {
    id: "voice-agents",
    title: "Voice Agents",
    description:
      "AI-powered voice assistants that handle calls and appointments automatically",
    icon: Phone,
    features: [
      "Natural Speech",
      "Call Handling",
      "Appointment Booking",
      "CRM Integration",
    ],
    examples: [
      "Reception Assistant",
      "Appointment Scheduler",
      "Customer Service",
      "Sales Calls",
      "Follow-up Calls",
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connect your systems seamlessly with powerful API integrations and automation",
    icon: Settings,
    features: [
      "System Integration",
      "Data Synchronization",
      "Process Automation",
      "Real-time Updates",
    ],
    examples: [
      "Payment Processing",
      "CRM Integration",
      "Email Automation",
      "Social Media Sync",
      "Analytics Dashboard",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Modern Technologies",
    description:
      "We use cutting-edge tools and frameworks to build future-proof solutions",
  },
  {
    icon: Users,
    title: "Student-Friendly Pricing",
    description:
      "Affordable solutions and flexible payment options for students and startups",
  },
  {
    icon: Settings,
    title: "End-to-End Support",
    description: "From initial concept to deployment and ongoing maintenance",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready Solutions",
    description:
      "Scalable applications designed for modern cloud infrastructure",
  },
];

export default function SoftwareSolutionsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleGetQuote = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setFormSubmitted(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedService(null);
    }, 3000);
  };

  const allServices = [...softwareServices];

  return (
    <section className="min-h-screen py-16 px-4 bg-[#f3f2e6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-16 relative">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 rounded-3xl opacity-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/b3e651806bc8855e11bb8b495b8d784f06337564.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#27548A]/20 to-[#183B4E]/20 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10 py-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div
                className="rounded-full p-3 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
                }}
              >
                <Code className="h-8 w-8 text-white" />
              </div>
              <h1
                className="text-4xl md:text-6xl font-extrabold"
                style={{ color: "#183B4E" }}
              >
                Software Solutions That Work
              </h1>
            </div>
            <div
              className="border-l-4 px-8 py-6 shadow-md rounded-lg max-w-4xl mx-auto bg-white/95 backdrop-blur-sm"
              style={{ borderColor: "#DDA853" }}
            >
              <p
                className="text-lg md:text-xl font-semibold"
                style={{ color: "#27548A" }}
              >
                Stop struggling with outdated tech!{" "}
                <span className="font-bold" style={{ color: "#DDA853" }}>
                  We build digital solutions that actually solve problems
                </span>{" "}
                and make your business run smoother.
                <br />
                From stunning websites to AI chatbots - we've got the tech
                skills to transform your ideas into reality.
                <span
                  className="italic mt-2 block"
                  style={{ color: "#183B4E" }}
                >
                  Ready to level up? Let's build something amazing together! 🚀
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Software Development Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#183B4E]">
            What We Build
          </h2>
          <p className="text-center text-lg text-[#27548A] mb-12 max-w-3xl mx-auto">
            From simple websites to complex AI solutions - we create digital
            tools that actually work for your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#faf9f3]"
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F3F3E0] mb-4 mx-auto">
                      <IconComponent className="h-6 w-6 text-[#27548A]" />
                    </div>
                    <CardTitle className="text-[#183B4E] text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#183B4E] text-center mb-4">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-[#183B4E] mb-3 text-center text-sm uppercase tracking-wide">
                          Perfect for:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.examples.map((example, index) => (
                            <div
                              key={example}
                              className="flex items-center p-2 rounded-lg bg-gray-100 border-l-4 border-[#2b4452] hover:bg-gray-100 transition-colors"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#27548A] mr-2"></div>
                              <span className="text-xs font-medium text-[#183B4E]">
                                {example}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#183B4E]">
            Why Choose NerdPyramid Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl bg-[#faf9f3]"
                >
                  <CardHeader className="text-center p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F3F3E0] to-[#E8F5E8] mb-4 mx-auto shadow-md">
                      <IconComponent className="h-8 w-8 text-[#27548A]" />
                    </div>
                    <CardTitle className="text-[#183B4E] text-center mb-3 text-lg">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-[#183B4E] text-center leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quote Form Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleModalClick}
          >
            <div className="max-w-2xl w-full bg-[#faf9f3] rounded-xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2 text-[#183B4E]">
                  Get Your Free Quote
                </h2>
                <p className="text-[#27548A]">
                  Service selected:{" "}
                  <span className="font-semibold text-[#DDA853]">
                    {allServices.find((s) => s.id === selectedService)?.title}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-semibold mb-2 text-[#183B4E]"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-semibold mb-2 text-[#183B4E]"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-semibold mb-2 text-[#183B4E]"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className="block font-semibold mb-2 text-[#183B4E]"
                    htmlFor="projectType"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    required
                    className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select project type</option>
                    <option value="website">Business Website</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="database">Database Solution</option>
                    <option value="education">Coding Education</option>
                    <option value="mentorship">Personal Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-semibold mb-2 text-[#183B4E]"
                    htmlFor="requirements"
                  >
                    Project Requirements & Budget
                  </label>
                  <textarea
                    id="requirements"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us about your project goals, features needed, timeline, budget range, etc."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseModal}
                    className="flex-1 border-2 border-[#27548A] text-[#27548A] hover:bg-[#27548A] hover:text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 text-white font-bold hover:opacity-90 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
                    }}
                  >
                    {formSubmitted ? (
                      <span className="flex items-center gap-2">
                        Quote Sent! <span className="animate-bounce">🎉</span>
                      </span>
                    ) : (
                      <>
                        Request Quote <Code className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div
          className="text-white rounded-3xl p-8 shadow-2xl text-center"
          style={{
            background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
          }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you need a website, mobile app, or want to learn coding -
            let's turn your ideas into reality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+27 79 015 3035</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">info@nerdpyramidhub.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-bold text-white hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
              onClick={() => window.open("https://wa.me/27790153035", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              className="font-bold text-white hover:opacity-90"
              style={{
                backgroundColor: "#DDA853",
                border: "2px solid #DDA853",
              }}
              onClick={() => window.open("tel:+27790153035", "_self")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +27 79 015 3035
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
