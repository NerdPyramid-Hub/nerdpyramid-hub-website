"use client";

import { useState } from "react";

export default function CareersPage() {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState("");

  // Example positions available (can be fetched from an API)
  const openPositions = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "Backend Developer", location: "On-site", type: "Full-time" },
    { title: "UI/UX Designer", location: "Remote", type: "Contract" },
    { title: "QA Engineer", location: "Remote", type: "Full-time" },
    { title: "Intern", location: "Remote", type: "Internship" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4">
      {/* Container with two columns */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: CV Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Apply for a Position
          </h2>

          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Surname"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          {/* Position Dropdown */}
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Position</option>
            {openPositions.map((pos) => (
              <option key={pos.title} value={pos.title}>
                {pos.title}
              </option>
            ))}
          </select>

          {/* CV Type */}
          <select
            required
            className="w-full px-4 py-2 border rounded-md bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select CV Type</option>
            <option value="pdf">PDF</option>
            <option value="doc">Word (.doc/.docx)</option>
          </select>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="w-full text-sm file:mr-4 file:py-2 file:px-4
                       file:rounded-md file:border-0
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>

        {/* Right: Positions Available */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Open Positions
          </h2>
          <ul className="space-y-3">
            {openPositions.map((pos) => (
              <li
                key={pos.title}
                className="border p-4 rounded-md hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-lg">{pos.title}</h3>
                <p className="text-sm text-gray-600">{pos.location} • {pos.type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


