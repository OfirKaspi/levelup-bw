import { Project } from "@/types/types"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectPreviewProps {
  project: Project
  index: number
}

const ProjectPreview = ({ project, index }: ProjectPreviewProps) => {
  return (
    <li key={project._id}>
      <h5 className="text-lg lg:text-2xl text-muted-foreground border-b-2 pb-2">{index < 9 ? `0${index + 1}` : index + 1}: {project.header}</h5>
      <div className="flex flex-col gap-5 py-5">
        <div className="relative aspect-video rounded-lg">
          <Image
            className="rounded-lg"
            src={project.src}
            alt={project.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
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
  )
}

export default ProjectPreview