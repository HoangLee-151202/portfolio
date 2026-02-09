import Image from "next/image";
import * as motion from "motion/react-client";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";

const variants = {
  initial: { opacity: 0, x: "5rem" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    x: "5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  },
}

export default function ImageHero() {
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      variants={variants}
      initial="initial"
      className="flex justify-center"
    >
      <div className="relative w-[80%] rounded-sm">
        <Image
          src={"/assets/images/hero.png"}
          loading="lazy"
          alt="Hero"
          fill
          className="object-cover rounded-sm !relative right-0"
        />
      </div>
    </motion.div>
  );
}
