import TypeSkills from "./TypeSkills";
import ProjectsSkills from "./ProjectsSkills";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { Button } from "@/components/ui/button";
import ProjectSkills from "./ProjectSkills";
import { BreadcrumSkillsType } from "@/app/config/menu";

export enum ViewEnum {
  Skills = "skills",
  Projects = "projects",
  Project = "project",
}
export default function Skills() {
  const [viewActive, setViewActive] = useState<BreadcrumSkillsType>("skills");

  const onChangeView = (view: BreadcrumSkillsType) => {
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
