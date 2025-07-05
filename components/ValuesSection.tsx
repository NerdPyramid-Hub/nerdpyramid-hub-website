// components/ValuesSection.tsx
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield } from "lucide-react"
import Image from "next/image"

export default function ValuesSection() {
  return (
    <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Why Trust Us
            </Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">Built on Trust & Excellence</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trust isn't something we take lightly—it's the foundation we were built on. We believe in doing things
              the right way, with clarity, consistency, and care.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <div className="grid gap-6">
            {[
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
                  "We care deeply about impact, not just shipping software but creating lasting value that supports your goals.",
              },
            ].map((item, index) => (
              <div className="flex items-start space-x-4" key={index}>
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center shadow-green-200 shadow-2xl rounded-lg">
            <Image
              src="\built_on_trust_img.png"
              width={500}
              height={200}
              alt="Trust and reliability"
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}