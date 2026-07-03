"use client";

import { motion } from "framer-motion";

const tokens = [
  ["01", "Typografie", "Große Headlines, wenig Fließtext und klare Hierarchie sorgen dafür, dass die Seite teuer wirkt."],
  ["02", "Farbe", "Schwarz, Creme und Kupfer werden reduziert eingesetzt, damit der Look hochwertig bleibt."],
  ["03", "Bewegung", "Animationen sind ruhig und gezielt. Nicht verspielt, sondern wie ein Premium-Interface."],
  ["04", "Abstand", "Viel Raum zwischen Elementen macht die Seite clean und professionell."],
  ["05", "Glas & Licht", "Feine Linien, weiche Verläufe und Glow-Effekte geben dem Design Tiefe."],
  ["06", "Karten", "Jede Karte hat einen Zweck: Vertrauen, Erklärung oder Aktion."],
];

export default function DesignSystem() {
  return (
    <section className="designSystem">
      <motion.div className="sectionIntro wide" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="kicker">KARIVO Designsystem</p>
        <h2>Ein eigener Stil, damit deine Seite nicht wie jede zweite Agenturseite aussieht.</h2>
      </motion.div>
      <div className="tokenGrid">
        {tokens.map(([num, title, text], index) => (
          <motion.article className="tokenCard" key={title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.05 }}>
            <b>{num}</b><h3>{title}</h3><p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
