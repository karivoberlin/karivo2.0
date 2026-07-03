"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -38, filter: "blur(18px)" }}
          transition={{ duration: 0.65 }}
        >
          <div className="loaderInner">
            <motion.div
              className="loaderMark"
              initial={{ scale: 0.72, rotate: -9 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              K
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
              KARIVO Premium System
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
