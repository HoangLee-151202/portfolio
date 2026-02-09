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
import { JSX, PropsWithoutRef, useEffect } from "react";
import IntroContentProject from "./Content";
import GalleryIntroProject from "./Gallery";

interface IntroProjectProps {
  ref?: React.Ref<HTMLDivElement>;
 }

const variants = {
  initial: { opacity: 0, x: "-5rem" },
            animate: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" as const },
            },
            exit: {
              opacity: 0,
              x: "-5rem",
              transition: {
                duration: 0.5,
                ease: "easeIn" as const,
              },
            }
}

const data = {
  tags: [
    {
      label: "FullStack",
      backgroundColor: "bg-green-700"
    },
    {
      label: "Personal",
      backgroundColor: "bg-orange-700"
    },
    {
      label: "Website",
      backgroundColor: "bg-sky-700"
    },

]
}

export default function IntroProject({ref}: IntroProjectProps) {
  const controls = usePageTransition();

    return (
      <section className="grid md:grid-cols-3 gap-8 mb-8">
          <GalleryIntroProject/>
          <IntroContentProject ref={ref}/>
        </section>
  );
}
