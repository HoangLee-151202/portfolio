"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CollapsibleControlled from "@/components/common/CollapsibleControlled";
import { usePageTransition } from "@/app/context/PageTransitionContext";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
  isSelected: boolean;
};

const variants = {
  initial: {opacity: 0, x: "-5rem"},
  animate: {opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const }},
  exit: {opacity: 0, x: "-5rem", transition: { duration: 0.5, ease: "easeIn" as const }},
}
const data = [
  {
    title: "System performance drops sharply as data increases",
     tags: [
      {
        label: "FrontEnd",
        color: "bg-sky-700"
      },
      {
        label: "UI/UX",
        color: "bg-violet-700"
      }
     ],
     challenge: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API  response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
     solutions: [
                      "Add caching layer (Redis) for high-frequency APIs to reduce DB load",
                      "Optimize queries using indexing, table sharding, and connection pooling",
                      "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little",
                      "Code-splitting and lazy-loading UI to reduce initial load on front-end"
     ]
  },
  {
    title: "1. System performance drops sharply as data increases",
     tags: [
      {
        label: "FrontEnd",
        color: "bg-sky-700"
      },
      {
        label: "UI/UX",
        color: "bg-violet-700"
      }
     ],
     challenge: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API  response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
     solutions: [
                      "Add caching layer (Redis) for high-frequency APIs to reduce DB load",
                      "Optimize queries using indexing, table sharding, and connection pooling",
                      "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little",
                      "Code-splitting and lazy-loading UI to reduce initial load on front-end"
     ]
  },
  {
    title: "1. System performance drops sharply as data increases",
     tags: [
      {
        label: "FrontEnd",
        color: "bg-sky-700"
      },
      {
        label: "UI/UX",
        color: "bg-violet-700"
      }
     ],
     challenge: "As the number of records and concurrent users increases, the system begins to experience problems such as slow API  response, long UI rendering times, and database overload. This directly affects the user experience and stability of the project.",
     solutions: [
                      "Add caching layer (Redis) for high-frequency APIs to reduce DB load",
                      "Optimize queries using indexing, table sharding, and connection pooling",
                      "Leverage server-side rendering (Next.js) + incremental static regeneration for pages with content that changes little",
                      "Code-splitting and lazy-loading UI to reduce initial load on front-end"
     ]
  }
]
export default function ChallengesSolutionsProject() {
  const controls = usePageTransition();
    return (
      <section className="mb-8">
          <CollapsibleControlled
            title={
              <>
                💡<span className="ml-2">Challenges & Solutions</span>
              </>
            }
          >
            <div className="space-y-8">
              {data.map((item) => (
                <Card animate={controls} variants={variants} initial="initial" className="gap-0">
                <CardHeader>
                  <CardTitle>
                    {item.title}
                    {item.tags.map((tag) => (
                      <Badge
                      variant="secondary"
                      className={cn("text-white rounded-[0.375rem] ml-2", tag.color)}
                    >
                      {tag.label}
                    </Badge>
                    ))}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    {item.challenge}
                  </p>
                  <p className="my-2 text-primary font-bold">Solutions:</p>
                  <ul className="list-disc ml-4 text-white">
                    {item.solutions.map((solution) => (
                      <li>
                      {solution}
                    </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              ))}
            </div>
          </CollapsibleControlled>
        </section>
  );
}
