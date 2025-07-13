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
		iconBg: "bg-[#F3F3E0]",
	},
	{
		icon: <Users className="h-6 w-6 text-[#DDA853]" />,
		title: "Hackathon Origins",
		description:
			"Our foundation was laid at a hackathon with long nights, big dreams, and powerful teamwork that showed us what we could achieve together.",
		iconBg: "bg-[#F3F3E0]",
	},
	{
		icon: <Target className="h-6 w-6 text-[#183B4E]" />,
		title: "Shared Vision",
		description:
			"United by the belief that technology should empower people, and that learning should be exciting, accessible, and practical.",
		iconBg: "bg-[#F3F3E0]",
	},
];

export default function AboutSection() {
	return (
		<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#FFFDF7]">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
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
				</div>

				<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12 items-stretch">
					{/* Cards */}
					<div className="flex flex-col gap-6 h-full">
						{aboutCards.map((card, idx) => (
							<div
								key={idx}
								className="flex flex-col bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow h-full"
							>
								<div className="flex items-center mb-3">
									<div className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.iconBg} mr-3`}>
										{card.icon}
									</div>
									<h3 className="text-xl font-bold text-[#183B4E]">{card.title}</h3>
								</div>
								<hr className="w-full border-t border-[#F3F3E0] mb-3" />
								<p className="text-[#27548A]">{card.description}</p>
							</div>
						))}
					</div>
					{/* Image */}
					<div className="flex items-stretch h-full">
						<Image
							src="/hackathonGlobe.png"
							width={550}
							height={400}
							alt="Team working together"
							className="rounded-xl object-cover object-center w-full h-full shadow-[#DDA853]/30 shadow-xl"
							style={{ minHeight: 0, maxHeight: "100%" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
