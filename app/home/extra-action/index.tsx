"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useFullscreen } from "@/hooks/use-fullscreen";
import { useDetectFullscreen } from "@/hooks/use-detect-fullscreen";
import { useTheme } from "next-themes";
import { EXTRA_ACTION } from "@/app/config/menu";

enum CHANGE_ACTION_STATUS {
  Initial,
  Processing,
  Finished,
}

export default function ExtraAction() {
  const { toggle } = useFullscreen();
  const { theme, setTheme } = useTheme();
  const [actions, setActions] = useState(
    EXTRA_ACTION.map((action) => ({
      ...action,
      changeStatus: CHANGE_ACTION_STATUS.Initial,
    }))
  );

  useDetectFullscreen(() => {
    onchangeAction(0);
  });

  const onchangeAction = (index: number) => {
    setActions((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, changeStatus: CHANGE_ACTION_STATUS.Processing }
          : item
      )
    );

    setTimeout(() => {
      setActions((prev) =>
        prev.map((item, i) => {
          if (i === index) {
            item.id === 'zoom' && toggle()
            item.id === 'theme' && setTheme(theme === 'dark' ? 'light' : 'dark')
            return {
              ...item,
              changeStatus: CHANGE_ACTION_STATUS.Finished,
              icon: item.opposite,
              opposite: item.icon,
            };
          } else return item;
        })
      );
    }, 150);
  };

  return (
    <div className="fixed right-10 top-20 space-y-6">
      {actions.map((item, index) => {
        let delayTime = index * 50;
        return (
          <item.icon
            key={item.id}
            className={cn(
              "hover:text-primary cursor-pointer",
              `animate-fade-slide-left [animation-delay:${delayTime}ms] opacity-0`,
              item.changeStatus == CHANGE_ACTION_STATUS.Processing
                ? "animate-zoom-out opacity-1"
                : "",
              item.changeStatus == CHANGE_ACTION_STATUS.Finished
                ? "animate-zoom-in opacity-1"
                : ""
            )}
            onClick={(e) => onchangeAction(index)}
          />
        );
      })}
    </div>
  );
}
