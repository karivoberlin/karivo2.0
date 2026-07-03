"use client";

import { motion } from "framer-motion";

const reveal = { initial: { opacity: 0, y: 40, filter: "blur(10px)" }, whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.7 } };

const cases = [
  { type: "Lokales Unternehmen", headline: "Aus unscheinbar wird ein Auftritt, der ernst genommen wird.", old: ["keine klare Botschaft", "zu viele Informationen", "Kontakt zu weit unten"], fresh: ["starker erster Eindruck", "klare Angebotsstruktur", "Anfrage in jedem Bereich"] },
  { type: "Dienstleister", headline: "Mehr Vertrauen durch bessere Erklärung und hochwertigere Darstellung.", old: ["Baukasten-Look", "wenig Vertrauen", "keine Führung"], fresh: ["eigene Designsprache", "Proof & FAQ", "klare Nutzerführung"] },
  { type: "Premium Marke", headline: "Eine Website, die das Preisniveau der Leistung spürbar macht.", old: ["wirkt billig", "keine Markenwirkung", "schwache CTAs"], fresh: ["Premium Look", "starke Typografie", "hochwertiger Abschluss"] },
];

function List({ items }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function CaseStudies() {
  return (
    <section className="caseStudies">
      <motion.div className="sectionIntro wide" {...reveal}>
        <p className="kicker">Vorher / Nachher Denken</p>
        <h2>Der Unterschied liegt nicht in Effekten. Sondern in Wirkung.</h2>
        <span>Diese Beispiele zeigen, wie KARIVO eine normale Website in einen überzeugenden Auftritt übersetzt.</span>
      </motion.div>
      <div className="caseStudyGrid">
        {cases.map((item, index) => (
          <motion.article className="caseStudy" key={item.headline} {...reveal} transition={{ duration: 0.7, delay: index * 0.08 }}>
            <div className="caseNumber">0{index + 1}</div><p>{item.type}</p><h3>{item.headline}</h3>
            <div className="beforeAfter"><div><span>Vorher</span><List items={item.old} /></div><div><span>Nachher</span><List items={item.fresh} /></div></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
