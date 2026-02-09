"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as motion from "motion/react-client";
import { DarkMode } from "@/public/assets/icons/DarkMode";

export default function SettingsExtra() {
  const { theme, setTheme } = useTheme();

  // export const EXTRA_ACTION = [
  //   { id: 'theme', icon: DarkMode, opposite: LightMode },
  // ];

  return (
    <div className="fixed right-10 top-20 space-y-6">
      <motion.div initial={{opacity: 0, x: "5rem"}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}}>
          <DarkMode
            className={cn(
              "hover:text-primary cursor-pointer",
            
            )}
            // onClick={(e) => onchangeAction(index)}
          />
          </motion.div>
    </div>
  );
}
