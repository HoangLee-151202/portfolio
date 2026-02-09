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
import { Card, CardContent } from "@/components/ui/card";
import { projectData } from "@/app/mocks/projects";
import CollapsibleControlled from "@/components/common/CollapsibleControlled";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PreviewIntroProject from "./intro/Preview";
import { usePageTransition } from "@/app/context/PageTransitionContext";

const variants = (isLeft: boolean) =>( {
  initial: { opacity: 0, y: "1rem" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    x: isLeft ?  "5rem" : "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
})
export default function FeaturesProject() {
  const controls = usePageTransition();
  return (
    <section className="mb-8">
      <CollapsibleControlled
        title={
          <>
            🧩<span className="ml-2">Features</span>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.features.map((item, index) => {
            return (
              <Card
                key={`${item.name}-${index}`}
                animate={controls}
                variants={variants(Boolean(index%3))}
                initial="initial"
                className="gap-0"
              >
                <CardContent className="text-sm">
                  <div className="relative">
                    <Carousel>
                      <CarouselContent>
                        <CarouselItem>
                          <Dialog>
                            <DialogTrigger asChild className="cursor-pointer">
                              <Image
                                src={"/assets/images/project.png"}
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
                        <CarouselItem>
                          <Image
                            src={"/assets/images/project.png"}
                            loading="lazy"
                            alt="About"
                            fill
                            className="object-cover rounded-sm !relative right-0 !h-[14rem]"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <Image
                            src={"/assets/images/project.png"}
                            loading="lazy"
                            alt="About"
                            fill
                            className="object-cover rounded-sm !relative right-0 !h-[14rem]"
                          />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-4 bg-background bg-opacity-80 rounded-[100%]" />
                      <CarouselNext className="right-4 bg-background bg-opacity-80 rounded-[100%]" />
                    </Carousel>
                    <div className="absolute bottom-3 left-3 flex justify-between w-full">
                      <Badge
                        variant="secondary"
                        className="text-white bg-background bg-opacity-80 rounded-[0.375rem]"
                      >
                        Login Page
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-white bg-background bg-opacity-80 rounded-[0.375rem] mr-7"
                      >
                        1/2
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button
                        variant="secondary"
                        size="icon"
                        aria-label="Live Demo"
                        className="text-white text-xs bg-background bg-opacity-80 rounded-[100%]"
                      >
                        <Icon fontSize={24} icon={"mingcute:live-fill"} />
                      </Button>
                    </div>
                  </div>
                  <p className="text-white font-bold mb-2 mt-4">
                    1. Authentication
                  </p>
                  <p>
                    Allows users to securely register, log in, and manage
                    their account.
                  </p>

                  <p className="my-2 text-primary font-bold">
                    Key Capabilities:
                  </p>
                  <ul className="list-disc ml-4 text-white">
                    <li>JWT-based authentication</li>
                    <li>Role-based access</li>
                    <li>Prisma + PostgreSQL for data handling </li>
                    <li>Rate limiting for security</li>
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CollapsibleControlled>
    </section>
  );
}
