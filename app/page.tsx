import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ValuesSection />
        <AboutSection />
        <TeamSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
