"use client";

import CursorGlow from "../components/CursorGlow";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Portfolio from "../components/Portfolio";
import SignatureSystem from "../components/SignatureSystem";
import ProofSection from "../components/ProofSection";
import FinalCTA from "../components/FinalCTA";
import PremiumFeatures, { ScrollStory } from "../components/PremiumFeatures";
import FAQ from "../components/FAQ";
import { TrustBar, Services, Method, Packages, Contact, Footer } from "../components/Sections";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Marquee />
        <Services />
        <PremiumFeatures />
        <ScrollStory />
        <Portfolio />
        <Method />
        <Packages />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
