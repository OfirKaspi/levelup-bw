"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / windowHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-20 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-purple-800 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
