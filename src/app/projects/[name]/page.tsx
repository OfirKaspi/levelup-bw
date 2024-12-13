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
      <div className="md:max-w-3xl lg:max-w-5xl md:mx-auto">
        <div className="space-y-5 p-5">
          <div className="relative aspect-video -mx-5 -mt-5">
            {/* Background Image */}
            <div className="absolute z-0 w-full h-full">
              <Image
                src={project.background.image.src}
                alt={project.background.image.alt}
                height={900}
                width={1600}
              />
            </div>

            <div className="absolute z-10 aspect-square p-10 sm:p-20 left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2">
              {/* Foreground Image */}
              <Image
                src={project.logo.src}
                alt={project.logo.alt}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold text-lg lg:text-2xl">{project.name}</h6>
            <p className="text-sm lg:text-base text-muted-foreground">{project.desc}</p>
          </div>
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
      </div>
    </section>
  )
}

export default ProjectPage