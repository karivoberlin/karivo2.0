"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Kurze Anfrage", "Du schickst, worum es geht, welche Branche du hast und ob bereits eine Website existiert."],
  ["02", "Klare Einschätzung", "KARIVO prüft, welches Paket Sinn macht und was der schnellste Weg zu einem starken Ergebnis ist."],
  ["03", "Designrichtung", "Look, Struktur, Tonalität und wichtigste Inhalte werden sauber festgelegt."],
  ["04", "Umsetzung", "Die Seite wird gebaut, animiert, mobil optimiert und für den Launch vorbereitet."],
  ["05", "Livegang", "Nach finalem Check geht die Website online und kann danach weiter ausgebaut werden."],
];

export default function NextSteps() {
  return (
    <section className="nextStepsSection">
      <motion.div
        className="sectionIntro"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Nächste Schritte</p>
        <h2>So wird aus einer Idee ein fertiger Auftritt.</h2>
      </motion.div>

      <div className="nextStepsList">
        {steps.map(([num, title, text], index) => (
          <motion.article
            className="nextStep"
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
          >
            <b>{num}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
