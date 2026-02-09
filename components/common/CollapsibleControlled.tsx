import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { motion } from "motion/react";
import { MotionIcon } from "./MotionIcon";
import { usePageTransition } from "@/app/context/PageTransitionContext";

type CollapsibleControlledProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const variants = {
  initial: { opacity: 0, x: "-5rem" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    x: "-5rem",
    transition: {
      duration: 0.5,
      ease: "easeIn" as const,
    },
  }
}
export default function CollapsibleControlled(
  props: CollapsibleControlledProps
) {
  const { title, children } = props;
  const controls = usePageTransition();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button
          animate={controls}
          variants={variants}
          initial="initial"
          variant={"ghost"}

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
