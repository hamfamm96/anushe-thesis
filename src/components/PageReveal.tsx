"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageReveal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Dismiss after a brief moment — just enough for a polished entrance
    const t = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-reveal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#0C0804] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
