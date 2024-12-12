import { HeroType } from "@/types/types"
import LeaveDetailsButton from "../common/LeaveDetails"
import FancyButton from "../common/FancyButton"
import Link from "next/link"

interface HeroProps {
  data: HeroType
}

const Hero = ({ data }: HeroProps) => {
  return (
    <div className="relative -mt-[90px] pt-[90px] min-h-dvh w-screen left-1/2 -translate-x-1/2">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
      >
        <source
          src={data.image.src}
          type="video/mp4"
        />
      </video>

      {/* Header Content */}
      <section className="relative px-5 py-10 flex flex-col items-center space-y-10 text-center h-[560px] pt-[80px]">
        <div className="space-y-8">
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl box-content font-extrabold text-transparent text-center select-none">
            {data.header}<br />{data.subHeader}
          </span>
          <h1
            className="relative top-0 w-fit h-auto py-4 justify-center flex items-center text-white bg-clip-text text-3xl font-extrabold text-center ">
            {data.header}<br />{data.subHeader}
          </h1>
          {/* <p className="p-5">For startups, enterprise leaders, media & publishers, and social good. </p> */}
        </div>
        <div className="space-x-3">
          <LeaveDetailsButton isDark={true}>{data.buttonText1}</LeaveDetailsButton>
          <FancyButton isDark={false}>
            <Link href={'/projects'}>
              {data.buttonText2}
            </Link>
          </FancyButton>
        </div>
      </section>
    </div>
  )
}

export default Hero