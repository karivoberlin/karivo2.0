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
import ConversionLab from "../components/ConversionLab";
import DesignSystem from "../components/DesignSystem";
import CaseStudies from "../components/CaseStudies";
import LaunchChecklist from "../components/LaunchChecklist";
import ValueStack from "../components/ValueStack";
import Comparison from "../components/Comparison";
import NextSteps from "../components/NextSteps";
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
        <ConversionLab />
        <ScrollStory />
        <DesignSystem />
        <ValueStack />
        <Comparison />
        <Portfolio />
        <CaseStudies />
        <SignatureSystem />
        <Method />
        <Packages />
        <LaunchChecklist />
        <NextSteps />
        <ProofSection />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
