"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.65 },
};

const questions = [
  [
    "Für wen ist KARIVO geeignet?",
    "Für Unternehmen, Selbstständige und lokale Anbieter, die online deutlich professioneller wirken möchten und keine 0815-Baukastenseite wollen.",
  ],
  [
    "Kann die Seite später erweitert werden?",
    "Ja. Die Struktur ist so gedacht, dass später weitere Seiten, Case Studies, Blogbereiche oder neue Kontaktwege ergänzt werden können.",
  ],
  [
    "Ist die Website für Handy optimiert?",
    "Ja. Das Layout wird responsive aufgebaut. Gerade mobile Besucher sind wichtig, weil viele Anfragen direkt über das Smartphone entstehen.",
  ],
  [
    "Wie läuft die Anfrage ab?",
    "Du schickst kurz Branche, Ziel und Wunschstil. Danach bekommst du eine klare Einschätzung, welches Paket sinnvoll ist.",
  ],
];

export default function FAQ() {
  return (
    <section className="faqSection">
      <motion.div className="sectionIntro" {...reveal}>
        <p className="kicker">FAQ</p>
        <h2>Fragen, die Kunden vor dem Start haben.</h2>
      </motion.div>
      <div className="faqList">
        {questions.map(([question, answer]) => (
          <motion.details key={question} {...reveal}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
