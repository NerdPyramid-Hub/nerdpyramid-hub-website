// components/ContactSection.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">Ready to Build Your Digital Future?</h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join us in creating meaningful digital solutions while learning and growing together. Let's turn your
              ideas into reality.
            </p>
          </div>

        <div className="flex flex-col min-[400px]:flex-row items-center gap-4">

  <Link href="/ContactUs">
  <Button
    size="lg"
    variant="secondary"
    className="bg-white text-blue-600 font-bold shadow-md hover:bg-blue-50 hover:text-emerald-600 transition-colors"
  >
    Start Your Project
  </Button>
  </Link>
  <span className="mx-2 text-lg font-semibold text-emerald-200 min-[400px]:text-center">OR</span>
  <Link href="/LearnMore">
  <Button
    size="lg"
    variant="outline"
    className="border-emerald-200 text-white font-bold shadow-md hover:bg-emerald-100 hover:text-blue-700 transition-colors bg-transparent"
  >
    Learn With Us
  </Button>
  </Link>
</div>

          <div className="flex items-center space-x-6 mt-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>morosisakhe@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5" />
              <span>@NerdPyramid Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
