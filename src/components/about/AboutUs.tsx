import ImageSection from "@/components/common/ImageSection"
import Logo from "@/components/common/Logo"
import { AboutUsType } from "@/types/types"

interface AboutUsProps {
  data: AboutUsType
}

const AboutUs = ({ data }: AboutUsProps) => {
  const { imageSection, paragraph } = data
  return (
    <section>
      <ImageSection data={imageSection} />
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center  md:px-10 py-10 ">
        <div className="flex justify-center md:h-[150px] lg:h-[150px]">
          <Logo isTextShow={false} size={150} />
        </div>
        <header className="text-center md:text-start space-y-2 max-w-[400px]">
          <h3 className="font-bold text-2xl lg:text-3xl">{paragraph.header}</h3>
          <p className="text-sm lg:text-base text-muted-foreground">{paragraph.desc}</p>
        </header>
      </div>
    </section>
  )
}

export default AboutUs