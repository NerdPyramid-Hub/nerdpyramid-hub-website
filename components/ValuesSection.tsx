"use client";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "What You Order Is What You Get",
      description:
        "We deliver on our promises, no surprises, no shortcuts. Transparency and reliability are our core values.",
    },
    {
      number: "02",
      title: "High-Quality Solutions",
      description:
        "We deliver digital solutions that solve real problems and serve real needs with exceptional quality.",
    },
    {
      number: "03",
      title: "Clear Communication",
      description:
        "We communicate clearly and honestly, keeping our clients informed and involved every step of the way.",
    },
    {
      number: "04",
      title: "Impact-Focused",
      description:
        "We care deeply about impact — not just shipping software, but creating lasting value that supports your goals.",
    },
  ];

  return (
    <section id="values" className="w-full py-16 md:py-24 lg:py-32 bg-[#fafaef]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-[#DDA853] text-[#183B4E]">
            <Shield className="w-3 h-3 mr-1" />
            Why Trust Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-[#183B4E]">
            Built on Trust & Excellence
          </h2>
          <p className="max-w-2xl text-[#27548A] text-lg md:text-xl leading-relaxed">
            Trust is not something we take lightly. It&apos;s the foundation we were built on — doing things the right way,
            with clarity, consistency, and care.
          </p>
        </div>

        {/* Value Cards */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-2">
          {values.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border-l-4 border-[#DDA853] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-black text-[#DDA853]/20 leading-none group-hover:text-[#DDA853]/35 transition-colors duration-300 flex-shrink-0">
                  {item.number}
                </span>
                <div className="flex items-center gap-2 pt-1">
                  <CheckCircle className="h-5 w-5 text-[#27548A] flex-shrink-0" />
                  <h3 className="text-xl font-bold text-[#183B4E] leading-tight">{item.title}</h3>
                </div>
              </div>
              <hr className="w-full border-t border-[#E8E8D0] mb-4" />
              <p className="text-[#27548A] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
