import { useState } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Worlds from "@/components/site/Worlds";
import Features from "@/components/site/Features";
import Pricing from "@/components/site/Pricing";
import IntakeForm from "@/components/site/IntakeForm";
import Waitlist from "@/components/site/Waitlist";
import Footer from "@/components/site/Footer";

const Index = () => {
  const [selectedTier, setSelectedTier] = useState("Template");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Worlds />
        <Features />
        <Pricing onSelectTier={setSelectedTier} />
        <IntakeForm selectedTier={selectedTier} onSelectTier={setSelectedTier} />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
