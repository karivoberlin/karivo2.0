"use client";

import CursorGlow from "../components/CursorGlow";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Portfolio from "../components/Portfolio";
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
        <Portfolio />
        <Method />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
