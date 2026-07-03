"use client";

import { motion } from "framer-motion";

const items = [
  ["01", "Strategie", "Bevor gestaltet wird, wird geklärt, welches Ziel die Seite erfüllen muss."],
  ["02", "Designsprache", "Der Look wird nicht zufällig gewählt, sondern passend zu Preisniveau und Wirkung."],
  ["03", "Nutzerführung", "Besucher sollen nicht suchen, sondern automatisch zum nächsten Schritt geführt werden."],
  ["04", "Launch", "Am Ende zählt eine saubere Seite, die online schnell funktioniert."],
];

export default function SignatureSystem() {
  return (
    <section className="signatureSystem">
      <motion.div className="sectionIntro wide" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="kicker">Signature System</p>
        <h2>Der Premium-Look entsteht aus System, nicht aus Zufall.</h2>
      </motion.div>
      <div className="signatureGrid">
        {items.map(([num, title, text], index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.06 }}>
            <b>{num}</b><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
