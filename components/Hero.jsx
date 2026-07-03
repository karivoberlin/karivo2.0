"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import OrbScene from "./OrbScene";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.62]);
  const orbX = useTransform(scrollYProgress, [0, 0.35], [0, 320]);
  const orbY = useTransform(scrollYProgress, [0, 0.35], [0, -230]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, 70]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="experienceHero" onMouseMove={handleMove} id="start">
      <div className="heroNoise" />
      <div className="heroGrid" />

      <motion.div
        className="heroOrb"
        style={{ scale: orbScale, x: orbX, y: orbY, rotateX, rotateY }}
      >
        <OrbScene />
      </motion.div>

      <motion.a
        className="heroBrand"
        href="#start"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        KARIVO
      </motion.a>

      <motion.div
        className="heroCopy"
        style={{ opacity: textOpacity, y: textY }}
        initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>Premium Webdesign aus Deutschland</span>
        <h1>
          Websites,
          <br />die im Kopf
          <br />bleiben.
        </h1>
        <p>Für Unternehmen, die online nicht einfach nur sichtbar sein wollen — sondern Eindruck hinterlassen.</p>
        <a className="heroButton" href="#kontakt">Projekt starten</a>
      </motion.div>

      <motion.div
        className="scrollHint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <i />
        <span>Scrollen</span>
      </motion.div>
    </section>
  );
}
