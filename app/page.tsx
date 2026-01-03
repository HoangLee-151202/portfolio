"use client";

import Resume from "./home/resume";
import Skills from "./home/skills";
import Sidebar from "./home/sidebar";
import { useApp } from "./context/AppContext";
import ExtraAction from "./home/extra-action";
import Hero from "./home/hero";
import About from "./home/about";
import { AnimatePresence } from "motion/react";

export const sections = [
  { id: "home", component: Hero },
  { id: "about", component: About },
  { id: "resume", component: Resume },
  { id: "skills", component: Skills },
];

export default function Home() {
  const { activeSection } = useApp();
  const section = sections.find((section) => section.id === activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <ExtraAction />
      <main className="ml-[var(--sidebar-width)]">
        <AnimatePresence mode="wait">
          {section ? <section.component key={section.id}/> : null}
        </AnimatePresence>
      </main>
    </div>
  );
}
