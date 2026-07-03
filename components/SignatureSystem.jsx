
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const reveal = {
  initial: { opacity: 0, y: 34, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.24 },
  transition: { duration: 0.68 }
};

const pillars = [
  {
    number: "01",
    title: "Erster Eindruck",
    text: "Die ersten Sekunden entscheiden. Deshalb bekommt jede KARIVO Website eine klare visuelle Richtung, starke Typografie und einen Einstieg, der sofort professionell wirkt.",
    tags: ["Hero", "Look", "Vertrauen"]
  },
  {
    number: "02",
    title: "Klare Führung",
    text: "Besucher sollen nicht suchen. Sie werden Schritt für Schritt durch Angebot, Nutzen, Beweise und Kontakt geführt — ohne überladenen Aufbau.",
    tags: ["Struktur", "CTA", "Flow"]
  },
  {
    number: "03",
    title: "Premium Gefühl",
    text: "Animationen, Licht, Abstände und Interaktionen werden so eingesetzt, dass die Seite hochwertig wirkt, aber nicht verspielt oder langsam wird.",
    tags: ["Motion", "Details", "Speed"]
  }
];

const stack = [
  "Next.js",
  "Framer Motion",
  "React Three Fiber",
  "SEO-Basis",
  "Vercel",
  "Responsive Design",
  "Kontaktformular",
  "Performance"
];

export default function SignatureSystem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.05, 0.62], [0, 1]);
  const orbY = useTransform(scrollYProgress, [0, 1], [80, -120]);

  return (
    <section className="signatureSystem" ref={ref}>
      <motion.div className="signatureGlow" style={{ y: orbY }} />
      <div className="signatureHeader">
        <motion.p className="kicker" {...reveal}>KARIVO System</motion.p>
        <motion.h2 {...reveal}>Nicht einfach eine Website. Ein digitaler erster Eindruck.</motion.h2>
        <motion.span {...reveal}>
          KARIVO verbindet Strategie, Design und Entwicklung zu einem Auftritt, der sofort seriös wirkt und Besucher gezielt zur Anfrage bringt.
        </motion.span>
      </div>

      <div className="signatureTimeline">
        <motion.div className="timelineProgress" style={{ scaleY: lineScale }} />
        {pillars.map((pillar, index) => (
          <motion.article className="pillarCard" key={pillar.title} {...reveal}>
            <div className="pillarNumber">{pillar.number}</div>
            <div className="pillarContent">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <div>
                {pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="pillarVisual" aria-hidden="true">
              <i />
              <b />
              <em />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div className="techWall" {...reveal}>
        <div>
          <p className="eyebrow">Technik</p>
          <h3>Schnell, modern und bereit für Vercel.</h3>
          <span>Die Website ist nicht nur optisch stark, sondern auch sauber aufgebaut: Komponenten, Animationen und responsive Verhalten greifen ineinander.</span>
        </div>
        <div className="techGrid">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </motion.div>
    </section>
  );
}
