import { PersonalInfoData } from "@/app/mocks/personal-info";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import { AnimatedLink } from "@/app/components/AnimatedLink";

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

export default function ContentHero() {
  const controls = usePageTransition();

  return (
    <motion.div animate={controls} variants={variants} className="space-y-3 sm:space-y-6">
      <h2 className="space-y-1 sm:space-y-4">
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
      </h2>
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
        <Button asChild>
          <AnimatedLink href="/about">More About Me →</AnimatedLink>
        </Button>
      </motion.div>
    </motion.div>
  );
}
