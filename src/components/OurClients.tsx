import Image from "next/image"
import ImageBg from "./ImageBg"

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

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} />
      <ul className="py-5 space-y-5">
        {data.reviews.map((review, index) => (
          <li
            key={`[${review.image.header}]${index}`}
            className="space-y-5 border-2 p-5 rounded-lg"
          >
            <header className="text-purple-800 font-bold">{review.header}</header>
            <p>{review.desc}</p>
            <footer className="flex gap-2 border-2 p-3 rounded-md">
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
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurClients