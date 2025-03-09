"use client";

import { useEffect } from "react";

const ClientRedirect = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (userAgent.includes("Instagram")) {
      const url = window.location.href;
      window.location.replace(`https://openinbrowser.net/?url=${encodeURIComponent(url)}`);
    }
  }, []);

  return null; // No UI needed
};

export default ClientRedirect;
