"use client";

import Image from "next/image";
import LevelUpLogo from "@/assets/levelup-logo.png";
import { ImageSectionType } from "@/types/types";
import LeaveDetailsDialog from "@/components/forms/leave-details-form/LeaveDetailsFormDialog";

interface ImageSectionProps {
  data: ImageSectionType;
}

const ImageSection = ({ data }: ImageSectionProps) => {
  const { desc, header, buttonText, src, alt } = data;

  return (
    <section className="relative w-screen -mx-5 overflow-hidden">
      {/* Background image container with fixed height */}
      <div className={`relative w-full ${buttonText ? "h-[500px]" : "h-[350px]"}`}>
        <Image
          src={src}
          alt={alt || "תמונה רקע"}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "top" }}
        />
      </div>

      {/* Centered content over image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center space-y-5 px-5 max-w-screen-sm md:max-w-screen-md mx-auto">
        {/* Optional Icon */}
        {buttonText && (
          <Image
            src={LevelUpLogo}
            alt="לוגו Level Up"
            width={80}
            height={1}
            className="object-contain w-[80px] h-auto"
          />
        )}

        {/* Header + Description */}
        <div className="space-y-3 text-white">
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ textShadow: "2px 6px 4px rgba(0, 0, 0, 1)" }}
          >
            {header}
          </h2>
          <p
            className="lg:text-lg"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 1)" }}
          >
            {desc}
          </p>
        </div>

        {/* CTA Button */}
        {buttonText && (
          <div>
            <LeaveDetailsDialog text={buttonText} isDark={false} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSection;
