// components/ContactSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #27548A 0%, #1a3a6b 50%, #183B4E 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#DDA853]/10 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#DDA853]" />
            <span className="text-sm font-semibold text-[#F3F3E0]">Let&apos;s Work Together</span>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#F3F3E0] leading-tight">
              Ready to Build Your{" "}
              <span className="text-[#DDA853]">Digital Future?</span>
            </h2>
            <p className="text-[#F3F3E0]/75 text-lg md:text-xl leading-relaxed">
              Join us in creating meaningful digital solutions while learning and growing together. Let&apos;s turn your ideas into reality.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col min-[400px]:flex-row items-center gap-4">
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-[#DDA853] text-[#183B4E] font-bold shadow-lg shadow-[#DDA853]/20 hover:bg-[#f0c060] hover:shadow-xl hover:shadow-[#DDA853]/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <span className="text-sm font-semibold text-[#F3F3E0]/50">or</span>
            <Link href="/learn-with-us">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F3F3E0]/30 text-[#F3F3E0] bg-transparent font-bold hover:bg-white/10 hover:border-[#F3F3E0]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Learn With Us
              </Button>
            </Link>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2.5 pt-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Mail className="h-4 w-4 text-[#DDA853]" />
            </div>
            <Link
              href="mailto:morosisakhe@gmail.com"
              className="text-[#F3F3E0]/70 hover:text-[#DDA853] transition-colors text-sm font-medium"
            >
              morosisakhe@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
