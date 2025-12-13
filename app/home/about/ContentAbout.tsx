import { PersonalInfoData } from "@/app/mocks/personal-info";
import { cn } from "@/lib/utils";
import { useApp } from "@/app/context/AppContext";
import { MAIN_MENU } from "@/app/config/menu";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function ContentAbout() {
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
        className="space-y-4 col-span-2"
      >
        <motion.h3
          initial={{ opacity: 0, x: "-5rem" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me -{" "}
          <span className="text-primary">{PersonalInfoData.role}</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: "-1rem" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {PersonalInfoData.about.content1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "-1rem" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {PersonalInfoData.about.content2}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: "-0.5rem" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        >
          <Button
            className="!mt-2"
            onClick={() => onChangeActiveSection(MAIN_MENU[2].id)}
          >
            View My Resume →
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
