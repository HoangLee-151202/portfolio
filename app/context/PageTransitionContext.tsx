"use client";

import { LegacyAnimationControls } from "motion/react";
import { createContext, useContext } from "react";

export const PageTransitionContext = createContext<LegacyAnimationControls | null>(null);

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used inside PageTransitionProvider");
  return ctx;
};
