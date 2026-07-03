"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const reveal = {
  initial: { opacity: 0, y: 38, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72 },
};

const metrics = [
  ["01", "Erster Eindruck", "Der Hero muss in wenigen Sekunden klar machen, was du anbietest und warum man dir vertrauen kann."],
  ["02", "Führung", "Jede Section beantwortet eine Frage, bevor der Besucher abspringt: Was? Für wen? Warum jetzt?"],
  ["03", "Kontakt", "Telefon, Formular und klare CTA-Flächen werden nicht versteckt, sondern wie ein Verkaufsweg aufgebaut."],
  ["04", "Vertrauen", "Preis, Ablauf, FAQ und Proof senken Zweifel und machen den nächsten Schritt leichter."],
];

const signals = ["Klare Headline", "starker CTA", "mobile-first", "schnelle Ladezeit", "FAQ gegen Zweifel", "Anfragefokus", "Premium Look", "saubere Struktur"];

function SignalPill({ children, index }) {
  return (
    <motion.span initial={{ opacity: 0, scale: 0.86, y: 18 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }}>
      {children}
    </motion.span>
  );
}

export default function ConversionLab() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section className="conversionLab" ref={ref}>
      <div className="conversionShell">
        <motion.div className="conversionText" {...reveal}>
          <p className="kicker">Conversion Lab</p>
          <h2>Schön reicht nicht. Die Seite muss führen, erklären und verkaufen.</h2>
          <span>KARIVO baut die Website nicht wie eine digitale Visitenkarte, sondern wie einen klaren Weg von Aufmerksamkeit zu Anfrage.</span>
          <div className="signalCloud">{signals.map((signal, index) => <SignalPill key={signal} index={index}>{signal}</SignalPill>)}</div>
        </motion.div>
        <motion.div className="conversionDevice" style={{ rotate, y }} {...reveal}>
          <div className="deviceTop"><i /><i /><i /><span>conversion.map</span></div>
          <div className="conversionFlow">
            <div className="flowHero"><small>KARIVO Funnel</small><strong>Besucher verstehen sofort, warum sie anfragen sollten.</strong></div>
            <div className="flowSteps">
              {metrics.map(([num, title, text]) => (
                <article key={title}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
