import React from "react";
import ContactUsPage from "@/components/ContactUsPage";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-[#F3F3E0]">
      <Navbar />
      <ContactUsPage />
    </div>
  );
}
