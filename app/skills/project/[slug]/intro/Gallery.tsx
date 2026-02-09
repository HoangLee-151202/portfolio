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
import { useEffect } from "react";
import IntroContentProject from "./Content";

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

export default function GalleryIntroProject() {
  const controls = usePageTransition();

    return (
          <motion.div
          animate={controls}
          variants={variants}
            initial="initial"
            className="relative"
          >
            <Carousel>
              <CarouselContent>
                {projectData.images.map((item) => (
                  <CarouselItem key={item}>
                    <Dialog>
                      <DialogTrigger asChild className="cursor-pointer">
                        <Image
                          src={item}
                          loading="lazy"
                          alt="About"
                          fill
                          className="object-cover rounded-sm !relative right-0 !h-[14rem]"
                        />
                      </DialogTrigger>
                      <DialogContent>
                        <PreviewIntroProject />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background bg-opacity-80 rounded-[100%]" />
              <CarouselNext className="right-4 bg-background bg-opacity-80 rounded-[100%]" />
            </Carousel>
            <div className="absolute bottom-3 left-3 flex justify-between w-full">
              {/* Role: FullStack / FrontEnd / BackEnd */}
              <div className="space-x-2">
                {data.tags.map((item) => (
                  <Badge
                  variant="secondary"
                  className={cn("text-white bg-opacity-80 rounded-[0.375rem]", item.backgroundColor)}
                >
                  {item.label}
                </Badge>
                ))}
              </div>
              <Badge
                variant="secondary"
                className="text-white bg-background bg-opacity-80 rounded-[0.375rem] mr-7"
              >
                1/2
              </Badge>
            </div>
            <div className="absolute top-3 right-3 space-x-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.youtube.com/watch?v=h7cOOfpdEfk&list=RDc5XLdnN11ks&index=2"
                    target="_blank"
                    className="py-2"
                  >
                    <Button
                      variant="secondary"
                      size="icon"
                      aria-label="Live Demo"
                      className="text-white text-xs bg-background bg-opacity-80 rounded-[100%]"
                    >
                      <Icon fontSize={24} icon={"mingcute:live-fill"} />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Demo</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.youtube.com/watch?v=h7cOOfpdEfk&list=RDc5XLdnN11ks&index=2"
                    target="_blank"
                    className="py-2"
                  >
                    <Button
                      variant="link"
                      size="icon"
                      aria-label="Source Code"
                      className="text-white text-xs bg-background bg-opacity-80 rounded-[100%]"
                    >
                      <Icon fontSize={24} icon={"mingcute:github-fill"} />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
  );
}
