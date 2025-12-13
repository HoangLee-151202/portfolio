import Image from "next/image";
import { cn } from "@/lib/utils";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { useApp } from "@/app/context/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { ViewEnum, ViewType } from ".";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
interface ProjectSkillsProps {
  onChangeView: (view: ViewType) => void;
  viewActive: ViewType;
}

interface BreadcrumbsProps {
  label: string;
  icon: string;
  view: ViewType;
}

export default function ProjectSkills(props: ProjectSkillsProps) {
  const { onChangeView, viewActive } = props;
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbsProps[]>([
    {
      label: "Skills",
      icon: "✨",
      view: ViewEnum.Skills,
    },
  ]);

  const onChangeBreakCrums = (breakCrum: ViewType) => {
    let breakIndex = breadcrumbs.findIndex((ele) => ele.view === breakCrum);
    if (breakIndex >= 0) {
      setBreadcrumbs((prev) => prev.slice(0, breakIndex + 1));
    }

    if (breakCrum === ViewEnum.Projects) {
      setBreadcrumbs((prev) => [
        ...prev,
        {
          label: "Projects",
          icon: "🗂️",
          view: ViewEnum.Projects,
        },
      ]);
    }
    onChangeView(breakCrum);
  };
  return (
    <AnimatePresence mode="wait" propagate>
      <Card
        initial={{ opacity: 0, x: "5rem", width: "50%", marginLeft: "2rem" }}
        animate={{
          opacity: 1,
          x: 0,
          width: viewActive === ViewEnum.Skills ? "50%" : "100%",
          marginLeft: viewActive === ViewEnum.Skills ? "2rem" : "0rem",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          x: "5rem",
          transition: { duration: 0.5, ease: "easeIn" },
        }}
      >
        <CardHeader>
          <CardTitle className="text-xl cursor-pointer">
            <Breadcrumb>
              <BreadcrumbList>
                {viewActive === ViewEnum.Skills ? (
                  <BreadcrumbPage
                    className="text-lg font-bold"
                    onClick={() => onChangeBreakCrums(ViewEnum.Projects)}
                  >
                    🗂️<span className="ml-1">Projects</span>
                  </BreadcrumbPage>
                ) : (
                  breadcrumbs.map((item, index) => {
                    if (index === breadcrumbs.length - 1)
                      return (
                        <BreadcrumbPage className="text-lg font-bold">
                          {item.icon}
                          <span className="ml-1">{item.label}</span>
                        </BreadcrumbPage>
                      );
                    return (
                      <>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            className="text-lg font-bold"
                            onClick={() => onChangeBreakCrums(item.view)}
                          >
                            {item.icon}
                            <span className="ml-1">{item.label}</span>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                      </>
                    );
                  })
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </CardTitle>
        </CardHeader>
        <CardContent
          className={cn("grid gap-8", viewActive === ViewEnum.Skills ? "grid-cols-2" : "grid-cols-4")}
        >
          {PersonalInfoData.skills.projects.map((item, index) => {
            return (
              <motion.figure
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{
                //   duration: 0.3,
                //   delay: index * 0.05 + 0.8,
                // }}
                key={`${item.name}-${index}`}
                className="relative aspect-[16/9] w-full bg-zinc-700 rounded-sm cursor-pointer hover:scale-105 duration-200 ease-in-out"
              >
                <Image
                  src={item.img}
                  loading="lazy"
                  alt="Project"
                  fill
                  className="object-cover rounded-sm !relative"
                />
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
            );
          })}
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
