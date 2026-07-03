"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const reveal = {
  initial: { opacity: 0, y: 44, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

const features = [
  {
    number: "01",
    title: "Erster Eindruck",
    text: "Der Hero wird so aufgebaut, dass Besucher innerhalb von Sekunden verstehen, warum dein Unternehmen professionell wirkt.",
  },
  {
    number: "02",
    title: "Klare Führung",
    text: "Jede Section hat eine Aufgabe: Vertrauen erzeugen, Angebot erklären, Entscheidung erleichtern und Kontakt auslösen.",
  },
  {
    number: "03",
    title: "Premium Bewegung",
    text: "Animationen werden nicht als Spielerei eingesetzt, sondern als ruhige Führung durch die Website.",
  },
  {
    number: "04",
    title: "Saubere Technik",
    text: "Next.js, responsive Layouts und eine klare Struktur machen den Auftritt schnell, stabil und später erweiterbar.",
  },
];

export default function PremiumFeatures() {
  return (
    <section className="premiumFeatures">
      <motion.div className="sectionIntro wide" {...reveal}>
        <p className="kicker">Premium Details</p>
        <h2>Die Website soll nicht nur schön sein. Sie soll teuer wirken.</h2>
        <span>
          Genau deshalb arbeitet KARIVO mit großen Abständen, klarer Typografie,
          hochwertiger Bewegung und einem Aufbau, der Besucher nicht überfordert.
        </span>
      </motion.div>

      <div className="featureGrid">
        {features.map((feature) => (
          <motion.article className="featurePanel" key={feature.title} {...reveal}>
            <div className="featureOrb">{feature.number}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ScrollStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const story = [
    ["01", "Positionierung", "Wir formulieren deine Seite so, dass nicht einfach nur Informationen dastehen, sondern ein echtes Angebot."],
    ["02", "Designsystem", "Buttons, Karten, Abstände, Farben und Animationen folgen einer gemeinsamen Designsprache."],
    ["03", "Launch", "Die Seite wird so vorbereitet, dass du sie einfach über GitHub und Vercel live stellen kannst."],
  ];

  return (
    <section className="scrollStory" ref={ref}>
      <motion.div className="storyVisual" style={{ rotate, y }}>
        <div className="storyDevice">
          <div className="storyTop"><i /><i /><i /><span>karivo.website</span></div>
          <div className="storyScreen">
            <small>Premium System</small>
            <strong>Struktur. Design. Anfrage.</strong>
            <p>Eine Website, die nicht wie ein Template wirkt.</p>
            <div className="storyBars"><b /><b /><b /></div>
          </div>
        </div>
      </motion.div>

      <div className="storyText">
        <p className="kicker">Scroll Experience</p>
        <h2>Jede Bewegung hat einen Zweck.</h2>
        {story.map(([num, title, text]) => (
          <motion.div className="storyStep" key={title} {...reveal}>
            <span>{num}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
