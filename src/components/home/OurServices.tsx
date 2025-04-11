"use client"

import Image from "next/image"
import { OurServicesType } from "@/types/types"
import useResponsive from "@/hooks/useResponsive"
import ImageSection from "@/components/common/ImageSection"
import LeaveDetailsDialog from "@/components/forms/LeaveDetailsDialog"

interface OurServicesProps {
  data: OurServicesType
}

const OurServices = ({ data }: OurServicesProps) => {
  const { imageSection, services } = data
  const { isTablet } = useResponsive()

  return (
    <>
      <ImageSection data={imageSection} />
      <section className="max-w-screen-xl mx-auto">
        <ul className="flex flex-col lg:flex-row gap-5 py-5">
          {services.map((service) => (
            <li key={service.header} className={`flex flex-col flex-1 p-5 space-y-5 border-2 justify-between rounded-lg`}>
              <div className="space-y-2">
                <header className="flex justify-between">
                  <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-5">
                    <span className="relative border-2 rounded-md h-10 w-10 text-purple-800">
                      <Image
                        className="p-2"
                        src={`/our-services/${service.src}.svg`}
                        alt={service.alt}
                        fill
                      />
                    </span>
                    <h3 className="font-bold lg:text-lg">{service.header}</h3>
                  </div>
                  {isTablet && service.buttonText &&
                    <div className="sm:w-full md:w-fit lg:w-full ">
                      <LeaveDetailsDialog text={service.buttonText} isFancyWrapper={false} />
                    </div>
                  }
                </header>
                <p className="text-sm lg:text-base text-muted-foreground">{service.desc}</p>
              </div>
              {!isTablet && service.buttonText &&
                <LeaveDetailsDialog text={service.buttonText} isFancyWrapper={false} />
              }
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default OurServices