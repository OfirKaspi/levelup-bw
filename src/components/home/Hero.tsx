import Link from "next/link";
import { HeroType } from "@/types/types";
import LeaveDetailsButton from "@/components/common/LeaveDetails";
import FancyButton from "@/components/common/FancyButton";
import { useInstagramFix } from "@/hooks/useInstagramFix";

interface HeroProps {
  data: HeroType;
}

const Hero = ({ data }: HeroProps) => {
  const heroHeight = useInstagramFix()
  return (
    <div className={`relative w-screen ${heroHeight} -mx-5 -mt-[90px] pt-[90px]`}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source src={data.image.src} type="video/mp4" />
      </video>

      {/* Content Container */}
      <section className="relative flex flex-col items-center justify-center text-center px-5 py-10 space-y-10 min-h-[560px] max-w-screen-xl mx-auto">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-[200px] blur-xl bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 opacity-30 -z-10"></div>

        {/* Header Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {data.header}
            <br />
            {data.subHeader}
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <LeaveDetailsButton isDark={false}>{data.buttonText1}</LeaveDetailsButton>
          <FancyButton isDark={false}>
            <Link href={"/projects"}>{data.buttonText2}</Link>
          </FancyButton>
        </div>
      </section>
    </div>
  );
};

export default Hero;
