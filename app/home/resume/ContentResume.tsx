import {
  Card,
  CardContent
} from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { AnimatePresence } from "motion/react";

export default function ContentResume() {
  return (
    <AnimatePresence mode="wait" propagate>
      <Card
        initial={{ opacity: 0, x: "5rem" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          x: "5rem",
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="col-span-7"
      >
        <CardContent>{PersonalInfoData.resume.content}</CardContent>
      </Card>
    </AnimatePresence>
  );
}
