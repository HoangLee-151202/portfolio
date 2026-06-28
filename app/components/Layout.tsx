"use client";

import { useAnimationControls } from "motion/react";
import { AppProvider } from "../context/AppContext";
import { ThemeProvider, useTheme } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageTransitionContext } from "../context/PageTransitionContext";
import Sidebar from "../layout/sidebar";
import Extra from "../layout/extra";
import BottomNavigation from "../layout/bottomNav";
import Headerbar from "../layout/headerbar";
import LayoutMain from "../layout/LayoutMain";

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const controls = useAnimationControls();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <TooltipProvider>
        <AppProvider>
          <PageTransitionContext.Provider value={controls}>
            <Headerbar />
            <Sidebar />
            <Extra />
            <BottomNavigation />
            <LayoutMain>{children}</LayoutMain>
          </PageTransitionContext.Provider>
        </AppProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
