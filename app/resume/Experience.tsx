"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { AnimatePresence } from "motion/react";
import { usePageTransition } from "../context/PageTransitionContext";

const variants = (index: number) => {
  return {
    initial: { opacity: 0, y: "-1rem" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.8 },
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

export default function ExperienceResume() {
  const controls = usePageTransition();

  return PersonalInfoData.resume.experience.map((item, index) => (
    <Card
      animate={controls}
      variants={variants(index)}
      initial="initial"
    >
      <CardHeader className="border-b pb-2 border-zinc-500">
        <CardTitle>{item.company}</CardTitle>
        <CardDescription>{item.role}</CardDescription>
        <CardAction className="bg-background py-2 px-3 rounded-[0.5rem] text-xs">
          {item.time}
        </CardAction>
      </CardHeader>
      <CardContent className="pl-6 text-xs">
        <ul className="list-disc space-y-2">
          {item.outstands.map((outstand) => (
            <li>{outstand}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  ));
}
