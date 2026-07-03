"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import OrbScene from "./OrbScene";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const orbScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.55]);
  const orbX = useTransform(scrollYProgress, [0, 0.35], [0, 360]);
  const orbY = useTransform(scrollYProgress, [0, 0.35], [0, -240]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.22], [0, 70]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section className="heroExperience" id="start" onMouseMove={handleMouseMove}>
      <div className="heroBrand">KARIVO</div>

      <motion.div
        className="heroOrb"
        style={{ scale: orbScale, x: orbX, y: orbY, rotateX, rotateY }}
      >
        <OrbScene />
      </motion.div>

      <motion.div className="heroCopy" style={{ opacity: textOpacity, y: textY }}>
        <span>Premium Webdesign</span>
        <h1>
          Websites,<br />
          die im Kopf<br />
          bleiben.
        </h1>
        <p>
          Für Unternehmen, die online nicht nur sichtbar sein wollen,
          sondern sofort Eindruck hinterlassen.
        </p>
        <a href="#kontakt">Projekt starten</a>
      </motion.div>

      <div className="heroScroll">
        <i>↓</i>
        <small>Scrollen</small>
      </div>
    </section>
  );
}
