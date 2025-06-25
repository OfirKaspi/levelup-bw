"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroType } from "@/types/types";
import FancyWrapper from "@/components/common/FancyWrapper";
import { useInstagramFix } from "@/hooks/useInstagramFix";
import useResponsive from "@/hooks/useResponsive";
import { useState, useMemo } from "react";

interface HeroProps {
  data: HeroType;
}

const Hero = ({ data }: HeroProps) => {
  const heroHeight = useInstagramFix();
  const { isMobile } = useResponsive();
  const [videoLoaded, setVideoLoaded] = useState(false);

  // UseMemo to prevent recalculation on every render
  const fallbackImage = useMemo(
    () => (isMobile ? data.imageMobile : data.image),
    [isMobile, data]
  );
  const videoSrc = useMemo(
    () => (isMobile ? data.videoMobile.src : data.video.src),
    [isMobile, data]
  );

  return (
    <div
      className={`relative w-screen ${heroHeight} -mx-5 -mt-[90px] pt-[90px]
      min-h-[560px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[880px]`}
    >
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {!videoLoaded && (
          <Image
            src={fallbackImage.src}
            alt={fallbackImage.alt}
            fill
            className="object-cover brightness-50 transition-opacity duration-500"
            priority
          />
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* CONTENT */}
      <section className="relative flex flex-col items-center text-center px-5 gap-10 md:gap-16 max-w-screen-xl pt-8 md:pt-24 xl:pt-32 mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug text-white">
            {/* First Text: Bright and shiny with a subtle gradient */}
            <span className="block bg-gradient-to-r from-white via-slate-100 to-gray-300 text-transparent bg-clip-text drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]">
              {data.header}
            </span>

            {/* Second Text: Purple shiny gradient with futuristic shadow */}
            <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-600 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(204,153,255,0.8)]">
              {data.subHeader}
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <FancyWrapper className="text-lg md:text-xl xl:text-2xl xl:py-6 xl:px-6">
            <Link href="/projects" aria-label={data.buttonText2}>
              {data.buttonText2}
            </Link>
          </FancyWrapper>
        </div>
      </section>
    </div>
  );
};

export default Hero;
