"use client"

import { Brush, Puzzle, SquareChartGantt } from "lucide-react"
import useResponsive from "@/hooks/useResponsive"
import ImageBg from "@/components/ImageBg"
import { Button } from "@/components/ui/button"

const OurServices = () => {
  const data = {
    header: "Our Services",
    desc: "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
    services: [
      {
        icon: <Brush />,
        header: "Design",
        desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        buttonText: "Learn More"
      },
      {
        icon: <Puzzle />,
        header: "Engineering",
        desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        buttonText: "Learn More"
      },
      {
        icon: <SquareChartGantt />,
        header: "Project Management",
        desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        buttonText: "Learn More"
      },
    ]
  }

  const { isTablet } = useResponsive()

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} />

      <ul className="flex flex-col lg:flex-row gap-5 py-5">
        {data.services.map((service) => (
          <li key={service.header} className={`flex flex-col flex-1 p-5 space-y-5 border-2 justify-between rounded-lg`}>
            <div className="space-y-2">
              <header className="flex justify-between">
                <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-5">
                  <span className="p-2 border-2 rounded-md text-purple-800">
                    {service.icon}
                  </span>
                  <h4 className="font-bold lg:text-lg">{service.header}</h4>
                </div>
                {isTablet && <Button className="bg-purple-800 h-10">{service.buttonText}</Button>}
              </header>
              <p className="text-sm lg:text-base text-muted-foreground">{service.desc}</p>
            </div>
            {!isTablet && <Button className="bg-purple-800 w-full h-10">{service.buttonText}</Button>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurServices