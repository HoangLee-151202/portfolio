import Image from "next/image";
import { cn } from "@/lib/utils";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import FilterSkills from "./Filter";
import { TablerFolderCode } from "@/public/assets/icons/TablerFolderCode";
import { SkillsViewEnum } from "../lib/enums";
import { SkillsViewType } from "../lib/types";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";
import { useSkills } from "../context/SkillsContext";
import { AnimatedLink } from "../components/AnimatedLink";
import { Badge } from "@/components/ui/badge";

const variants = (viewActive: SkillsViewType) => {
  return {
    initial: { opacity: 0, x: "5rem", width: "50%", marginLeft: "2rem" },
    animate: {
      opacity: 1,
      x: 0,
      width: viewActive === SkillsViewEnum.Skills ? "50%" : "100%",
      marginLeft: viewActive === SkillsViewEnum.Skills ? "2rem" : "0rem",
      transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      x: "5rem",
      transition: { duration: 0.5, ease: "easeIn" as const },
    }
  }

}

export default function ProjectsSkills() {
  const controls = usePageTransition();
  const { setViewActive, viewActive } = useSkills();
  const { isFullScreen, setIsFullScreen, projects, pagination, setFilter } =
    useSkills();

  const projectPreview =
    viewActive === SkillsViewEnum.Skills
      ? PersonalInfoData.skills.projectsOutstanding
      : projects;

  const ComponentButtonProjects = isFullScreen ? "h5" : Button;

  useEffect(() => {
    controls.start("animate").then(() => {
      if (variants(viewActive).animate.width === "100%") {
        setIsFullScreen(true);
      } else {
        setFilter({
          skill: "",
          type: "",
        });
      }
    });
  }, [controls, viewActive]);

  return (
    <Card
      animate={controls}
      variants={variants(viewActive)}
      initial="initial"
      onAnimationStart={() => setIsFullScreen(false)}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <Breadcrumb>
              <BreadcrumbList>
                <AnimatePresence mode="wait">
                  {viewActive === SkillsViewEnum.Projects && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, x: "-1rem" }}
                      animate={{
                        opacity: 1,
                        width: "revert-layer",
                        x: 0,
                        transition: {
                          delay: isFullScreen ? 0 : 1.3,
                          duration: 0.8,
                        },
                      }}
                      exit={{ opacity: 0, width: 0, x: "-1rem" }}
                      className="flex items-center gap-2"
                    >
                      <BreadcrumbItem id={"skills"}>
                        <Button
                          key={`breadcrum-${"skills"}`}
                          variant="ghost"
                          className="text-lg text-heading font-bold pl-4 text-nowrap overflow-hidden"
                          onClick={() => {
                            setViewActive("skills");
                          }}
                        >
                          {"✨"}
                          <span>Skills</span>
                        </Button>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </motion.span>
                  )}
                </AnimatePresence>
                <BreadcrumbItem id={"projects"}>
                  <ComponentButtonProjects
                    key={`breadcrum-${"projects"}`}
                    variant="ghost"
                    className="text-lg text-heading font-bold pl-4 text-nowrap overflow-hidden gap-2 inline-flex items-center justify-center"
                    onClick={() =>
                      viewActive === SkillsViewEnum.Skills &&
                      setViewActive("projects")
                    }
                  >
                    <span>🗂️</span>
                    <span className="">{"Projects"}</span>
                  </ComponentButtonProjects>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </CardTitle>
        <FilterSkills />
      </CardHeader>
      <CardContent
        animate={{
          gridTemplateColumns:
            viewActive === SkillsViewEnum.Skills
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(4, minmax(0, 1fr))",
        }}
        transition={{ delay: 0.5 }}
        className={cn("grid content-start h-full gap-x-8 gap-y-6 relative")}
      >
        <AnimatePresence mode="wait">
          {isFullScreen && pagination.isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner
                initial={{ display: "none" }}
                animate={{ display: "block" }}
              />
            </div>
          ) : projectPreview.length ? (
            projectPreview.map((item, index) => {
              return (
                <AnimatedLink href="/skills/project/1">
                <motion.figure
                  key={`${viewActive}-${item.name}-${index}`}
                  initial={{ opacity: 0.9, scale: 0, display: "none" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    display: "block",
                    transition: {
                      duration: 0.3,
                      delay: index * 0.05 + (isFullScreen ? 0 : 1.3),
                    },
                  }}
                  exit={{
                    opacity: 0,
                    display: "none",
                    transition: { duration: 0.5 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[16/9] w-full bg-zinc-700 rounded-sm cursor-pointer"
                >
                  <Image
                    src={item.img}
                    loading="lazy"
                    alt="Project"
                    fill
                    className="object-cover rounded-sm !relative"
                  />
                  <div className="absolute bottom-12 left-3 flex justify-between w-full">
              {/* Role: FullStack / FrontEnd / BackEnd */}
              <div className="space-x-2">
                  <Badge
                  variant="secondary"
                  className={cn("text-white bg-opacity-80 rounded-[0.375rem]", "bg-sky-700")}
                >
                  Website
                </Badge>
              </div>
            </div>
                  <figcaption className="font-bold px-4 py-2 flex items-center">
                    <span className="after:border-r-2 after:mx-2">
                      {item.name}
                    </span>
                    <div className="flex gap-2">
                      {item.techs.map((tech, index) => {
                        return (
                          <Tooltip key={`${item.name}-${index}`}>
                            <TooltipTrigger asChild>
                              <div className="cursor-pointer">
                                <tech.icon width={20} height={20} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>
                  </figcaption>
                </motion.figure>
                </AnimatedLink>
              );
            })
          ) : (
            <Empty className="absolute inset-0 flex items-center justify-center">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <TablerFolderCode />
                </EmptyMedia>
                <EmptyTitle>No Projects Yet</EmptyTitle>
                <EmptyDescription>
                  You haven&apos;t created any projects yet. Get started by
                  creating your first project.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
