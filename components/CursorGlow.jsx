"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const move = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      className="cursorGlow"
      style={{ transform: `translate3d(${pos.x - 220}px, ${pos.y - 220}px, 0)` }}
      aria-hidden="true"
    />
  );
}
