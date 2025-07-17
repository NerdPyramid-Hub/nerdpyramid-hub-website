"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Code } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F3F3E0] py-16 px-4">
      <div className="max-w-4xl w-full bg-white/95 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center border border-[#DDA853]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#27548A] rounded-full p-3 shadow-lg">
            <Code className="h-8 w-8 text-[#F3F3E0]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#183B4E] text-center">
            Start Your Project
          </h1>
        </div>

        <div className="w-full mb-8">
          <div className="bg-[#F3F3E0] border-l-4 border-[#DDA853] px-8 py-6 shadow-md rounded-lg">
            <p className="text-lg md:text-xl text-[#27548A] font-semibold text-center">
              Ready to build something amazing?{" "}
              <span className="font-bold text-[#183B4E]">Share your vision</span>{" "}
              and let our team craft a custom digital solution just for you.
              <br />
              <span className="italic text-[#DDA853] mt-2 block">
                We'll get back to you fast!
              </span>
            </p>
          </div>
        </div>

        <form
          className="w-full space-y-8"
          action="https://formspree.io/f/xvgqpown"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Project Inquiry" />
          <input type="hidden" name="form_name" value="ContactUsPage" />

          <div>
            <label className="block text-[#27548A] font-semibold mb-2 text-lg" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-5 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-[#27548A] font-semibold mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-5 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block text-[#27548A] font-semibold mb-2 text-lg" htmlFor="project">
              Project Details
            </label>
            <textarea
              id="project"
              name="project"
              rows={5}
              required
              className="w-full px-5 py-3 border border-[#DDA853] focus:border-[#183B4E] focus:ring-[#183B4E]/20 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="Tell us about your idea, goals, and timeline!"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#27548A] text-[#F3F3E0] font-bold shadow-lg hover:bg-[#183B4E] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 py-4 text-lg"
          >
            Send Project Request <Send className="h-5 w-5" />
          </Button>
        </form>

        <div className="mt-12 w-full flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-[#27548A] text-lg">
            <Mail className="h-5 w-5 text-[#27548A]" />
            <span>info@nerdpyramidhub.com</span>
          </div>
          <div className="flex items-center gap-2 text-[#27548A] text-lg">
            <Phone className="h-5 w-5 text-[#DDA853]" />
            <span>+27 79 015 3035</span>
          </div>
        </div>

        <div className="mt-8 text-center text-[#DDA853] font-semibold text-lg">
          <span>
            We love bold ideas. Let's build something extraordinary together!
          </span>
        </div>
      </div>
    </section>
  );
}
