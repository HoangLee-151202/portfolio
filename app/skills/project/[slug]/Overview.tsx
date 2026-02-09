"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CollapsibleControlled from "@/components/common/CollapsibleControlled";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/app/context/PageTransitionContext";

const data = [
  {
    title: "Problem",
    description: "Users have difficulty managing rental rooms, leading to ineffective management and limited business capabilities."
  },
  {
    title: "Target Users",
    description: "Business users need a simple, fast and reliable tool to manage rental properties in real time."
  },
  {
    title: "Project Goal",
    description: "Build modern web solutions to manage rental properties, optimize performance, enhance user experience and ensure long-term scalability."
  },
  {
    title: "Expected Outcome",
    description: "The project provides a stable, easy-to-use system that significantly improves rental room management time, while creating a foundation ready for future feature and scale expansion."
  },
]

const variants = (isEven: boolean) => ({
  initial: { opacity: 0, x: isEven ?  "5rem" : "-5rem"},
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    x: isEven ?  "5rem" : "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
})

export default function OverviewProject() {
  const controls = usePageTransition();
    return (
      <section className="mb-8">
          <CollapsibleControlled
            title={
              <>
                📋<span className="ml-2">Overview</span>
              </>
            }
          >
            <div className="grid md:grid-cols-2 gap-8">
              {data.map((item, index) => (
                <Card
                key={item.title}
                animate={controls}
                variants={variants(Boolean(index%2))}
                initial="initial"
              >
                <CardHeader>
                  <CardTitle className={cn((!index || (index + 1 === data.length)) && "text-primary")}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    {item.description}
                </CardContent>
              </Card>
              ))}
            </div>
          </CollapsibleControlled>
        </section>
  );
}
