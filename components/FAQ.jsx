"use client";

import { motion } from "framer-motion";

const faqs = [
  ["Für wen ist KARIVO gedacht?", "Für Unternehmen, Selbstständige und lokale Anbieter, die online nicht mehr nach Baukasten aussehen wollen."],
  ["Kann die Website später erweitert werden?", "Ja. Die Next.js-Struktur ist so aufgebaut, dass weitere Unterseiten, Projekte und Bereiche ergänzt werden können."],
  ["Ist das auch für kleine Unternehmen sinnvoll?", "Ja, gerade kleine Unternehmen profitieren von einem starken ersten Eindruck, weil Vertrauen online oft vor dem ersten Gespräch entsteht."],
  ["Was brauche ich zum Start?", "Ein grobes Ziel, ein paar Infos zum Angebot und wenn vorhanden Bilder, Logo oder bestehende Website."],
  ["Wird das auch auf dem Handy gut aussehen?", "Ja. Mobile ist nicht nachträglich, sondern von Anfang an Teil des Designs."],
  ["Kann ich die Website bei Vercel hosten?", "Ja. Das Projekt ist für GitHub und Vercel vorbereitet."],
];

export default function FAQ() {
  return (
    <section className="faqSection" id="faq">
      <motion.div className="sectionIntro" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="kicker">FAQ</p>
        <h2>Fragen, bevor wir starten.</h2>
      </motion.div>
      <div className="faqGrid">
        {faqs.map(([q, a], index) => (
          <motion.details key={q} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.04 }}>
            <summary>{q}</summary>
            <p>{a}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
