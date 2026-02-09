"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as motion from "motion/react-client";
import { projectData } from "@/app/mocks/projects";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TabsIntroProject from "./Tabs";
import { useRouter } from "next/navigation";
import PreviewIntroProject from "./Preview";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import { JSX, PropsWithoutRef, useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface IntroContentProjectProps {
  ref?: React.Ref<HTMLDivElement>;
}

const variants = {
  initial: { opacity: 0, x: "5rem" },
            animate: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" as const },
            },
            exit: {
              opacity: 0,
              x: "5rem",
              transition: {
                duration: 0.5,
                ease: "easeIn" as const,
              },
            }
}

export default function IntroContentProject({ref}: IntroContentProjectProps) {
  const controls = usePageTransition();
 
    return (
          <Card
          animate={controls}
          variants={variants}
            initial="initial"
            className="col-span-2 relative py-6 gap-3"
          >
            <CardHeader className="gap-0" >
              <CardTitle><h5 ref={ref}
            className="font-bold"
          >
            <span className="text-primary text-xl">CHUOICANHO</span> - Real
            Estate Management System
          </h5></CardTitle>
            </CardHeader>
            <CardContent>
              <TabsIntroProject />
              <div className="absolute top-10 right-8 space-x-2 flex items-start">
                <Icon
                  fontSize={16}
                  icon={"lucide:calendar-days"}
                  className="inline-block"
                />
                <span className="text-white text-sm">May 01, 2022</span>
              </div>
            </CardContent>
          </Card>
  );
}
