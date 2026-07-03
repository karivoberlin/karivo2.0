"use client";

import { motion } from "framer-motion";

const rows = [
  ["Erster Eindruck", "austauschbar", "eigene Premium-Wirkung"],
  ["Texte", "viel, aber nicht geführt", "kurz, klar und verkaufsorientiert"],
  ["Kontakt", "versteckt oder zu spät", "sichtbar in der gesamten Journey"],
  ["Mobile", "nachträglich angepasst", "von Anfang an mitgedacht"],
  ["Design", "Baukasten-Optik", "eigene Designsprache"],
  ["Struktur", "zufällig sortiert", "auf Vertrauen und Anfrage ausgerichtet"],
];

export default function Comparison() {
  return (
    <section className="comparisonSection">
      <motion.div
        className="sectionIntro wide"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Warum KARIVO</p>
        <h2>Der Unterschied zwischen „online sein“ und professionell wirken.</h2>
      </motion.div>

      <motion.div
        className="comparisonTable"
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="comparisonHead">
          <span>Bereich</span>
          <span>Normale Website</span>
          <span>KARIVO Website</span>
        </div>
        {rows.map(([topic, normal, karivo], index) => (
          <motion.div
            className="comparisonRow"
            key={topic}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <strong>{topic}</strong>
            <p>{normal}</p>
            <p>{karivo}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
