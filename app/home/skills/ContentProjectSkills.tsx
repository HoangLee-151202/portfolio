"use client";

import { CardList } from "@/app/components/CardList";
import { projectData } from "@/app/mocks/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, LayoutGroup } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useRef, useLayoutEffect } from "react";

const tabItems = [
  {
    value: "basicInfo",
    label: "Basic Info",
    content: (
      <motion.p className="text-sm" initial={{ opacity: 0, y: "0.5rem" }}
      animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        The project is a modern web platform with a focus on performance,
        stability and user experience. The system is built with a flexible
        architecture, easy to expand and suitable for large-scale growth.
      </motion.p>
    ),
  },
  { value: "responsibilities", label: "Responsibilities", content: (
    <ol className="text-zinc-300 text-sm list-decimal ml-8">
      {projectData.responsibilities.map((item, index) => (
        <motion.li  initial={{ opacity: 0, y: "1rem" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index*0.05 }}>
        {item}
      </motion.li>
      ))}
                  </ol>
  ) },
  { value: "techStack", label: "Tech Stack", content: (
    <div
                  className="grid md:grid-cols-2 gap-6"
                >
                  
                    
                        {projectData.techStack.map((item, index) => {
                      return (
                        <CardList
              key={`project-tech-${item.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} transition={{ duration: 0.5}}
              name={item.name}
              data={item.techs}
              className="text-sm gap-2 p-0"
              classNameIcon="h-5 w-5"
              isMotion
            />
                      );
                    })}
                  
                  
                </div>
  ) },
];

export default function ContentProjectSkills() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Cập nhật vị trí underline khi tab thay đổi
  useLayoutEffect(() => {
    const currentTab = tabRefs.current[tabItems.indexOf(selectedTab)];
    if (currentTab) {
      const rect = currentTab.getBoundingClientRect();
      const parentRect = currentTab.parentElement!.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [selectedTab]);

  return (
    <LayoutGroup>
      <Tabs value={selectedTab.value}>
        <TabsList className="relative z-0 mb-2">
          {tabItems.map((item, index) => (
            <TabsTrigger
              key={item.label}
              ref={(el: HTMLButtonElement | null) => {
                tabRefs.current[index] = el;
              }}
              initial={false}
              animate={{
                color:
                  item === selectedTab
                    ? "var(--heading)"
                    : "var(--secondary-foreground)",
              }}
              onClick={() => setSelectedTab(item)}
              value={item.label}
            >
              {item.label}
            </TabsTrigger>
          ))}
          <motion.div
            layoutId="underline"
            className={`absolute bg-background z-[-1] inset-0 my-1 rounded-sm`}
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </TabsList>
        <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.value}
                        exit={{ opacity: 0, transition: {duration: 0.5} }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab.content}
                    </motion.div>
                </AnimatePresence>
      </Tabs>
    </LayoutGroup>
  );
}
