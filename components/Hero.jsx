"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import OrbScene from "./OrbScene";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const orbScale = useTransform(scrollYProgress, [0, 0.38], [1, 0.54]);
  const orbY = useTransform(scrollYProgress, [0, 0.38], [0, -255]);
  const orbX = useTransform(scrollYProgress, [0, 0.38], [0, 360]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.72]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="heroIntro" id="start" onMouseMove={handleMove}>
      <div className="heroNoise" />
      <div className="heroLight heroLightA" />
      <div className="heroLight heroLightB" />

      <motion.div
        className="heroOrb"
        style={{
          scale: orbScale,
          x: orbX,
          y: orbY,
          opacity: orbOpacity,
          rotateX,
          rotateY,
        }}
        initial={{ opacity: 0, scale: 0.84, filter: "blur(18px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <OrbScene />
      </motion.div>

      <motion.a
        href="#start"
        className="experienceBrand"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        KARIVO
      </motion.a>

      <motion.div
        className="experienceCopy"
        style={{ opacity: textOpacity, y: textY }}
        initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1>
          Websites,
          <br />
          die im Kopf
          <br />
          bleiben.
        </h1>
        <p>Premium-Websites für Unternehmen, die online Eindruck hinterlassen.</p>
        <a href="#kontakt" className="experienceButton">Projekt starten</a>
      </motion.div>

      <motion.div
        className="experienceScroll"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <i />
        <span>Scrollen</span>
      </motion.div>
    </section>
  );
}
