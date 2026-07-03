
"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 36, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.68 }
};

const metrics = [
  ["01", "Premium Look", "Ein Auftritt, der nicht nach Baukasten aussieht."],
  ["02", "Klare Anfragewege", "Kontakt, WhatsApp und Formular werden sichtbar geführt."],
  ["03", "Mobile First", "Auf dem Handy bleibt die Seite schnell und sauber."],
  ["04", "Erweiterbar", "Später sind Portfolio, Blog, Shop oder Landingpages möglich."]
];

const quotes = [
  {
    name: "Lokales Unternehmen",
    role: "Website Relaunch",
    text: "Der neue Aufbau wirkt sofort deutlich hochwertiger. Man versteht schneller, was angeboten wird und wie man Kontakt aufnimmt."
  },
  {
    name: "Dienstleister",
    role: "Premium Onepager",
    text: "Die Seite fühlt sich eher nach Marke an als nach normaler Website. Genau dieser Eindruck war wichtig."
  },
  {
    name: "Startprojekt",
    role: "Launch Begleitung",
    text: "Keine unnötige Komplexität, sondern ein starker erster Auftritt mit klarer Struktur und gutem mobilen Design."
  }
];

export default function ProofSection() {
  return (
    <section className="proofSection">
      <motion.div className="sectionIntro wide" {...reveal}>
        <p className="kicker">Warum es funktioniert</p>
        <h2>Eine Website muss nicht viel reden. Sie muss direkt überzeugen.</h2>
        <span>Deshalb wird jedes Element auf Wirkung geprüft: Was sieht der Besucher zuerst? Was versteht er danach? Und wie einfach wird die Anfrage?</span>
      </motion.div>

      <div className="metricGrid">
        {metrics.map(([num, title, text]) => (
          <motion.article className="metricCard" key={title} {...reveal}>
            <small>{num}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>

      <div className="quoteGrid">
        {quotes.map((quote) => (
          <motion.article className="quoteCard" key={quote.name} {...reveal}>
            <div className="quoteStars">★★★★★</div>
            <p>“{quote.text}”</p>
            <div>
              <strong>{quote.name}</strong>
              <span>{quote.role}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
