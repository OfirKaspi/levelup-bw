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
    <section>
      <div className="space-y-5 pb-5">
        <div className="relative flex justify-center">
          <Image
            src={project.logo.src}
            alt={project.logo.alt}
            width={200}
            height={200}
          />
        </div>
        <h6 className="font-bold text-lg lg:text-2xl">{project.name}</h6>
        <p className="text-sm lg:text-base text-muted-foreground">{project.desc}</p>
        <div className="relative flex justify-center rounded-lg overflow-hidden">
          <Image
            src={project.src}
            alt={project.alt}
            layout="responsive"
            width={1}
            height={1}
            className="rounded-lg object-cover max-w-[450px]"
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectPage