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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ViewType } from ".";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { projectData } from "@/app/mocks/projects";
import { ChevronLeftIcon } from "lucide-react";
import CollapsibleControlled from "@/components/common/CollapsibleControlled";

interface ProjectSkillsProps {
  onChangeView: (view: ViewType) => void;
  viewActive: ViewType;
}

export default function ProjectSkills(props: ProjectSkillsProps) {
  const { onChangeView } = props;
  return (
    <AnimatePresence mode="wait" propagate>
      <article id="project">
        <div className="flex items-center gap-x-4 mb-6">
          <Button
            initial={{ opacity: 0, x: "-1rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            variant="ghost"
            size="icon"
            onClick={() => {
              onChangeView("Skills");
              // setProjects([]);
            }}
          >
            <ChevronLeftIcon strokeWidth={6} />
          </Button>
          <motion.h5
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold"
          >
            Project:&nbsp;
            <span className="text-primary text-xl">CHUOICANHO</span> - Real
            Estate Management System
          </motion.h5>
        </div>
        <section className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: "-5rem" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: "-5rem",
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="relative"
          >
            <Carousel>
              <CarouselContent>
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
              {/* Role: FullStack / FrontEnd / BackEnd */}
              <div className="space-x-2">
                <Badge
                  variant="secondary"
                  className="text-white bg-green-700 bg-opacity-80 rounded-[0.375rem]"
                >
                  FullStack
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-white bg-orange-700 bg-opacity-80 rounded-[0.375rem]"
                >
                  Personal
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-white bg-sky-700 bg-opacity-80 rounded-[0.375rem]"
                >
                  Website
                </Badge>
              </div>
              <Badge
                variant="secondary"
                className="text-white bg-background bg-opacity-80 rounded-[0.375rem] mr-7"
              >
                1/2
              </Badge>
            </div>
            <div className="absolute top-3 right-3 space-x-1">
              <Button
                variant="secondary"
                size="icon"
                aria-label="Live Demo"
                className="text-white text-xs bg-background bg-opacity-80 rounded-[100%]"
              >
                <Icon fontSize={24} icon={"mingcute:live-fill"} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Source Code"
                className="text-white text-xs bg-background bg-opacity-80 rounded-[100%]"
              >
                <Icon fontSize={24} icon={"mingcute:github-fill"} />
              </Button>
            </div>
          </motion.div>
          <Card
            initial={{ opacity: 0, x: "5rem" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              x: "5rem",
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
            className="col-span-2 relative"
          >
            <CardContent>
              <Tabs defaultValue="info">
                <TabsList className="mb-2">
                  <TabsTrigger value="info">Basic Info</TabsTrigger>
                  <TabsTrigger value="responsibilities">
                    Responsibilities
                  </TabsTrigger>
                  <TabsTrigger value="techStack">Tech Stack</TabsTrigger>
                </TabsList>
                <TabsContent value="info">
                  <div className="space-y-2">
                    <p className="text-sm">
                      The project is a modern web platform with a focus on
                      performance, stability and user experience. The system is
                      built with a flexible architecture, easy to expand and
                      suitable for large-scale growth.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="responsibilities">
                  <ol className="text-zinc-300 text-sm list-decimal ml-8">
                    <li>
                      Built front-end and back-end features for seamless user
                      experience.
                    </li>
                    <li>
                      Developed and integrated secure, scalable REST/GraphQL
                      APIs.
                    </li>

                    <li>
                      Implemented clean architecture for flexibility and
                      long-term scalability
                    </li>
                    <li>
                      Optimized performance across front-end, back-end, and
                      database layers.
                    </li>
                    <li>
                      Set up CI/CD pipelines and essential monitoring tools.
                    </li>
                  </ol>
                  {/* Liệt kê những phần bạn thực sự tham gia: Developed
                frontend using React/Next.js Designed and implemented REST
                API Integrated authentication (JWT/ OAuth) Database design
                & optimization SEO & performance improvements Deployment
                on Vercel / VPS / Docker */}
                </TabsContent>
                <TabsContent
                  value="techStack"
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      Frontend:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      Backend:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      Database:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      DevOps:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      Tools:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold flex gap-2">
                      Integrations:
                      <span className="flex gap-2">
                        {/* {skillsData.frontend.map((item) => {
                      return (
                        <Icon
                          key={item.icon}
                          fontSize={16}
                          icon={item.icon}
                          className=""
                        />
                      );
                    })} */}
                      </span>
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
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
        </section>
        <section className="mb-8">
          <CollapsibleControlled
            title={
              <>
                📋<span className="ml-2">Overview</span>
              </>
            }
          >
            <div className="grid md:grid-cols-2 gap-8">
              <Card
                initial={{ opacity: 0, x: "-5rem" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  x: "-5rem",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
              >
                <CardHeader>
                  <CardTitle className="text-primary">Problem</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Users have difficulty managing rental rooms, leading to
                    ineffective management and limited business capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card
                initial={{ opacity: 0, x: "5rem" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  x: "5rem",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
              >
                <CardHeader>
                  <CardTitle>Target Users</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Business users need a simple, fast and reliable tool to
                    manage rental properties in real time.
                  </p>
                </CardContent>
              </Card>
              <Card
                initial={{ opacity: 0, x: "-5rem" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  x: "-5rem",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
                className="gap-0"
              >
                <CardHeader>
                  <CardTitle>Project Goal</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Build modern web solutions to manage rental properties,
                    optimize performance, enhance user experience and ensure
                    long-term scalability.
                  </p>
                </CardContent>
              </Card>

              <Card
                initial={{ opacity: 0, x: "5rem" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  x: "5rem",
                  transition: {
                    duration: 0.5,
                    ease: "easeIn",
                  },
                }}
                className="gap-0"
              >
                <CardHeader>
                  <CardTitle className="text-primary">
                    Expected Outcome
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    The project provides a stable, easy-to-use system that
                    significantly improves rental room management time, while
                    creating a foundation ready for future feature and scale
                    expansion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CollapsibleControlled>
        </section>
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
                    initial={{ opacity: 0, y: "1rem" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.6,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: index ? "5rem" : "-5rem",
                      transition: {
                        duration: 0.5,
                        ease: "easeIn",
                      },
                    }}
                    className="gap-0"
                  >
                    <CardContent className="text-sm">
                      <div className="relative">
                        <Carousel>
                          <CarouselContent>
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
        <section className="mb-8">
        <CollapsibleControlled
            title={
              <>
                💡<span className="ml-2">Challenges & Solutions</span>
              </>
            }
          >
            <div className="space-y-8">
            <Card className="gap-0">
                <CardHeader>
                  <CardTitle>
                    1. System performance drops sharply as data increases
                    <Badge
                      variant="secondary"
                      className="text-white bg-sky-700 rounded-[0.375rem] ml-2"
                    >
                      FrontEnd
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-white bg-violet-700 rounded-[0.375rem] ml-2"
                    >
                      UI/UX
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    As the number of records and concurrent users increases, the
                    system begins to experience problems such as slow API
                    response, long UI rendering times, and database overload.
                    This directly affects the user experience and stability of
                    the project.
                  </p>
                  <p className="my-2 text-primary font-bold">Solutions:</p>
                  <ul className="list-disc ml-4 text-white">
                    <li>
                      Add caching layer (Redis) for high-frequency APIs to
                      reduce DB load
                    </li>
                    <li>
                      Optimize queries using indexing, table sharding, and
                      connection pooling
                    </li>
                    <li>
                      Leverage server-side rendering (Next.js) + incremental
                      static regeneration for pages with content that changes
                      little
                    </li>
                    <li>
                      Code-splitting and lazy-loading UI to reduce initial load
                      on front-end
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="gap-0">
                <CardHeader>
                  <CardTitle>
                    2. User account authentication
                    <Badge
                      variant="secondary"
                      className="text-white bg-violet-700 rounded-[0.375rem] ml-2"
                    >
                      BackEnd
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-white bg-red-700 rounded-[0.375rem] ml-2"
                    >
                      Authentication
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Business users need a simple, fast and reliable tool to
                    manage rental properties in real time.
                  </p>
                  <p className="my-2 text-primary font-bold">Solution:</p>
                  <ul className="list-disc ml-4 text-white">
                    <li>
                      Add caching layer (Redis) for high-frequency APIs to
                      reduce DB load
                    </li>
                    <li>
                      Optimize queries using indexing, table sharding, and
                      connection pooling
                    </li>
                    <li>
                      Leverage server-side rendering (Next.js) + incremental
                      static regeneration for pages with content that changes
                      little
                    </li>
                    <li>
                      Code-splitting and lazy-loading UI to reduce initial load
                      on front-end
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="gap-0">
                <CardHeader>
                  <CardTitle>
                    3. System performance drops sharply as data increases
                    <Badge
                      variant="secondary"
                      className="text-white bg-sky-700 rounded-[0.375rem] ml-2"
                    >
                      FrontEnd
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-white bg-violet-700 rounded-[0.375rem] ml-2"
                    >
                      UI/UX
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    As the number of records and concurrent users increases, the
                    system begins to experience problems such as slow API
                    response, long UI rendering times, and database overload.
                    This directly affects the user experience and stability of
                    the project.
                  </p>
                  <p className="my-2 text-primary font-bold">Solution:</p>
                  <ul className="list-disc ml-4 text-white">
                    <li>
                      Add caching layer (Redis) for high-frequency APIs to
                      reduce DB load
                    </li>
                    <li>
                      Optimize queries using indexing, table sharding, and
                      connection pooling
                    </li>
                    <li>
                      Leverage server-side rendering (Next.js) + incremental
                      static regeneration for pages with content that changes
                      little
                    </li>
                    <li>
                      Code-splitting and lazy-loading UI to reduce initial load
                      on front-end
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gap-0">
                <CardHeader>
                  <CardTitle>
                    4. User account authentication
                    <Badge
                      variant="secondary"
                      className="text-white bg-violet-700 rounded-[0.375rem] ml-2"
                    >
                      BackEnd
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-white bg-red-700 rounded-[0.375rem] ml-2"
                    >
                      Authentication
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Business users need a simple, fast and reliable tool to
                    manage rental properties in real time.
                  </p>
                  <p className="my-2 text-primary font-bold">Solution:</p>
                  <ul className="list-disc ml-4 text-white">
                    <li>
                      Add caching layer (Redis) for high-frequency APIs to
                      reduce DB load
                    </li>
                    <li>
                      Optimize queries using indexing, table sharding, and
                      connection pooling
                    </li>
                    <li>
                      Leverage server-side rendering (Next.js) + incremental
                      static regeneration for pages with content that changes
                      little
                    </li>
                    <li>
                      Code-splitting and lazy-loading UI to reduce initial load
                      on front-end
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CollapsibleControlled>
        </section>
      </article>
    </AnimatePresence>
  );
}
