"use client";

import { useCallback } from "react";

export const getFullscreenState = () =>
  !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement
  );

  export const toggleFullscreen = () => {
    if (!getFullscreenState()) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };