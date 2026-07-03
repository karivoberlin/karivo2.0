"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    label: "Premium Landingpage",
    title: "Ein Auftritt, der sofort Vertrauen aufbaut.",
    text: "Große Typografie, klare Botschaft, starke Kontaktwege und ein Design, das nicht nach Baukasten aussieht.",
    tags: ["Hero", "CTA", "Mobile"],
  },
  {
    label: "Business Website",
    title: "Struktur für Unternehmen, die seriös wirken wollen.",
    text: "Leistungen, Prozess, Referenzen und Anfrageformular werden so geführt, dass Besucher schnell verstehen und handeln.",
    tags: ["Leistungen", "Prozess", "Formular"],
  },
  {
    label: "Launch System",
    title: "Schnell live gehen — ohne Technikstress.",
    text: "Saubere Next.js-Basis, responsive Design, SEO-Grundstruktur und eine Website, die sich später erweitern lässt.",
    tags: ["Next.js", "SEO", "Vercel"],
  },
];

function BrowserMockup({ project, index }) {
  return (
    <motion.article
      className="projectCard"
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, delay: index * 0.08 }}
    >
      <div className="browserChrome">
        <i /><i /><i />
        <span>karivo.website/demo-{index + 1}</span>
      </div>
      <div className="mockScreen">
        <div className="mockNav" />
        <div className="mockHero">
          <small>{project.label}</small>
          <strong>{project.title}</strong>
          <p>{project.text}</p>
        </div>
        <div className="mockRows">
          <b /><b /><b />
        </div>
      </div>
      <div className="projectInfo">
        <p>{project.label}</p>
        <h3>{project.title}</h3>
        <div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <motion.div className="portfolioAura" style={{ y }} />
      <motion.div
        className="sectionIntro wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="kicker">Portfolio-System</p>
        <h2>Keine leeren Versprechen. Sondern ein Look, der sofort verkauft.</h2>
        <span>Die Mockups sind bewusst neutral gehalten. Du kannst sie später durch echte Kundenprojekte ersetzen.</span>
      </motion.div>

      <div className="portfolioGrid">
        {projects.map((project, index) => (
          <BrowserMockup project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}
