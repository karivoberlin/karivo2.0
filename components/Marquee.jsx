"use client";

export default function Marquee() {
  const words = ["Webdesign", "Branding", "Conversion", "SEO-Basis", "Animation", "Performance", "UX", "Launch"];
  return (
    <section className="marquee" aria-label="KARIVO Leistungen">
      <div className="marqueeTrack">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </section>
  );
}
