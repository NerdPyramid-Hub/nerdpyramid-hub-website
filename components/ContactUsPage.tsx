"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Code } from "lucide-react"
import { useState } from "react"

export default function ContactUsPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-400 to-yellow-200 py-16 px-4">
      <div className="max-w-2xl w-full bg-white/95 rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col items-center border-4 border-pink-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3 shadow-lg">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-purple-700 text-center drop-shadow-lg">Start Your Project</h1>
        </div>
        {/* Catchy text in a rectangular box */}
        <div className="w-full mb-8">
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 border-l-4 border-pink-400 px-6 py-5 shadow-md">
            <p className="text-lg text-purple-900 font-semibold text-center">
              Ready to build something amazing? <span className="font-bold text-pink-600">Share your vision</span> and let our team craft a custom digital solution just for you.<br />
              <span className="italic text-purple-400">We’ll get back to you fast!</span>
            </p>
          </div>
        </div>
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-purple-700 font-semibold mb-1" htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 border border-pink-300 focus:border-purple-500 focus:ring-pink-200 focus:ring-2 outline-none transition shadow-black shadow-sm"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-purple-700 font-semibold mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-pink-300 focus:border-purple-500 focus:ring-pink-200 focus:ring-2 outline-none transition"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-purple-700 font-semibold mb-1" htmlFor="project">Project Details</label>
            <textarea
              id="project"
              required
              rows={4}
              className="w-full px-4 py-2 border border-pink-300 focus:border-purple-500 focus:ring-pink-200 focus:ring-2 outline-none transition"
              placeholder="Tell us about your idea, goals, and timeline!"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2 transition-transform hover:scale-105"
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
        <div className="mt-10 w-full flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-purple-700">
            <Mail className="h-5 w-5" />
            <span>hello@nerdpyramidhub.com</span>
          </div>
          <div className="flex items-center gap-2 text-purple-700">
            <Phone className="h-5 w-5" />
            <span>+27 12 345 6789</span>
          </div>
          <div className="flex items-center gap-2 text-purple-700">
            <MapPin className="h-5 w-5" />
            <span>123 Pyramid Ave, Cape Town, South Africa</span>
          </div>
        </div>
        <div className="mt-8 text-center text-pink-600 font-semibold">
          <span>We love bold ideas. Let’s build something extraordinary together!</span>
        </div>
      </div>
    </section>
  )
}