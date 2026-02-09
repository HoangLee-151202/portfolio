"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { usePageTransition } from "../context/PageTransitionContext";

const variants = {
  initial: { opacity: 0, x: "-5rem" },
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
    x: "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  },
};

export default function DoAbout() {
  const controls = usePageTransition();

  return (
    <Card animate={controls} variants={variants} initial="initial">
      <CardHeader>
        <CardTitle>What I Do?</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-4 gap-8">
        {PersonalInfoData.about.whatIDo.map((item, index) => (
          <>
            <div className="flex justify-center">
              <item.icon
                className={index % 2 ? "text-primary" : "text-zinc-500"}
                height={80}
                width={80}
              />
            </div>
            <div className="col-span-3 space-y-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-secondary-foreground text-xs">
                {item.description}
              </p>
            </div>
          </>
        ))}
      </CardContent>
    </Card>
  );
}
