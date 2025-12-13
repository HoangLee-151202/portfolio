import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import GoalsAbout from "./GoalsAbout";
import { AnimatePresence } from "motion/react";

export default function DoneAbout() {
  return (
    <AnimatePresence mode="wait" propagate>
      <Card
        initial={{ opacity: 0, x: "5rem" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 1.4
          },
        }}
        exit={{
          opacity: 0,
          x: "5rem",
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        >
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
            <GoalsAbout/>
          </CardContent>
        </Card>
        </AnimatePresence>
  );
}
