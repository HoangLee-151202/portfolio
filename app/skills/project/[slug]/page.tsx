 "use client"

import { AnimatePresence, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import HeadingProject from "./Heading";
import OverviewProject from "./Overview";
import FeaturesProject from "./Features";
import ChallengesSolutionsProject from "./ChallengesSolutions";
import IntroProject from "./intro";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import HeadingExtraProject from "./HeadingExtra";
import FooterExtraProject from "./FooterExtra";

export default async function ProjectPage() {

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
            {!isInView && <HeadingExtraProject />}
          </AnimatePresence>
          <HeadingProject />
          <IntroProject ref={targetRef} />
          <OverviewProject />
          <FeaturesProject />
          <ChallengesSolutionsProject />
          <AnimatePresence mode="wait" propagate>
            {!isInView && <FooterExtraProject />}
          </AnimatePresence>
        </article>
  )
}
