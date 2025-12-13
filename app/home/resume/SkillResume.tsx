import { PersonalInfoData } from "@/app/mocks/personal-info";
import { CardList } from "@/app/components/CardList";
import { AnimatePresence } from "motion/react";

export default function SkillResume() {
  return PersonalInfoData.resume.skills.map((item, index) => (
    <AnimatePresence mode="wait" propagate>
      <CardList
        initial={{ opacity: 0, y: "-1rem" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay: 1.3 },
        }}
        exit={{
          opacity: 0,
          x: index ? "5rem" : "-5rem",
          transition: {
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        name={item.name}
        data={item.outstands}
      />
    </AnimatePresence>
  ));
}
