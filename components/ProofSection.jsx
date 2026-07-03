"use client";

import { motion } from "framer-motion";

const stats = [["100%", "responsive"], ["1", "klarer Ansprechpartner"], ["24h", "Erstreaktion Ziel"], ["0", "Baukasten-Look"]];
const quotes = [
  ["Die Seite soll direkt zeigen, dass du Qualität lieferst.", "KARIVO Prinzip"],
  ["Design ist nicht Deko. Design soll Vertrauen verkaufen.", "Conversion Gedanke"],
  ["Je klarer die Seite, desto leichter wird die Anfrage.", "Website System"],
];

export default function ProofSection() {
  return (
    <section className="proofSection">
      <motion.div className="proofStats" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        {stats.map(([big, small]) => <article key={big}><strong>{big}</strong><span>{small}</span></article>)}
      </motion.div>
      <div className="quoteGrid">
        {quotes.map(([text, source], index) => (
          <motion.article className="quoteCard" key={text} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.07 }}>
            <p>“{text}”</p><span>{source}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
