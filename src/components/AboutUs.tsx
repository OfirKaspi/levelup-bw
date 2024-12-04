import ImageBg from "@/components/ImageBg"
import Logo from "@/components/Logo"

const AboutUs = () => {
  const data = {
    header: "About Us",
    desc: "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
    paragraph: {
      header: "About LevelUp",
      desc: "SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
    },
  }

  return (
    <section>
      <ImageBg header={data.header} desc={data.desc} src={data.src} />
      <div className="flex flex-col md:flex-row gap-2 items-center md:gap-10 md:px-10 py-10 ">
        <div className="flex flex-col gap-2 lg:gap-5">
          <h4 className="font-bold text-2xl lg:text-3xl">{data.paragraph.header}</h4>
          <p className="text-sm lg:text-base text-muted-foreground">{data.paragraph.desc}</p>
        </div>
        <div className="flex justify-center md:h-[200px] lg:h-[300px] md:aspect-square">
          <Logo isTextShow={false} size={200} />
        </div>
      </div>
    </section>
  )
}

export default AboutUs