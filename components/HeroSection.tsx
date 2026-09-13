"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Zap, Users, Clock } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";

const STATS = [
	{ icon: Users, value: "50+", label: "Clients Served" },
	{ icon: Star, value: "5.0★", label: "Average Rating" },
	{ icon: Clock, value: "100%", label: "On-Time Delivery" },
	{ icon: Zap, value: "8+", label: "Projects Shipped" },
];

const GUARANTEES = [
	"No lock-in contracts",
	"Dedicated dev team",
	"Weekly progress updates",
];

export default function HeroSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

			{/* ── Background image ── */}
			<Image
				src="nerpyramid-hero-section-img.jpg"
				alt="Hero background"
				fill
				priority
				className="object-cover object-center"
			/>
			{/* Overlay — keeps text readable */}
			<div className="absolute inset-0 bg-[#183B4E]/60" />

			{/* Subtle gold glow accents on top of overlay */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,_#DDA85315_0%,_transparent_65%)]" />
				<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,_#27548A25_0%,_transparent_60%)]" />
			</div>

			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
				<div className="flex flex-col items-center gap-6">

					<div className="flex flex-col xl:flex-row items-stretch justify-center gap-6 xl:gap-10 2xl:gap-14 w-full 2xl:max-w-[1600px]">

						{/* ── Text & CTAs ── */}
						<div className="w-full xl:flex-1">
							<div className="h-full bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 lg:p-8 2xl:p-12 space-y-4 lg:space-y-6 2xl:space-y-8 text-left shadow-xl">

								{/* Badge */}
								<div className="animate-fade-in inline-flex items-center gap-2 border border-[#DDA853]/50 bg-[#DDA853]/15 backdrop-blur-sm text-[#DDA853] text-[10px] 2xl:text-sm font-semibold px-3 py-1 2xl:px-4 2xl:py-1.5 rounded-full">
									<Zap className="h-3 w-3 2xl:h-4 2xl:w-4 fill-[#DDA853]" />
									From idea to production in weeks, not months
								</div>

								{/* Headline */}
								<div className="animate-fade-in delay-200 space-y-1.5 2xl:space-y-3">
									<h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-5xl font-black tracking-tight leading-[1.1] text-white">
										<span style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)" }}>
											We build software
										</span>
										<br />
										<span className="relative inline-block">
											<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDA853] via-[#f0c97b] to-[#DDA853] animate-shimmer bg-[length:200%_auto]">
												that build businesses.
											</span>
											<span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDA853] to-transparent opacity-60" />
										</span>
									</h1>
									<div
										className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-semibold text-[#7BAFD4] h-6 lg:h-7 2xl:h-10"
										style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
									>
										<TypeAnimation
											sequence={[
												"Scale with confidence.",
												4000,
												"Delight your users.",
												4000,
												"Outpace the competition.",
												4000,
											]}
											speed={45}
											repeat={Infinity}
										/>
									</div>
								</div>

								{/* Subheading */}
								<p
									className="animate-fade-in delay-300 text-[11px] sm:text-xs lg:text-sm xl:text-base 2xl:text-xl text-slate-200 leading-relaxed"
									style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
								>
									NerdPyramid helps founders and businesses turn bold ideas into scalable software products ready for real users and real growth.
								</p>

								{/* Guarantees */}
								<div className="animate-fade-in delay-600 flex flex-wrap items-center gap-x-3 gap-y-1.5 2xl:gap-x-5 2xl:gap-y-2.5 justify-start">
									{GUARANTEES.map((g) => (
										<div key={g} className="flex items-center gap-1 text-slate-200 text-[9px] sm:text-[10px] lg:text-xs 2xl:text-base" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
											<CheckCircle className="h-2.5 w-2.5 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4 text-emerald-400 shrink-0" />
											{g}
										</div>
									))}
								</div>

							</div>
						</div>

						{/* ── Terminal mockup ── */}
						<div className="w-full xl:flex-1 animate-fade-in delay-700">
							<div className="h-full bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 lg:p-8 2xl:p-12 space-y-3 2xl:space-y-5 shadow-xl">
								<div className="relative pt-5">

									{/* Terminal card */}
									<div className="bg-[#0D1E2B]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
										<div className="flex items-center gap-2 px-3 py-2.5 2xl:px-4 2xl:py-3.5 border-b border-white/10 bg-white/[0.03]">
											<span className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-red-400/80" />
											<span className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-yellow-400/80" />
											<span className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-emerald-400/80" />
											<span className="ml-2 text-[10px] 2xl:text-sm text-white/25 font-mono">nerdpyramid ~ project-launch</span>
										</div>
										<div className="p-3 lg:p-4 2xl:p-6 font-mono text-[9px] sm:text-[10px] lg:text-xs 2xl:text-base space-y-1.5 2xl:space-y-2.5 text-left">
											{[
												{ prompt: "$", cmd: "npx nerdpyramid init my-saas-app", color: "text-white/60" },
												{ prompt: "✔", cmd: "Requirements analyzed", color: "text-emerald-400" },
												{ prompt: "✔", cmd: "Architecture planned", color: "text-emerald-400" },
												{ prompt: "✔", cmd: "Sprint 1 delivered — 3 days early", color: "text-emerald-400" },
												{ prompt: "✔", cmd: "Production deployed · 99.9% uptime", color: "text-emerald-400" },
												{ prompt: "🚀", cmd: "Your product is live!", color: "text-[#DDA853] font-bold" },
											].map((line, i) => (
												<div key={i} className={`flex items-start gap-2 ${line.color}`}>
													<span className="text-[#DDA853]/60 shrink-0">{line.prompt}</span>
													<span>{line.cmd}</span>
												</div>
											))}
											<div className="flex items-center gap-1 pt-1">
												<span className="text-[#DDA853]/60">$</span>
												<span className="w-1.5 h-3 2xl:w-2 2xl:h-4 bg-[#DDA853] animate-pulse rounded-sm ml-1" />
											</div>
										</div>
									</div>

									{/* Floating toast */}
									<div className="absolute -top-3 -right-2 sm:-right-4 bg-white rounded-xl shadow-xl p-2.5 2xl:p-4 flex items-center gap-2 2xl:gap-3 w-40 sm:w-48 2xl:w-64 animate-float border border-slate-100 z-20">
										<div className="w-7 h-7 2xl:w-10 2xl:h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
											<CheckCircle className="h-3.5 w-3.5 2xl:h-5 2xl:w-5 text-emerald-500" />
										</div>
										<div>
											<p className="text-slate-800 text-[10px] 2xl:text-base font-bold">MVP Launched 🎉</p>
											<p className="text-slate-400 text-[9px] 2xl:text-sm">Delivered in 4 weeks</p>
										</div>
									</div>

								</div>

								{/* Stats strip */}
								<div className="grid grid-cols-4 gap-1.5 2xl:gap-3">
									{STATS.map(({ icon: Icon, value, label }) => (
										<div key={label} className="flex flex-col items-center gap-0.5 2xl:gap-1.5 bg-black/40 backdrop-blur-md border border-[#DDA853]/20 rounded-xl py-2 px-1 2xl:py-4 2xl:px-2 hover:bg-black/50 transition-colors">
											<Icon className="h-2.5 w-2.5 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5 text-[#DDA853]" />
											<span className="text-white text-[10px] lg:text-xs 2xl:text-lg font-extrabold leading-tight">{value}</span>
											<span className="text-slate-300 text-[7px] lg:text-[8px] 2xl:text-xs text-center leading-tight">{label}</span>
										</div>
									))}
								</div>
							</div>
						</div>

					</div>

					{/* ── CTA below both cards ── */}
					<div className="animate-fade-in delay-600 flex justify-center">
						<Link href="/contact-us">
							<Button
								size="default"
								className="bg-gradient-to-br from-[#DDA853] to-[#c9923c] hover:brightness-110 text-[#183B4E] font-bold px-10 sm:px-12 lg:px-14 2xl:px-16 py-5 lg:py-6 2xl:py-7 text-base sm:text-lg 2xl:text-xl rounded-full shadow-lg hover:shadow-[#DDA853]/30 hover:scale-105 transition-all duration-300 group"
							>
								Start Your Project
								<ArrowRight className="ml-2 h-5 w-5 2xl:h-6 2xl:w-6 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
					</div>

				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
				<div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center">
					<div className="w-1 h-2 bg-white/30 rounded-full mt-2" />
				</div>
			</div>

			{/* ...existing styles... */}
			<style jsx global>{`
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes float {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-8px); }
				}
				@keyframes shimmer {
					0% { background-position: 0% center; }
					100% { background-position: 200% center; }
				}
				.animate-fade-in { opacity: 0; animation: fadeIn 0.9s ease-out forwards; }
				.animate-float { animation: float 4s ease-in-out infinite; }
				.animate-shimmer { animation: shimmer 4s linear infinite; }
				.delay-200 { animation-delay: 200ms; }
				.delay-300 { animation-delay: 300ms; }
				.delay-500 { animation-delay: 500ms; }
				.delay-600 { animation-delay: 600ms; }
				.delay-700 { animation-delay: 700ms; }
			`}</style>
		</section>
	);
}