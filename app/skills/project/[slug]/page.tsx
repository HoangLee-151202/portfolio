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
import { AnimatePresence, LayoutGroup, useInView } from "motion/react";
import { projectData } from "@/app/mocks/projects";
import { ChevronLeftIcon, X } from "lucide-react";
import CollapsibleControlled from "@/components/common/CollapsibleControlled";
import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import HeadingProject from "./Heading";
import OverviewProject from "./Overview";
import FeaturesProject from "./Features";
import ChallengesSolutionsProject from "./ChallengesSolutions";
import IntroProject from "./intro";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import HeadingExtraProject from "./HeadingExtra";
import FooterExtraProject from "./FooterExtra";

export default function Project() {
  const controls = usePageTransition(); 
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, {
    margin: "0px 0px 0px 0px",
    initial: true,
    once: false,
  });

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

    return (
      <article id="project" className="relative">
        <AnimatePresence mode="wait" propagate>
          {!isInView && <HeadingExtraProject/>}
        </AnimatePresence>
      <HeadingProject/>
        <IntroProject ref={targetRef}/>
        <OverviewProject/>
        <FeaturesProject/>
        <ChallengesSolutionsProject/>
        <AnimatePresence mode="wait" propagate>
          {!isInView && <FooterExtraProject/>}
        </AnimatePresence>
      </article>
  );
}
