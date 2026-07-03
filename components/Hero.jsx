"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import OrbScene from "./OrbScene";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.58]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="hero" id="start" onMouseMove={handleMouseMove}>
      <motion.div
        className="heroText"
        style={{ opacity }}
        initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="kicker">Premium Webdesign aus Deutschland</p>
        <h1>Websites, die <span className="gradientText">im Kopf</span> bleiben.</h1>
        <p>
          KARIVO entwickelt moderne Websites, die hochwertig wirken, Vertrauen aufbauen und Besucher gezielt zur Anfrage führen.
        </p>
        <div className="heroActions">
          <a className="btn primary" href="#kontakt">Projekt starten</a>
          <a className="btn secondary" href="#portfolio">Portfolio ansehen</a>
        </div>
        <div className="heroProof">
          <span>✓ Strategie</span>
          <span>✓ Design</span>
          <span>✓ Entwicklung</span>
          <span>✓ Launch</span>
        </div>
      </motion.div>

      <motion.div
        className="heroVisual"
        style={{ y, scale, rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.82, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="orbWrap">
          <OrbScene />
          <div className="orbPanel">
            <small>KARIVO System</small>
            <strong>Design, das verkauft.</strong>
            <span>Premium-Look, klare Struktur und Kontaktwege, die sofort funktionieren.</span>
          </div>
        </div>
      </motion.div>

      <div className="scrollHint">
        <i>↓</i>
        <span>Scrollen</span>
      </div>
    </section>
  );
}
