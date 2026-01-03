"use client";

export const getFullscreenState = (): boolean => {
  if (typeof document === "undefined") return false;

  return !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement
  );
};

export const toggleFullscreen = () => {
  if (typeof document === "undefined") return;

  if (!getFullscreenState()) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};