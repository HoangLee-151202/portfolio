"use client";

import { useEffect } from "react";

export function useDetectFullscreen(callback: (isFullscreen: boolean) => void) {
  useEffect(() => {
    const handlerResize = () => {
      const apiFull = Boolean(document.fullscreenElement);
      const browserFull = window.innerHeight === screen.height;

      callback(apiFull || browserFull);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, [callback]);
}
