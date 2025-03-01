import { fetchProjectData } from "@/lib/api/projectsPage";
import Image from "next/image";

const ProjectPage = async ({ params }: { params: Promise<{ name: string }> }) => {
  const resolvedParams = await params
  const { name } = await resolvedParams
  const project = await fetchProjectData(name)

  if (!project) {
    return <div>Project do not found</div>
  }

  return (
    <section className="relative -mx-5" style={{ backgroundColor: project.backgroundColor }}>

      {/* NEED TO CHANGE LATER - THE NAV BAR MUST CHANGE HES COLOR AND NOT THIS DIV */}
      <div className="absolute w-screen left-1/2 -translate-x-1/2 -mt-[90px] pt-[90px]" style={{ backgroundColor: project.backgroundColor }} />
      
      <section className="flex flex-col items-center gap-5 p-5 md:flex-row-reverse md:gap-0 md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <div className="relative flex-1 max-w-[250px] md:max-w-full">
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            width={800}
            height={800}
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 max-w-[400px] md:max-w-full">
          <Image
            src={project.mockupImages.leftLaptop.src}
            alt={project.mockupImages.leftLaptop.alt}
            height={500}
            width={500}
            className="object-contain"
          />
        </div>
      </section>
      <section className="p-5 md:grid md:grid-cols-2 md:items-center md:text-center md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <header className="space-y-2">
          <h6 className="font-bold text-lg md:text-2xl">{project.name}</h6>
          <p className="md:text-lg">{project.desc}</p>
        </header>
        <div className="relative max-w-[500px] mx-auto">
          <Image
            src={project.mockupImages.phones.src}
            alt={project.mockupImages.phones.alt}
            width={1200}
            height={1600}
            className="rounded-lg object-contain"
          />
        </div>
      </section>
    </section>
  )
}

export default ProjectPage