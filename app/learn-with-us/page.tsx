import React from "react";
import LearnWithUsPage from "@/components/LearnWithUsPage";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-[#F3F3E0]">
      <Navbar />
      <LearnWithUsPage />
    </div>
  );
}
