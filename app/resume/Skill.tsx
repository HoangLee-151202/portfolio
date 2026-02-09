"use client"

import { PersonalInfoData } from "@/app/mocks/personal-info";
import { CardItems } from "@/components/common/CardItems";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";

const variants = (index: number) => {
  return {
    initial: { opacity: 0, y: "-1rem" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 1.3 },
    },
    exit: {
      opacity: 0,
      x: index ? "5rem" : "-5rem",
      transition: {
        duration: 0.5,
        ease: "easeIn" as const,
      },
    }
  }

}

export default function SkillResume() {
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return PersonalInfoData.resume.skills.map((item, index) => (
    <CardItems
      animate={controls}
      variants={variants(index)}
      initial="initial"
      name={item.name}
      data={item.outstands}
    />
  ));
}
