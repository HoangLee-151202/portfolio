"use client"

import TypeSkills from "./Type";
import ProjectsSkills from "./Projects";
import { useState } from "react";
import { SkillsViewType } from "../lib/types";
import { SkillsProvider } from "../context/SkillsContext";


export default function SkillsPage() {
  const [viewActive, setViewActive] = useState<SkillsViewType>("skills");
  
  return (
    <SkillsProvider viewActive={viewActive} setViewActive={setViewActive}>
          <article className="flex">
            <TypeSkills />
            <ProjectsSkills />
          </article>
    </SkillsProvider>
  );
}
