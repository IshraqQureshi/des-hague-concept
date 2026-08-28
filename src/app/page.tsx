import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import CurrentLeadership from "@/components/CurrentLeadership";
import CareerTimeline from "@/components/CareerTimeline";
import HagueEnterprises from "@/components/HagueEnterprises";
import ThinkingAcademy from "@/components/ThinkingAcademy";
import Books from "@/components/Books";
import Advisory from "@/components/Advisory";
import Speaking from "@/components/Speaking";
import Insights from "@/components/Insights";
import HumanStory from "@/components/HumanStory";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <CurrentLeadership />
        <CareerTimeline />
        <HagueEnterprises />
        <ThinkingAcademy />
        <Books />
        <Advisory />
        <Speaking />
        <Insights />
        <HumanStory />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
