import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Worlds from "@/components/site/Worlds";
import Features from "@/components/site/Features";
import Pricing from "@/components/site/Pricing";
import IntakeForm from "@/components/site/IntakeForm";
import Waitlist from "@/components/site/Waitlist";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Worlds />
        <Features />
        <Pricing />
        <IntakeForm />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
