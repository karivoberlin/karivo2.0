"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1 }}
    >
      <a className="logo" href="#start">KARIVO</a>
      <nav>
        <a href="#leistungen">Leistungen</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#prozess">Prozess</a>
        <a href="#pakete">Pakete</a>
      </nav>
      <a className="navButton" href="#kontakt">Projekt starten</a>
    </motion.header>
  );
}
