import Link from "next/link";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { cn } from "@/lib/utils";
import { useApp } from "@/app/context/AppContext";
import { MAIN_MENU } from "@/app/config/menu";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function ContentHero() {
  const { onChangeActiveSection } = useApp();
  return (
    <AnimatePresence mode="wait" propagate>
      <motion.div
        exit={{
          opacity: 0,
          x: "-5rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="space-y-6"
      >
        <h1 className="space-y-4">
          <motion.p
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi there!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            I'm <span className="text-primary">{PersonalInfoData.name}</span>,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-primary">{PersonalInfoData.role}</span>.
          </motion.p>
        </h1>
          <motion.p
            initial={{ opacity: 0, y: "-1rem" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {PersonalInfoData.hero.content1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "-1rem" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            {PersonalInfoData.hero.content2}
          </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "-0.5rem" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
        >
          <Button onClick={() => onChangeActiveSection(MAIN_MENU[1].id)}>
            More About Me →
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
