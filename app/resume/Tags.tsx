"use client"

import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";

const variants = {
  initial: { opacity: 0, x: "5rem" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    x: "5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
}

export default function TagsResume() {
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <Card
      animate={controls}
      variants={variants}
      initial="initial"
      className="col-span-10"
    >
      <CardContent className="w-full">
        <ul className="grid grid-cols-3 gap-x-8 gap-y-4 text-sm">
          {PersonalInfoData.resume.tags.map((item, index) => (
            <li key={`tag-${index}`} className="bg-background px-4 py-2 rounded-md">
              {item.icon}&nbsp;{item.tag}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
