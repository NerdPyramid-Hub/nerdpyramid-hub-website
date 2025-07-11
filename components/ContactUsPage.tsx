"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Code } from "lucide-react";
import { useState } from "react";

export default function ContactUsPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 px-4">
      <div className="max-w-4xl w-full bg-white/95 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col items-center border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full p-3 shadow-lg">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center">
            Start Your Project
          </h1>
        </div>
        {/* Catchy text in a rectangular box */}
        <div className="w-full mb-8">
          <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 border-l-4 border-blue-500 px-8 py-6 shadow-md rounded-lg">
            <p className="text-lg md:text-xl text-slate-700 font-semibold text-center">
              Ready to build something amazing?{" "}
              <span className="font-bold text-blue-600">Share your vision</span>{" "}
              and let our team craft a custom digital solution just for you.
              <br />
              <span className="italic text-emerald-600 mt-2 block">
                We'll get back to you fast!
              </span>
            </p>
          </div>
        </div>
        <form className="w-full space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-slate-700 font-semibold mb-2 text-lg"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-5 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label
              className="block text-slate-700 font-semibold mb-2 text-lg"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-5 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              className="block text-slate-700 font-semibold mb-2 text-lg"
              htmlFor="project"
            >
              Project Details
            </label>
            <textarea
              id="project"
              required
              rows={5}
              className="w-full px-5 py-3 border border-slate-300 focus:border-blue-500 focus:ring-blue-200 focus:ring-2 outline-none transition shadow-sm rounded-lg text-lg"
              placeholder="Tell us about your idea, goals, and timeline!"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold shadow-lg hover:from-blue-700 hover:to-emerald-700 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 py-4 text-lg"
          >
            {sent ? (
              <span className="flex items-center gap-2">
                Sent! <span className="animate-bounce">🎉</span>
              </span>
            ) : (
              <>
                Send Project Request <Send className="h-5 w-5" />
              </>
            )}
          </Button>
        </form>
        <div className="mt-12 w-full flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-slate-700 text-lg">
            <Mail className="h-5 w-5 text-blue-600" />
            <span>morosisakhe@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 text-lg">
            <Phone className="h-5 w-5 text-emerald-600" />
            <span>+27 79 015 3035</span>
          </div>
        </div>
        <div className="mt-8 text-center text-emerald-600 font-semibold text-lg">
          <span>
            We love bold ideas. Let's build something extraordinary together!
          </span>
        </div>
      </div>
    </section>
  );
}
