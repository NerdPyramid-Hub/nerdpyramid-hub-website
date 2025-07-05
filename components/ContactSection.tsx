// components/ContactSection.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail } from "lucide-react"

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

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Learn With Us
            </Button>
          </div>

          <div className="flex items-center space-x-6 mt-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>hello@nerdpyramidhub.com</span>
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
