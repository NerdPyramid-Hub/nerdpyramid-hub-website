// components/AboutSection.tsx
"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Heart, Rocket, Users, Target } from "lucide-react";

const aboutCards = [
	{
		icon: <Rocket className="h-6 w-6 text-[#27548A]" />,
		title: "Humble Beginnings",
		description:
			"Started in our campus computer science lab, staying after hours, helping each other through academic challenges, and dreaming about the future.",
		accent: "#27548A",
	},
	{
		icon: <Users className="h-6 w-6 text-[#DDA853]" />,
		title: "Hackathon Origins",
		description:
			"Our foundation was laid at a hackathon with long nights, big dreams, and powerful teamwork that showed us what we could achieve together.",
		accent: "#DDA853",
	},
	{
		icon: <Target className="h-6 w-6 text-[#183B4E]" />,
		title: "Shared Vision",
		description:
			"United by the belief that technology should empower people, and that learning should be exciting, accessible, and practical.",
		accent: "#183B4E",
	},
];

export default function AboutSection() {
	return (
		<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFFDF7]">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Badge variant="secondary" className="mb-4 bg-[#DDA853] text-[#183B4E]">
						<Heart className="w-3 h-3 mr-1" />
						Our Rich History
					</Badge>
					<h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-[#183B4E]">
						From Campus Lab to Tech Excellence
					</h2>
					<p className="max-w-[900px] text-[#27548A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our journey began as passionate classmates united by a shared love for technology and a dream to create
						meaningful change.
					</p>
				</div>

				<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12 items-stretch">
					{/* Cards */}
					<div className="flex flex-col gap-5 h-full">
						{aboutCards.map((card, idx) => (
							<div
								key={idx}
								className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 h-full border-l-4"
								style={{ borderLeftColor: card.accent }}
							>
								<div className="flex items-center mb-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F3E0] mr-3 flex-shrink-0">
										{card.icon}
									</div>
									<h3 className="text-xl font-bold text-[#183B4E]">{card.title}</h3>
								</div>
								<p className="text-[#27548A] leading-relaxed text-sm">{card.description}</p>
							</div>
						))}
					</div>

					{/* Image */}
					<div className="flex items-stretch h-full">
						<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#DDA853]/20 ring-1 ring-[#DDA853]/20">
							<Image
								src="/hackathonGlobe.png"
								width={550}
								height={400}
								alt="Team working together at a hackathon"
								className="object-cover object-center w-full h-full"
								style={{ minHeight: 280 }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#183B4E]/20 to-transparent pointer-events-none" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
