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
      <div className="flex flex-col md:flex-row gap-2 items-center md:gap-10 md:px-10 py-10 ">
        <div className="flex flex-col gap-2 lg:gap-5">
          <h4 className="font-bold text-2xl lg:text-3xl">{paragraph.header}</h4>
          <p className="text-sm lg:text-base text-muted-foreground">{paragraph.desc}</p>
        </div>
        <div className="flex justify-center md:h-[200px] lg:h-[300px] md:aspect-square">
          <Logo isTextShow={false} size={200} />
        </div>
      </div>
    </section>
  )
}

export default AboutUs