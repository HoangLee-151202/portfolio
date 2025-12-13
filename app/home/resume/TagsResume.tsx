import { Card, CardContent } from "@/components/ui/card";
import { PersonalInfoData } from "@/app/mocks/personal-info";
import { AnimatePresence } from "motion/react";

export default function TagsResume() {
  return (
    <AnimatePresence mode="wait" propagate>
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
        className="col-span-10"
      >
        <CardContent className="w-full">
          <ul className="grid grid-cols-3 gap-x-8 gap-y-4 text-sm">
            {PersonalInfoData.resume.tags.map((item, index) => (
              <li key={`tag-${index}`} className="bg-background px-4 py-2 rounded-md">
                {item.icon}&nbsp;{item.tag}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
