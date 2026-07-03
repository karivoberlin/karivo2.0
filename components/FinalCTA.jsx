"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="finalCta">
      <motion.div initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
        <p className="kicker">Bereit?</p>
        <h2>Wenn deine Website schon verkaufen soll, bevor du überhaupt telefonierst.</h2>
        <a className="btn primary" href="#kontakt">Projekt anfragen</a>
      </motion.div>
    </section>
  );
}
