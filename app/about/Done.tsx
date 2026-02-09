"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import GoalsAbout from "./Goals";
import { usePageTransition } from "../context/PageTransitionContext";

const variants = {
  initial: { opacity: 0, x: "5rem" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 1.4,
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
};

export default function DoneAbout() {
  const controls = usePageTransition();
  return (
    <Card animate={controls} variants={variants} initial="initial">
      <CardHeader>
        <CardTitle>What I’ve Done?</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-32">
        <div className="flex flex-col space-y-8">
          {PersonalInfoData.about.whatIDone.map((item, index) => (
            <p className="flex gap-4 items-center">
              <span
                className={cn(
                  "font-raleway font-bold text-6xl",
                  index % 2 ? "text-zinc-500" : "text-primary"
                )}
              >
                {item.value}
              </span>
              <span className="font-semibold">{item.name}</span>
            </p>
          ))}
        </div>
        <GoalsAbout />
      </CardContent>
    </Card>
  );
}
