"use client";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Code, MessageCircle, MessageSquare } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F3F3E0] py-16 px-4">
      {/* Contact Information - Generalized */}
      <div className="text-center mb-16 mt-16 relative"> 

        <div
          className="text-white rounded-3xl p-8 shadow-2xl text-center mb-16 bg-[#183B4E]"
        >
          {/* Header */}
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          {/* Description */}
          <p className="text-xl mb-8 opacity-90">
            Whether you're exploring options or ready to begin - we have solutions tailored to your needs
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

        {/* Contact Form Section - Will now appear on new row */}
        <div className="w-full mb-16 bg-[#faf9f3] rounded-xl shadow-md p-8">
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
              Have questions or ready to begin? Share your requirements below.
              <br /> <span className="italic text-[#DDA853] mt-2 block font-bold">We'll respond within 24 hours.</span>
            </p>
          </div>

          <form 
            className="max-w-2xl mx-auto space-y-6"
            action="https://formspree.io/f/xvgqpown" 
            method="POST"
          >
            <input type="hidden" name="_subject" value="General Inquiry" />
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

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-5 py-3 text-lg border border-gray-200 focus:border-[#DDA853] focus:ring-2 focus:ring-[#DDA853]/30 rounded-lg bg-white min-h-[150px] placeholder-[#183B4E]/70"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full font-semibold text-white bg-[#27548A] hover:bg-[#183B4E] py-4 text-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}