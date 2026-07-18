import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatSection from "./components/ChatSection";
import ChecklistCard from "./components/ChecklistCard";
import RecommendationCard from "./components/RecommendationCard";

function App() {
  const [documents] = useState([
    "Aadhaar Card",
    "PAN Card",
    "Address Proof",
    "Passport Size Photograph",
  ]);

  const [recommendations] = useState([
    "Track Passport Application",
    "Update Aadhaar",
    "Download DigiLocker Documents",
  ]);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <ChatSection />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ChecklistCard documents={documents} />

            <RecommendationCard
              recommendations={recommendations}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;