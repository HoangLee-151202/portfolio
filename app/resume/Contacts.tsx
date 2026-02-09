"use client"

import {
  Card,
  CardContent
} from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { usePageTransition } from "../context/PageTransitionContext";
import { useEffect } from "react";

const variants = {
  initial: { opacity: 0, x: "5rem" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    x: "5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
}

export default function ContactsResume() {
  const controls = usePageTransition();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <Card
      animate={controls}
      variants={variants}
      initial="initial"
      className="h-full col-span-3"
    >
      <CardContent className="h-full p-0 text-sm flex flex-col justify-between">
        {PersonalInfoData.resume.contacts.map((item) => (
          <div key={item.value}>
            {item.icon}&nbsp;
            <a href={item.href} className="hover:underline">
              {item.value}
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
