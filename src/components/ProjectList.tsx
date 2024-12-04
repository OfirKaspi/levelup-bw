import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProjectList = () => {
  const data = {
    header: "At LevelUp",
    desc: "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
    buttonText: "Here are four examples of our notable works:",
    projects: [
      {
        _id: "1",
        header: "Landing page",
        name: "Shikli - Interior Design",
        href: "http://localhost:3000/projects",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326832/MOCKUP_-_PROFILE_PAGE_v7qj1n.png",
      },
      {
        _id: "2",
        header: "Landing page",
        name: "Bride Boutique",
        href: "http://localhost:3000/projects",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_BRIDE_BOUTIQUE_yjagtn.png",
      },
      {
        _id: "3",
        header: "Landing page",
        name: "Let's Garden",
        href: "http://localhost:3000/projects",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326831/MOCKUP_-_LETS_GARDEN_qcdgki.png",
      },
      {
        _id: "4",
        header: "Landing page",
        name: "SiteTech IL",
        href: "http://localhost:3000/projects",
        desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
        src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1733326830/MOCKUP_-_SITETECH_xeiygk.png",
      },
    ]
  }

  return (
    <section className="space-y-10 py-10">
      <div className="flex flex-col gap-5 md:px-10">
        <div>
          <h4 className="font-bold text-2xl lg:text-3xl">{data.header}</h4>
          <p className="text-sm lg:text-base text-muted-foreground">{data.desc}</p>
        </div>
        <span className="bg-purple-100 p-2 w-fit rounded-lg">{data.buttonText}</span>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {data.projects.map((project, index) => (
          <li key={project._id}>
            <h5 className="text-lg lg:text-2xl text-muted-foreground border-b-2 pb-2">{index < 9 ? `0${index + 1}` : index + 1}: {project.header}</h5>
            <div className="flex flex-col gap-5 py-5">
              <div className="relative aspect-video rounded-lg">
                <Image
                  className="rounded-lg"
                  src={project.src}
                  alt={`${project.name} picture`}
                  fill
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="font-bold text-lg lg:text-2xl">{project.name}</h6>
                <div className="flex justify-between">
                  <Link href={project.href} className="bg-purple-100 p-2 w-fit rounded-lg">{project.href}</Link>
                  <Link href={project.href} className="bg-purple-100 p-2 w-fit rounded-lg">
                    <ExternalLink />
                  </Link>
                </div>
              </div>
              <p className="text-sm lg:text-base text-muted-foreground">{project.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectList