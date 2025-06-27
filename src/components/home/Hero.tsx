"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeroType } from "@/types/types";
import FancyWrapper from "@/components/common/FancyWrapper";
import { useInstagramFix } from "@/hooks/useInstagramFix";
import MotionFadeIn from "../common/MotionFadeIn";
import { motion } from "framer-motion";

interface HeroProps {
  data: HeroType;
}

const Hero = ({ data }: HeroProps) => {
  const heroHeight = useInstagramFix();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <div
      className={`relative w-screen ${heroHeight} -mx-5 -mt-[90px] pt-[90px]
      min-h-[700px] md:min-h-[750px] lg:min-h-[800px] xl:min-h-[880px] overflow-hidden`}
    >
      {/* 🖼️ Fallback Background Image */}
      <Image
        src={data.image.src}
        alt={data.image.alt}
        fill
        className="object-cover brightness-50 absolute inset-0 w-full h-full -z-20"
        priority
      />

      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        disablePictureInPicture
        controls={false}
        className="absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-1000 -z-10"
        onCanPlay={() => setVideoLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source src={data.video.src} type="video/mp4" />
      </motion.video>

      {/* 🌟 Content (always rendered, fade-in nicely) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex flex-col items-center text-center px-5 gap-10 md:gap-16 max-w-screen-xl pt-16 md:pt-24 xl:pt-32 mx-auto"
      >
        <MotionFadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug text-white text-center">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-slate-300 text-transparent bg-clip-text drop-shadow-[0_1px_8px_rgba(255,255,255,0.5)] tracking-tight">
              {data.header}
            </span>
            <span className="block bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-[0_0_18px_rgba(255,0,255,0.5)] tracking-tight">
              {data.subHeader}
            </span>
          </h1>
        </MotionFadeIn>

        <MotionFadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            <FancyWrapper className="text-lg md:text-xl xl:text-2xl xl:py-6 xl:px-6">
              <Link href="/projects" aria-label={data.buttonText2}>
                {data.buttonText2}
              </Link>
            </FancyWrapper>
          </div>
        </MotionFadeIn>
      </motion.section>
    </div>
  );
};

export default Hero;
