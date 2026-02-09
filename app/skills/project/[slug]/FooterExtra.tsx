"use client"

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "@/public/assets/icons/CircularConnection copy";

export default function FooterExtraProject() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait" propagate>
      <div className="fixed right-10 bottom-[14.5rem]  space-y-6">
        <motion.div initial={{ opacity: 0, x: "5rem" }} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }} exit={{ opacity: 0, x: "5rem", transition: { duration: 0.5, ease: "easeIn" } }} >
          <ArrowUp
            width={42}
            height={42}
            className={cn(
              "hover:text-primary cursor-pointer text-zinc-100",

            )}
            onClick={scrollToTop}
          />
        </motion.div>
      </div>
    </AnimatePresence>

  );
}