
"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="finalCta">
      <motion.div
        className="finalCtaInner"
        initial={{ opacity: 0, y: 42, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.78 }}
      >
        <p className="kicker">Nächster Schritt</p>
        <h2>Deine Website sollte nicht erklären, dass du professionell bist. Sie sollte es zeigen.</h2>
        <p>
          Lass uns aus deinem aktuellen Auftritt eine Seite machen, die hochwertig wirkt, schnell verstanden wird und mehr Anfragen erzeugt.
        </p>
        <div className="finalActions">
          <a className="btn primary" href="#kontakt">Projekt starten</a>
          <a className="btn secondary" href="#pakete">Pakete ansehen</a>
        </div>
      </motion.div>
    </section>
  );
}
