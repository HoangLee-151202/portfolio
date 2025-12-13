import TypeSkills from "./TypeSkills";
import ProjectSkills from "./ProjectSkills";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { Button } from "@/components/ui/button";

export type ViewType = "Skills" | "Projects" | "Project";
export enum ViewEnum {
  Skills = "Skills",
  Projects = "Projects",
  Project = "Project",
}
export default function Skills() {
  const [viewActive, setViewActive] = useState<ViewType>("Skills");

  const onChangeView = (view: ViewType) => {
    setViewActive(view);
  };
  return (
    <article
      className="flex"
      id="skills"
    >
        <TypeSkills viewActive={viewActive} />
      <ProjectSkills onChangeView={onChangeView} viewActive={viewActive} />
    </article>
  );
}
