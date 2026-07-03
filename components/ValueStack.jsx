"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    label: "01",
    title: "Mehr Vertrauen",
    text: "Ein hochwertiger Auftritt sorgt dafür, dass Besucher dein Angebot ernster nehmen, noch bevor sie dich kontaktieren.",
    points: ["seriöser erster Eindruck", "klare Struktur", "professioneller Markenlook"],
  },
  {
    label: "02",
    title: "Mehr Klarheit",
    text: "Die Website erklärt nicht alles gleichzeitig, sondern führt Besucher Schritt für Schritt durch dein Angebot.",
    points: ["verständliche Texte", "starke Headlines", "weniger Ablenkung"],
  },
  {
    label: "03",
    title: "Mehr Anfragen",
    text: "Kontaktwege und Buttons werden sichtbar geplant, damit Interessenten nicht lange suchen müssen.",
    points: ["Formular", "Telefon / WhatsApp", "klare CTA-Flächen"],
  },
];

export default function ValueStack() {
  return (
    <section className="valueStack">
      <motion.div
        className="sectionIntro wide"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Wert der Website</p>
        <h2>Die Seite soll nicht nur existieren. Sie soll dein Angebot stärker wirken lassen.</h2>
        <span>Das Ziel ist ein digitaler Auftritt, der Vertrauen aufbaut und den nächsten Schritt einfach macht.</span>
      </motion.div>

      <div className="valueStackGrid">
        {blocks.map((block, index) => (
          <motion.article
            className="valueCard"
            key={block.title}
            initial={{ opacity: 0, y: 44, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: index * 0.08 }}
          >
            <div className="valueLabel">{block.label}</div>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
            <ul>
              {block.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
