"use client"

import TypeSkills from "./Type";
import ProjectsSkills from "./Projects";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { SkillsViewType } from "../lib/types";
import { usePageTransition } from "../context/PageTransitionContext";
import { SkillsProvider } from "../context/SkillsContext";


export default function Skills() {
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
