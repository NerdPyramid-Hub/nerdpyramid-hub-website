"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Lightbulb,
  Users,
  Sparkles,
  Star,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for background
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = ["#183B4E", "#27548A", "#DDA853", "#F3F3E0"];

    // Create particles
    for (let i = 0; i < 80; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({ x, y, size, speedX, speedY, color });
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#FAF9F3");
      gradient.addColorStop(0.5, "#F3F3E0");
      gradient.addColorStop(1, "#FFFFFF");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particles that go off screen
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-24 overflow-hidden">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 rounded-full bg-[#DDA853]/20 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-[#DDA853]" />
        </div>
      </div>
      <div className="absolute top-1/4 right-16 animate-float delay-1000">
        <div className="w-8 h-8 rounded-full bg-[#27548A]/20 flex items-center justify-center">
          <Code className="h-4 w-4 text-[#27548A]" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-20 animate-float delay-2000">
        <div className="w-10 h-10 rounded-full bg-[#183B4E]/20 flex items-center justify-center">
          <Lightbulb className="h-5 w-5 text-[#183B4E]" />
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#183B4E] drop-shadow-md">
                Building <span className="text-[#DDA853]">Digital Futures</span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Through Code",
                    4000,
                    "Through Innovation",
                    5000,
                    "Through Technology",
                    3000,
                    "Through Collaboration",
                    5000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="block mt-3 text-[#27548A]"
                />
              </h1>

              <p className="max-w-2xl mx-auto text-base md:text-lg text-[#27548A] font-medium animate-fade-in delay-500">
                We combine cutting-edge technology with innovative thinking to
                build software that empowers businesses with solutions that are
                meaningful, resilient, and built to last
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#27548A] to-[#183B4E] hover:from-[#183B4E] hover:to-[#27548A] text-white px-8 py-5 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-semibold group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 animate-fade-in delay-1000">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#F3F3E0] h-36 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#183B4E]/10 flex items-center justify-center mb-3 mx-auto">
                  <Users className="h-5 w-5 text-[#355161]" />
                </div>
                <h3 className="text-base font-semibold text-[#183B4E] mb-2">
                  Expert Team
                </h3>
                <p className="text-[#27548A] text-sm">
                  3 founding members with professional experience
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#F3F3E0] h-36 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#27548A]/10 flex items-center justify-center mb-3 mx-auto">
                  <Code className="h-5 w-5 text-[#27548A]" />
                </div>
                <h3 className="text-base font-semibold text-[#183B4E] mb-2">
                  Proven Results
                </h3>
                <p className="text-[#27548A] text-sm">
                  8+ successful projects delivered to satisfied clients
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-[#F3F3E0] h-36 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#DDA853]/10 flex items-center justify-center mb-3 mx-auto">
                  <Star className="h-5 w-5 text-[#DDA853]" />
                </div>
                <h3 className="text-base font-semibold text-[#183B4E] mb-2">
                  Quality Focus
                </h3>
                <p className="text-[#27548A] text-sm">
                  Clean, maintainable code with thorough testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-5 h-8 border-2 border-[#27548A]/70 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#27548A]/90 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in.delay-500 {
          animation-delay: 500ms;
        }

        .animate-fade-in.delay-700 {
          animation-delay: 700ms;
        }

        .animate-fade-in.delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
}
