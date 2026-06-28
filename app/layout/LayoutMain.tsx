"use client";

import { AnimatePresence, motion } from "motion/react";

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait" propagate>
      <motion.main>
        <motion.div className="fixed top-0 left-0 right-0 h-4 bg-background z-50"></motion.div>
        <motion.div className="pointer-events-none fixed top-4 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent  z-50"></motion.div>
        {children}
        <motion.div className="fixed bottom-0 left-0 right-0 h-4 bg-background"></motion.div>
        <motion.div className="pointer-events-none fixed bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
