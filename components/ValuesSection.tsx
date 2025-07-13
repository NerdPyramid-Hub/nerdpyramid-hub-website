"use client";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "What You Order Is What You Get",
      description:
        "We deliver on our promises, no surprises, no shortcuts. Transparency and reliability are our core values.",
    },
    {
      title: "High-Quality Solutions",
      description:
        "We deliver digital solutions that solve real problems and serve real needs with exceptional quality.",
    },
    {
      title: "Clear Communication",
      description:
        "We communicate clearly and honestly, keeping our clients informed and involved every step of the way.",
    },
    {
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
            Trust is not something we take lightly. It's the foundation we were built on — doing things the right way,
            with clarity, consistency, and care.
          </p>
        </div>

        {/* Value Cards */}
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#fffffc] border border-[#f7f7e6] rounded-xl shadow-lg p-8 hover:shadow-lg transition-shadow h-full"
            >
              <div className="flex items-center mb-3">
                <CheckCircle className="h-6 w-6 text-[#27548A] mr-2 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-[#183B4E]">{item.title}</h3>
              </div>
              <hr className="w-full border-t border-[#E8E8D0] mb-3" />
              <p className="text-lg text-[#27548A] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
