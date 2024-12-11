"use client"

import Image from "next/image"
import Favicon from "@/assets/favicon.svg"
import { ImageSectionType } from "@/types/types"
import LeaveDetailsButton from "@/components/common/LeaveDetails"

interface ImageSectionProps {
  data: ImageSectionType
}

const ImageSection = ({ data }: ImageSectionProps) => {
  const { desc, header, buttonText, src, alt } = data
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 ">
      <Image
        className="absolute w-full -z-10 brightness-50  pointer-events-none"
        src={src}
        alt={alt || 'background image'}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <div className="relative flex flex-col text-center items-center justify-center space-y-5 px-5 py-14 lg:min-h-[300px] md:max-w-2xl lg:max-w-4xl md:mx-auto">
        {buttonText && (
          <div className="bg-white rounded-lg opacity-90">
            <Image
              className="w-[60px] h-[60px] flex items-center justify-center"
              src={Favicon}
              alt="Level Up image"
              width='60'
              height='60'
            />
          </div>
        )}
        <div className="space-y-2">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">{header}</h2>
          <p className="text-sm lg:text-base text-white">{desc}</p>
        </div>
        {buttonText && (
          <div
            className="relative flex flex-col text-center items-center justify-center space-y-5 px-5 py-14 z-10"
            onClick={() => console.log("clicked! from image")}
          >
            <LeaveDetailsButton isDark={false}>{buttonText}</LeaveDetailsButton>
          </div>
        )}
      </div>
    </section>
  )
}

export default ImageSection