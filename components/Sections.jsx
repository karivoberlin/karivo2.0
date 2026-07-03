"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 42, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.72 },
};

export function TrustBar() {
  return (
    <section className="trustBar">
      {["Strategie", "Design", "Entwicklung", "Launch", "Betreuung"].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

export function Services() {
  const services = [
    ["01", "Webdesign", "Websites, die hochwertig wirken, schnell verstanden werden und Besucher gezielt zur Anfrage führen."],
    ["02", "Positionierung", "Wir bringen dein Angebot auf den Punkt, damit Besucher sofort verstehen, warum sie dich wählen sollten."],
    ["03", "Conversion", "Kontaktwege, Calls-to-Action und Aufbau werden so gesetzt, dass aus Besuchern echte Anfragen werden."],
    ["04", "Launch", "Saubere technische Basis mit Next.js, mobiler Optimierung und einer Struktur, die später erweiterbar bleibt."],
  ];

  return (
    <section className="services" id="leistungen">
      <motion.div className="sectionIntro" {...reveal}>
        <p className="kicker">Was KARIVO macht</p>
        <h2>Digitale Auftritte, die nicht wie Standard aussehen.</h2>
        <span>Für Unternehmen, Selbstständige und lokale Marken, die online professioneller wirken möchten.</span>
      </motion.div>

      <div className="serviceStack">
        {services.map(([num, title, text]) => (
          <motion.article className="serviceLine" key={title} {...reveal}>
            <b>{num}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Method() {
  const steps = [
    ["Analyse", "Wir klären Angebot, Zielgruppe, Stil und welche Aktion Besucher am Ende ausführen sollen."],
    ["Konzept", "Aus Struktur, Text und Design entsteht ein klarer Seitenaufbau mit starker visueller Richtung."],
    ["Umsetzung", "Die Website wird responsive entwickelt, animiert und technisch sauber für den Launch vorbereitet."],
    ["Livegang", "Nach finaler Abstimmung geht die Seite online und kann anschließend weiter ausgebaut werden."],
  ];

  return (
    <section className="method" id="prozess">
      <motion.div className="sectionIntro wide" {...reveal}>
        <p className="kicker">Prozess</p>
        <h2>Von der Idee zum Auftritt, der direkt ernst genommen wird.</h2>
      </motion.div>
      <div className="methodGrid">
        {steps.map(([title, text], index) => (
          <motion.article className="methodCard" key={title} {...reveal}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Packages() {
  const packages = [
    ["Start", "ab 599 €", "Für einen hochwertigen Onepager mit klarem Angebot und Anfragefokus.", ["Strategischer Aufbau", "Responsive Design", "Kontaktsektion"]],
    ["Premium", "ab 1.199 €", "Für Unternehmen, die mit mehreren Bereichen, Animationen und stärkerer Wirkung auftreten wollen.", ["Mehrere Sections", "Premium Animationen", "SEO-Grundstruktur"]],
    ["Signature", "ab 2.499 €", "Für einen individuellen Auftritt mit eigener Designsprache und stärkerem Markencharakter.", ["Individuelles Konzept", "3D/Scroll-Effekte", "Launch-Begleitung"]],
  ];

  return (
    <section className="packages" id="pakete">
      <motion.div className="sectionIntro" {...reveal}>
        <p className="kicker">Pakete</p>
        <h2>Klarer Einstieg. Premium Wirkung.</h2>
      </motion.div>
      <div className="packageGrid">
        {packages.map(([name, price, text, features], index) => (
          <motion.article className={index === 1 ? "packageCard featured" : "packageCard"} key={name} {...reveal}>
            {index === 1 && <em>Empfohlen</em>}
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{text}</p>
            <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a href="#kontakt">Anfragen</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="kontakt">
      <motion.div className="contactText" {...reveal}>
        <p className="kicker">Projekt starten</p>
        <h2>Bereit für eine Website, die Eindruck hinterlässt?</h2>
        <span>Schick kurz, was du brauchst. Danach bekommst du eine klare Einschätzung, welches Paket für dich Sinn macht.</span>
      </motion.div>

      <motion.form className="contactForm" action="https://formspree.io/f/mkolbovw" method="POST" {...reveal}>
        <div className="formRow">
          <input name="name" placeholder="Name / Unternehmen" required />
          <input name="email" type="email" placeholder="E-Mail" required />
        </div>
        <input name="telefon" placeholder="Telefon / WhatsApp" />
        <select name="budget" defaultValue="">
          <option value="" disabled>Budget / Paket</option>
          <option>Start · ab 599 €</option>
          <option>Premium · ab 1.199 €</option>
          <option>Signature · ab 2.499 €</option>
          <option>Noch unsicher</option>
        </select>
        <textarea name="nachricht" placeholder="Worum geht es? Branche, Ziel, Wunschstil, aktuelle Website..." required />
        <button type="submit">Anfrage senden</button>
        <small>Die Anfrage wird über Formspree an KARIVO gesendet.</small>
      </motion.form>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>KARIVO</strong>
        <p>Websites, die im Kopf bleiben.</p>
      </div>
      <nav>
        <a href="#leistungen">Leistungen</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </footer>
  );
}
