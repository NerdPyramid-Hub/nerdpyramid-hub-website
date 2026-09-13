import { Badge } from "@/components/ui/badge";
import { BookOpen, Camera, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
	{
		href: "/software-solutions",
		icon: Code,
		iconColor: "#27548A",
		title: "Custom Development",
		description:
			"Dynamic platforms, custom websites, and mobile apps built with clean, scalable, and efficient code.",
	},
	{
		href: "/learn-with-us",
		icon: BookOpen,
		iconColor: "#DDA853",
		title: "Coding Education",
		description:
			"Comprehensive coding lessons and mentorship programs to help students and junior developers grow.",
	},
	{
		href: "/cctv-installation",
		icon: Camera,
		iconColor: "#183B4E",
		title: "CCTV Installations",
		description:
			"Professional installation services to secure your property with high-quality surveillance cameras.",
	},
];

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="w-full py-12 md:py-24 lg:py-32 bg-white"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<Badge
						variant="secondary"
						className="mb-4 bg-[#DDA853] text-[#183B4E]"
					>
						<Code className="w-3 h-3 mr-1" />
						What We Do
					</Badge>
					<h2 className="text-2xl font-bold tracking-tighter sm:text-5xl text-[#183B4E]">
						Smart Digital Solutions & Education
					</h2>
					<p className="max-w-[900px] text-[#183B4E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						We build engaging digital solutions and offer coding education to
						inspire the next generation of developers.
					</p>
				</div>

				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
					{services.map((service) => {
						const Icon = service.icon;
						return (
							<Link key={service.href} href={service.href}>
								<div className="group flex flex-col h-full items-center text-center rounded-xl border border-transparent bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-[#DDA853]/30 transition-all duration-300 p-8 cursor-pointer">
									<div
										className="flex h-14 w-14 items-center justify-center rounded-2xl mb-5 shadow-md transition-all duration-300 group-hover:scale-110"
										style={{
											backgroundColor: `${service.iconColor}15`,
										}}
									>
										<Icon
											className="h-7 w-7"
											style={{ color: service.iconColor }}
										/>
									</div>
									<h3 className="text-[#183B4E] font-bold text-lg mb-3">
										{service.title}
									</h3>
									<p className="text-[#27548A] text-sm leading-relaxed flex-1">
										{service.description}
									</p>
									<div className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#27548A] group-hover:text-[#DDA853] transition-colors duration-200">
										Learn more
										<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
