"use client";

import { useCallback } from "react";

export const useFullscreen = () => {
  const toggle = useCallback(() => {
    if (document.fullscreenElement == null) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  return { toggle };
};