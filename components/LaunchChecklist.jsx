"use client";

import { motion } from "framer-motion";

const groups = [
  { title: "Strategie", items: ["Zielgruppe", "Angebot", "Haupt-CTA", "Seitenstruktur", "Ton & Stil"] },
  { title: "Design", items: ["Hero", "Sektionen", "Typografie", "Farbwelt", "Mobile Ansicht"] },
  { title: "Technik", items: ["Next.js", "Responsive", "Formular", "SEO Basics", "Vercel Launch"] },
];

export default function LaunchChecklist() {
  return (
    <section className="launchChecklist">
      <motion.div className="launchHeader" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="kicker">Launch Check</p>
        <h2>Damit am Ende nicht nur Design steht, sondern eine fertige Website.</h2>
        <span>Vor dem Livegang wird die Seite nach einem klaren System geprüft.</span>
      </motion.div>
      <div className="checklistGrid">
        {groups.map((group, index) => (
          <motion.article className="checklistCard" key={group.title} initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}>
            <strong>0{index + 1}</strong><h3>{group.title}</h3>
            {group.items.map((item) => <div className="checkItem" key={item}><i>✓</i><span>{item}</span></div>)}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
