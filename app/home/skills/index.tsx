import TypeSkills from "./TypeSkills";
import ProjectsSkills from "./ProjectsSkills";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { Button } from "@/components/ui/button";
import ProjectSkills from "./ProjectSkills";

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
    <AnimatePresence mode="wait" propagate>
      {viewActive !== ViewEnum.Project && (
        <article key="projects" className="flex" id="skills">
          <TypeSkills viewActive={viewActive} />
          <ProjectsSkills onChangeView={onChangeView} viewActive={viewActive} />
        </article>
      )}
      {viewActive === ViewEnum.Project && (
        <ProjectSkills
          key="project"
          onChangeView={onChangeView}
          viewActive={viewActive}
        />
      )}
    </AnimatePresence>
  );
}
