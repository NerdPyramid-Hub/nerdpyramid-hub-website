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
  Shield,
  Camera,
  Smartphone,
  Clock,
  Users,
  Star,
  ArrowRight,
  Eye,
  Wifi,
  Monitor,
  Settings,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Home,
  MessageCircle,
  Code,
  Send,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const cctvServices = [
  {
    id: "student-res-security",
    title: "Student Residence Security",
    description:
      "Affordable CCTV solutions for res rooms and shared accommodations to prevent theft",
    icon: GraduationCap,
    features: [
      "Compact Cameras",
      "Mobile Alerts",
      "Motion Detection",
      "Affordable Monitoring",
    ],
    price: "From R899",
    highlights: [
      "Protect your belongings from theft",
      "Monitor who enters your room",
      "Shared cost solutions for flatmates",
      "Easy installation in res rooms",
    ],
  },
  {
    id: "single-room-security",
    title: "Single Room Protection",
    description:
      "Discreet security cameras for single rooms, flats, and rental accommodations",
    icon: Home,
    features: [
      "Mini Cameras",
      "WiFi Connectivity",
      "Night Vision",
      "Phone Notifications",
    ],
    price: "From R1,299",
    highlights: [
      "Perfect for rental properties",
      "Landlord-approved installations",
      "Monitor visitors and deliveries",
      "Evidence collection for incidents",
    ],
  },
  {
    id: "residential-security",
    title: "Family Home Security",
    description:
      "Comprehensive home security systems for houses and family properties",
    icon: Shield,
    features: [
      "HD/4K Cameras",
      "Professional DVR",
      "Multiple Zones",
      "Cloud Backup",
    ],
    price: "From R4,999",
    highlights: [
      "Whole property coverage",
      "Professional installation",
      "Family safety monitoring",
      "Insurance claim support",
    ],
  },
  {
    id: "business-security",
    title: "Business & Commercial",
    description:
      "Advanced security solutions for offices, shops, and commercial properties",
    icon: Monitor,
    features: [
      "Multi-Camera Systems",
      "Analytics",
      "Access Control",
      "Remote Monitoring",
    ],
    price: "From R12,999",
    highlights: [
      "Employee and asset protection",
      "Customer behavior insights",
      "Theft prevention and evidence",
      "Scalable business solutions",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Settings,
    title: "Professional Installation",
    description:
      "Our certified technicians ensure optimal camera placement and system configuration",
  },
  {
    icon: Smartphone,
    title: "Mobile App Control",
    description:
      "Monitor your property from anywhere with our user-friendly mobile applications",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
  },
  {
    icon: Shield,
    title: "Student-Friendly Solutions",
    description:
      "Affordable options specifically designed for students and young professionals",
  },
];

export default function CCTVServicesPage() {
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
    // Close modal if clicking on the backdrop
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const data = {
    service: cctvServices.find((s) => s.id === selectedService)?.title || '',
    fullName: (form.elements.namedItem("fullName") as HTMLInputElement)?.value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
    email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
    property: (form.elements.namedItem("property") as HTMLSelectElement)?.value,
    requirements: (form.elements.namedItem("requirements") as HTMLTextAreaElement)?.value,
  };

  try {
    const response = await fetch('https://formspree.io/f/xvgqpown', { // <-- replace yourFormId here
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Quote Sent!',
        text: 'Thank you for your request. We will get back to you shortly.',
      });
      form.reset();
      // Optionally close modal:
      handleCloseModal();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong. Please try again later.',
    });
  }
}

  return (
    <section className="min-h-screen py-16 px-4 bg-[#f3f2e6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-16 relative">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 rounded-3xl opacity-50 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/cctv.jpg')`,
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
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h1
                className="text-4xl md:text-6xl font-extrabold"
                style={{ color: "#183B4E" }}
              >
                CCTV Security Solutions
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
                Protect what matters most with our{" "}
                <span className="font-bold" style={{ color: "#DDA853" }}>
                  professional CCTV installation
                </span>{" "}
                services.
                <br />
                From student res rooms to family homes and businesses - we've
                got you covered.
                <span
                  className="italic mt-2 block"
                  style={{ color: "#183B4E" }}
                >
                  Peace of mind, 24/7!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cctvServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="bg-[#faf9f3] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <CardHeader className="text-center flex-1 flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div
                      className="rounded-full p-3 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#183B4E] mb-1">
                    {service.title}
                  </CardTitle>
                  <div className="h-1 w-12 bg-[#DDA853] rounded mx-auto mb-3" />
                  <CardDescription className="text-[#27548A] font-bold text-base mb-4">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-4 mt-auto">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#183B4E]">
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs bg-[#DDA853] text-[#183B4E]"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#183B4E]">
                        What's included:
                      </h4>
                      <ul className="space-y-1 text-sm text-[#27548A]">
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-[#DDA853]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[#183B4E]">
                          {service.price}
                        </span>
                        <span className="text-sm text-[#27548A]">
                          installation included
                        </span>
                      </div>
                      <Button
                        onClick={() => handleGetQuote(service.id)}
                        className="w-full text-white font-bold hover:opacity-90 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, #27548A 0%, #183B4E 100%)`,
                        }}
                      >
                        Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
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
                  className="bg-[#faf9f3] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col text-center"
                >
                  <CardHeader className="text-center flex-1 flex flex-col">
                    <div className="flex justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E6ECF3] hover:bg-[#DDA853] transition-colors flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#27548A]" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-[#183B4E] mb-1">
                      {item.title}
                    </CardTitle>
                    <div className="h-1 w-12 bg-[#DDA853] rounded mx-auto mb-3" />
                    <CardDescription className="text-[#27548A] font-bold text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Student Focus Section */}
        <div className="mb-16 bg-[#faf9f3] rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6ECF3]">
                <GraduationCap className="h-8 w-8 text-[#DDA853]" />
              </div>
              <h2 className="text-3xl font-bold text-[#183B4E]">
                Special Student Solutions
              </h2>
            </div>
            <p className="text-lg text-[#27548A]">
              We understand the unique security challenges students face. Theft
              in res rooms and shared accommodations is a real problem - let us
              help you protect your belongings affordably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6ECF3] mx-auto mb-4">
                <Users className="h-8 w-8 text-[#DDA853]" />
              </div>
              <h3 className="font-bold mb-2 text-[#183B4E]">Shared Costs</h3>
              <p className="text-sm text-[#27548A]">
                Split installation costs with flatmates for budget-friendly
                security
              </p>
            </div>
            <div className="text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6ECF3] mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#DDA853]" />
              </div>
              <h3 className="font-bold mb-2 text-[#183B4E]">
                Theft Prevention
              </h3>
              <p className="text-sm text-[#27548A]">
                Monitor your room and belongings when you're in class or away
              </p>
            </div>
            <div className="text-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6ECF3] mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-[#DDA853]" />
              </div>
              <h3 className="font-bold mb-2 text-[#183B4E]">Mobile Alerts</h3>
              <p className="text-sm text-[#27548A]">
                Get instant notifications on your phone when motion is detected
              </p>
            </div>
          </div>
        </div>
{/*Get Quote Modal */}
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
          Service selected:{' '}
          <span className="font-semibold text-[#DDA853]">
            {cctvServices.find((s) => s.id === selectedService)?.title}
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
              name="fullName"
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
              name="phone"
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
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-[#183B4E]"
            htmlFor="property"
          >
            Property Type
          </label>
          <select
            id="property"
            name="property"
            required
            className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select property type</option>
            <option value="student-res">Student Residence Room</option>
            <option value="single-room">Single Room/Flat</option>
            <option value="shared-accommodation">
              Shared Accommodation
            </option>
            <option value="family-home">Family Home</option>
            <option value="apartment">Apartment/Complex</option>
            <option value="business">Business/Office</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            className="block font-semibold mb-2 text-[#183B4E]"
            htmlFor="requirements"
          >
            Security Requirements & Questions
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={4}
            className="w-full px-4 py-3 border-2 border-[#27548A] outline-none transition shadow-sm rounded-lg focus:border-[#DDA853] focus:ring-2 focus:ring-blue-200"
            placeholder="Tell us about your security needs, budget concerns, areas to cover, specific theft concerns, etc."
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
                Request Quote <Camera className="h-4 w-4 ml-2" />
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
  className="text-white rounded-3xl p-8 shadow-2xl text-center mb-16 bg-[#183B4E]"
>
  {/* Header */}
  <h2 className="text-3xl font-bold mb-6">
    Ready to Secure Your Space?
  </h2>

  {/* Description */}
  <p className="text-xl mb-8 opacity-90">
    Whether you're a student, renter, or homeowner - we have affordable security solutions for everyone
  </p>

  {/* Contact Buttons */}
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
    <Button
      size="lg"
      className="font-bold text-white hover:opacity-90"
      style={{ backgroundColor: "#4CAF50" }}
      onClick={() => window.open("mailto:info@nerdpyramidhub.com", "_blank")}
    >
      <Mail className="h-5 w-5 mr-2" />
      Email Us
    </Button>
  </div>
</div>

{/* Contact Form Section */}
<div className="mb-16 bg-[#faf9f3] rounded-xl shadow-md p-8">
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6ECF3]">
        <MessageSquare className="h-8 w-8 text-[#DDA853]" />
      </div>
      <h2 className="text-3xl font-bold text-[#183B4E]">
        Get In Touch
      </h2>
    </div>
    <p className="text-lg text-[#27548A] max-w-2xl mx-auto">
      Have questions or ready to start your security project? Fill out the form below
      and we'll get back to you within 24 hours.
    </p>
  </div>

  <form 
    className="max-w-2xl mx-auto space-y-6"
    action="https://formspree.io/f/xvgqpown" 
    method="POST"
  >
    <input type="hidden" name="_subject" value="New Project Inquiry" />
    <input type="hidden" name="form_name" value="ContactUsPage" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name Field */}
      <div>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-5 py-3 text-lg border border-gray-200 focus:border-[#DDA853] focus:ring-2 focus:ring-[#DDA853]/30 rounded-lg bg-white placeholder-[#183B4E]/70"
          placeholder="Your Name"
        />
      </div>

      {/* Email Field */}
      <div>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-5 py-3 text-lg border border-gray-200 focus:border-[#DDA853] focus:ring-2 focus:ring-[#DDA853]/30 rounded-lg bg-white placeholder-[#183B4E]/70"
          placeholder="Email Address"
        />
      </div>
    </div>

    {/* Message Field - Now with just placeholder text */}
    <div>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        className="w-full px-5 py-3 text-lg border border-gray-200 focus:border-[#DDA853] focus:ring-2 focus:ring-[#DDA853]/30 rounded-lg bg-white min-h-[150px] placeholder-[#183B4E]/70"
        placeholder="Tell us about your security needs..."
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="pt-2">
      <Button
        type="submit"
        className="w-full font-semibold text-white bg-[#27548A] hover:bg-[#183B4E] py-4 text-lg"
      >
        <Send className="h-5 w-5 mr-2" />
        Send Message
      </Button>
    </div>
  </form>
</div>
      </div>
    </section>
  );
}
