"use client"

import Image from "next/image";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";

const variants = {
  initial: {
    opacity: 0, x: "-5rem"
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    x: "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
}

export default function AvatarResume() {
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      variants={variants}
      initial="initial"
      className={cn("relative w-full rounded-sm row-span-2 col-span-2")}
    >
      <Image
        src={"/assets/images/avatar.png"}
        loading="lazy"
        alt="Avatar"
        fill
        className="object-cover rounded-sm !relative"
      />
    </motion.div>
  );
}
