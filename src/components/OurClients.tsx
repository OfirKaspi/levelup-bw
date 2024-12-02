"use client"

import Image from "next/image"
import useResponsive from "@/hooks/useResponsive"
import ImageBg from "@/components/ImageBg"
import { Button } from "@/components/ui/button"

const OurClients = () => {
  const data = {
    header: "What our Clients say About us",
    desc: "At LevelUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/5513846_2862210_lntbom.jpg",
    reviews: [
      {
        header: "LevelUp has been Instrumental in Transforming our Online Presence. ",
        desc: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        image: {
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/896_vnoji2.jpg",
          header: "Ashley Bennet",
          desc: "CEO of Chic Boutique",
        },
      },
      {
        header: "Working with LevelUp was a breeze.",
        desc: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. LevelUp is a trusted partner we highly recommend.",
        image: {
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732878000/7187_qwf50t.jpg",
          header: "John Smith",
          desc: "Founder of HungryBites",
        },
      },
      {
        header: "LevelUp developed a comprehensive booking and reservation system for our event management company",
        desc: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        image: {
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877999/15511_mrizjo.jpg",
          header: "Sarah Cohen",
          desc: "CEO of EventMaster",
        },
      },
      {
        header: "ProTech Solutions turned to LevelUp to automate our workflow",
        desc: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. LevelUp's expertise and professionalism have made them a trusted technology partner.",
        image: {
          src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732877998/12127_ryy3yp.jpg",
          header: "Robert Hurry",
          desc: "COO of ProTech Solutions",
        },
      },
    ]
  }

  const { isMobile } = useResponsive()

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} />
      <ul className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-5">
        {data.reviews.map((review, index) => (
          <li
            key={`[${review.image.header}]${index}`}
            className="flex flex-col gap-5 justify-between border-2 p-5 rounded-lg"
          >
            <div className="space-y-2">
              <h4 className="text-purple-800 font-bold">{review.header}</h4>
              <p className="text-muted-foreground">{review.desc}</p>
            </div>
            <footer className="flex justify-between border-2 p-3 rounded-md">
              <div className="flex gap-2">
                <Image
                  src={review.image.src}
                  alt={`${review.image.header} Image`}
                  width={40}
                  height={40}
                  className="object-cover h-10 w-10 rounded-sm"
                />
                <div className="text-sm">
                  <header className="font-bold">{review.image.header}</header>
                  <p className="text-muted-foreground">{review.image.desc}</p>
                </div>
              </div>
              {!isMobile && <Button className="bg-purple-800 h-10">Open Website</Button>}
            </footer>
            {isMobile && <Button className="bg-purple-800 w-full h-10">Open Website</Button>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurClients