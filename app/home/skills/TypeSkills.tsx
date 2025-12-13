import { PersonalInfoData } from "@/app/mocks/personal-info";
import { CardList } from "@/app/components/CardList";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ViewEnum, ViewType } from ".";
import { cn } from "@/lib/utils";

interface TypeSkillsProps {
  viewActive: ViewType;
}

export default function TypeSkills(props: TypeSkillsProps) {
  const { viewActive } = props;

  return (
    <AnimatePresence mode="wait" propagate>
      <motion.div
        initial={{ opacity: 0, width: "50%", x: "-5rem" }}
        animate={{
          opacity: 1,
          width: viewActive === ViewEnum.Skills ? "50%" : "0%",
          x: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          x: "-5rem",
          transition: { duration: 0.5, ease: "easeIn" },
        }}
        className={cn("space-y-8")}
      >
        {PersonalInfoData.skills.types.map((item, index) => {
          return (
            <CardList
              key={`typw-skill-${index}`}
              initial={{ opacity: 0, x: "-5rem" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              name={item.name}
              data={item.skills}
            />
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
