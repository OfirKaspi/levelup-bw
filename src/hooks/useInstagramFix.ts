"use client";

import { useEffect, useState } from "react";

export function useInstagramFix() {
  const [heroHeight, setHeroHeight] = useState("h-svh"); // Default Tailwind class

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.includes("Instagram")) {
      setHeroHeight("h-[700px]"); // Set a fixed height for Instagram users
    }
  }, []);

  return heroHeight;
}
