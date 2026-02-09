import { PersonalInfoData } from "@/app/mocks/personal-info";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { SkillsViewEnum } from "../lib/enums";
import { CardItems } from "@/components/common/CardItems";
import { usePageTransition } from "../context/PageTransitionContext";
import { SkillsViewType } from "../lib/types";
import { useEffect } from "react";
import { useSkills } from "../context/SkillsContext";

const variants = (viewActive: SkillsViewType) => {
  const base = {
    initial: { opacity: 0, width: "50%", x: "-5rem" },
    animate: {
      opacity: 1,
      width: viewActive === SkillsViewEnum.Skills ? "50%" : "0%",
      visibility: viewActive === SkillsViewEnum.Skills ? "visible" : "hidden",
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.5 },
    }}

    if (viewActive === SkillsViewEnum.Skills) {
      return {
        ...base,
        exit: {
          opacity: 0,
            x: "-5rem",
            transition: { duration: 0.5, ease: "easeIn" as const },
        }
      }
    }
    return base
}

export default function TypeSkills() {
  const { viewActive, setViewActive, setFilter } = useSkills();
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls, viewActive]);
  
  return (
      <motion.div
      variants={variants(viewActive)}
      animate={controls}
        initial="initial"
        className={cn("space-y-8")}
      >
        {PersonalInfoData.skills.types.map((item, index) => {
          return (
            <CardItems
              key={`type-skill-${index}`}
              initial={{ opacity: 0, x: "-5rem" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              name={item.name}
              data={item.skills}
              onClickItem={(e) => {
                setViewActive("projects")
                setFilter({
                  skill: e.value,
                  type: ""
                })
              }}
            />
          );
        })}
      </motion.div>
  );
}
