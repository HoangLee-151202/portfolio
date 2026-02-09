"use client"

import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import PreviewIntroProject from "./intro/Preview";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Play } from "@/public/assets/icons/Play";
import { React } from "@/public/assets/icons/React";

export default function HeadingExtraProject() {

  return (
    <AnimatePresence mode="wait" propagate>
      <motion.div initial={{
        opacity: 0, y: "-5rem"
      }} animate={{ opacity: 1, y: "0", transition: { duration: 0.8, ease: "easeOut" }, }} exit={{
        opacity: 0, y: "-5rem", transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      }} className="fixed top-0 left-0 right-0 z-10 ml-[var(--sidebar-width)]" >
        <div className="mx-[var(--container-px)] bg-background flex justify-between py-8 shadow-b-lg shadow-orange-400/50">
          <div className="flex gap-4 items-center">
            <div className="relative cursor-pointer group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative">
                    <Image
                      src={"/assets/images/project.png"}
                      loading="lazy"
                      alt="About"
                      fill
                      className="object-cover rounded-[0.5rem] !relative right-0 !h-16"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Play
                      width={32}
                      height={32}
                      className={cn(
                        "absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-90 text-background",

                      )}
                    />
                  </div>

                </DialogTrigger>
                <DialogContent>
                  <PreviewIntroProject />
                </DialogContent>
              </Dialog>

            </div>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <h5
                  className="font-bold"
                >
                  <span className="text-primary text-xl">CHUOICANHO</span> - Real
                  Estate Management System
                </h5>
                <Badge
                  variant="secondary"
                  className={cn("text-white bg-opacity-80 rounded-[0.375rem] h-fit", "bg-sky-700")}
                >
                  {"Website"}
                </Badge>
              </div>
              <p className=" text-sm">The project is a modern web platform with a focus on performance, stability and user experience.</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="space-x-4">
              <Button variant="outline">
                <Icon fontSize={24} icon={"mingcute:live-fill"} /> Demo
              </Button>
              <Button variant="outline">
                <Icon fontSize={24} icon={"mingcute:github-fill"} /> GitHub
              </Button>
            </div>
            <div className="text-sm flex items-center gap-2">
              Techs:
              <React
                height={18}
                width={18}
              />
              <React
                height={18}
                width={18}
              />
              <React
                height={18}
                width={18}
              />
            </div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>

  );
}