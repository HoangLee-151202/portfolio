"use client";

import { PersonalInfoData } from "@/app/mocks/personal-info";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { AnimatedLink } from "../components/AnimatedLink";
import { usePageTransition } from "../context/PageTransitionContext";

const variants = {
  exit: {
    opacity: 0,
    x: "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  },
};

export default function ContentAbout() {
  const controls = usePageTransition();

  return (
    <motion.div
      animate={controls}
      variants={variants}
      className="space-y-4 col-span-2"
    >
      <motion.h3
        initial={{ opacity: 0, x: "-5rem" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me - <span className="text-primary">{PersonalInfoData.role}</span>
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
        <Button asChild className="!mt-2">
          <AnimatedLink href="/resume">View My Resume →</AnimatedLink>
        </Button>
      </motion.div>
    </motion.div>
  );
}
