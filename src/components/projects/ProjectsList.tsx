import { Project } from "@/types/types"
import ProjectPreview from "@/components/projects/ProjectPreview"

interface ProjectsListProps {
  data: Project[]
}

const ProjectsList = ({ data: projects }: ProjectsListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pb-10 md:max-w-3xl lg:max-w-5xl md:mx-auto">
      {projects.map((project) => (
        <ProjectPreview key={project._id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectsList