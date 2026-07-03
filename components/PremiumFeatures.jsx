"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const reveal = {
  initial: { opacity: 0, y: 42, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72 },
};

const features = [
  ["01", "Premium Hero", "Der erste Bildschirm bekommt klare Botschaft, große Typografie und eine visuelle Signatur, die hängen bleibt."],
  ["02", "Conversion-Aufbau", "Jede Section führt zum nächsten Schritt: verstehen, vertrauen, anfragen."],
  ["03", "Microanimationen", "Bewegung wird gezielt eingesetzt, damit die Seite hochwertig wirkt statt hektisch."],
  ["04", "Mobile Wirkung", "Der Look bleibt auch auf dem Handy stark, schnell und sauber lesbar."],
  ["05", "Technische Basis", "Next.js, saubere Komponenten und Vercel-ready Struktur machen den Launch unkompliziert."],
  ["06", "Markenauftritt", "Farben, Abstände, Texte und UI-Elemente wirken wie aus einem System statt zusammengewürfelt."],
];

export default function PremiumFeatures() {
  return (
    <section className="premiumFeatures">
      <motion.div className="sectionIntro wide" {...reveal}>
        <p className="kicker">Premium System</p>
        <h2>Eine Website muss nicht laut sein. Sie muss teuer wirken und klar führen.</h2>
        <span>Deshalb baut KARIVO nicht nur schöne Bereiche, sondern ein zusammenhängendes System aus Design, Struktur und Aktion.</span>
      </motion.div>
      <div className="premiumFeatureGrid">
        {features.map(([num, title, text], index) => (
          <motion.article className="premiumFeature" key={title} {...reveal} transition={{ duration: 0.65, delay: index * 0.05 }}>
            <b>{num}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ScrollStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const steps = [
    ["01", "Aufmerksamkeit", "Der erste Eindruck entscheidet, ob jemand bleibt oder direkt weiterscrollt."],
    ["02", "Verständnis", "Besucher müssen dein Angebot sofort einordnen können."],
    ["03", "Vertrauen", "Proof, klare Texte und Premium-Design nehmen Zweifel raus."],
    ["04", "Anfrage", "Am Ende muss der nächste Schritt einfach und sichtbar sein."],
  ];

  return (
    <section className="scrollStory" ref={ref}>
      <div className="storyCopy">
        <p className="kicker">Scroll Journey</p>
        <h2>Vom ersten Blick bis zur Anfrage.</h2>
        <span>Die Seite wird wie eine kleine Reise aufgebaut. Nicht zufällig, sondern mit Richtung.</span>
        <div className="storySteps">
          {steps.map(([num, title, text]) => (
            <motion.article key={title} {...reveal}>
              <b>{num}</b>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <motion.div className="storyMockup" style={{ y, rotate }}>
        <div className="storyChrome"><i /><i /><i /><span>karivo.flow</span></div>
        <div className="storyScreen">
          <small>Website Flow</small>
          <strong>Besucher werden geführt, nicht alleingelassen.</strong>
          <p>Hero → Nutzen → Vertrauen → Angebot → Anfrage</p>
          <div className="storyBars"><b /><b /><b /><b /></div>
        </div>
      </motion.div>
    </section>
  );
}
