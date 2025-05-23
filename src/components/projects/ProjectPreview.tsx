import { Project } from "@/types/types"
import { StickyNote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import WebsiteRedirection from "@/components/common/WebsiteRedirection"

interface ProjectPreviewProps {
  project: Project
}

const ProjectPreview = ({ project }: ProjectPreviewProps) => {
  return (
    <li key={project._id} className="md:p-5 md:border-2 md:rounded-lg">
      <h4 className="font-bold text-lg lg:text-2xl border-b-2 pb-2">{project.name}</h4>
      <div className="flex flex-col gap-5 py-5">
        <div className="relative aspect-video rounded-lg">
          <Image
            className="rounded-lg"
            src={project.mockupImages.instagram.src}
            alt={project.mockupImages.instagram.alt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Link
              href={`/projects/${project.internalLink.href}`}
              className="flex items-center justify-center gap-1 bg-rose-300 hover:bg-rose-400 transition ease-out py-2 px-4 w-fit rounded-lg"
            >
              {project.internalLink.text}
              <StickyNote size={20} />
            </Link>
            <WebsiteRedirection
              text={project.externalLink.text}
              href={project.externalLink.href}
            />
          </div>
        </div>
        <p className="text-sm lg:text-base text-muted-foreground">{project.desc}</p>
      </div>
    </li>
  )
}

export default ProjectPreview