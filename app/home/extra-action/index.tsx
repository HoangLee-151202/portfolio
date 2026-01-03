"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getFullscreenState, toggleFullscreen } from "@/hooks/use-fullscreen";
import { useTheme } from "next-themes";
import { EXTRA_ACTION } from "@/app/config/menu";
import { useApp } from "@/app/context/AppContext";
import * as motion from "motion/react-client";

export default function ExtraAction() {
  const { setIsFullscreen } = useApp();
  const { theme, setTheme } = useTheme();
  const [actions, setActions] = useState(
    EXTRA_ACTION.map((action) => ({
      ...action,
    }))
  );

  useEffect(() => {
    const onFullscreenChange = () => {
      const isFullscreen = getFullscreenState();
      setIsFullscreen(isFullscreen);
    };
  
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
  
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
    };
  }, []);

  const onchangeAction = (index: number) => {
      setActions((prev) =>
        prev.map((item, i) => {
          if (i === index) {
            item.id === 'zoom' && toggleFullscreen()
            item.id === 'theme' && setTheme(theme === 'dark' ? 'light' : 'dark')
            return {
              ...item,
              icon: item.opposite,
              opposite: item.icon,
            };
          } else return item;
        })
      );
  };

  return (
    <div className="fixed right-10 top-20 space-y-6">
      {actions.map((item, index) => {
        return (
          <motion.div key={`extra-action-${index}`} initial={{opacity: 0, x: "5rem"}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: index*0.05}}>
          <item.icon
            key={item.id}
            className={cn(
              "hover:text-primary cursor-pointer",
            
            )}
            onClick={(e) => onchangeAction(index)}
          />
          </motion.div>
        );
      })}
    </div>
  );
}
