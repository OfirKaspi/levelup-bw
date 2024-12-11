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
    <section className="relative w-screen screen left-1/2 -translate-x-1/2 -mt-[90px] pt-[90px]" style={{ backgroundColor: project.background.color }}>
      <div className="space-y-5 p-5 ">
        <div className="relative flex justify-center">
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            width={200}
            height={200}
            className="z-10 object-contain"
          />
        </div>
        <h6 className="font-bold text-lg lg:text-2xl">{project.name}</h6>
        <p className="text-sm lg:text-base text-muted-foreground">{project.desc}</p>
        <div className="relative w-full h-auto flex justify-center">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={400}
            height={800}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectPage