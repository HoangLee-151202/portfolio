"use client"

import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import { useEffect, useRef } from "react";
import { AnimatedLink } from "@/app/components/AnimatedLink";
import { useInView } from "motion/react";

const variants = {
  initial: { opacity: 0, x: "-5rem" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-5rem" }
}

export default function HeadingProject() {
  const controls = usePageTransition();

  return (
    <motion.div animate={controls} variants={variants} initial="initial"
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex items-center gap-x-4 mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem id={"skills"}>
            <Button
            asChild
              key={`breadcrum-${"skills"}`}
              variant="ghost"
              className="text-lg text-heading font-bold pl-4 text-nowrap overflow-hidden mr-2"
            >
              <AnimatedLink href="/skills">{"✨"}
              <span>Skills</span></AnimatedLink>
              
            </Button>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem id={"project"}>
            <h5
              className="text-lg text-heading font-bold pl-4 text-nowrap overflow-hidden gap-2 inline-flex items-center justify-center"
            >
              <span>🚀</span>
              Project:
            <span className="text-primary text-xl">CHUOICANHO</span>
            </h5>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </motion.div>
  );
}