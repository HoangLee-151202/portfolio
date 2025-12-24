import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { motion } from "motion/react";
import { MotionIcon } from "./MotionIcon";

type CollapsibleControlledProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function CollapsibleControlled(
  props: CollapsibleControlledProps
) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button
          variant={"ghost"}
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
          className="text-heading mb-4 p-0 font-bold text-xl flex items-center gap-0 hover:bg-transparent"
        >
          <MotionIcon
            initial={{ rotate: 90 }}
            animate={{
              rotate: isOpen ? 90 : 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            fontSize={32}
            icon={"iconamoon:arrow-right-2-fill"}
            className="inline-block !size-6"
          />
          {title}
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent asChild forceMount>
        <motion.div
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="overflow-y-clip"
        >
      {children}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
}
