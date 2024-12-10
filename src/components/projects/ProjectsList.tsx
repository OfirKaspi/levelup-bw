import { Project } from "@/types/types"
import ProjectPreview from "@/components/projects/ProjectPreview"

interface ProjectsListProps {
  data: Project[]
}

const ProjectsList = ({ data: projects }: ProjectsListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pb-10">
      {projects.map((project, index) => (
        <ProjectPreview key={project._id} project={project} index={index} />
      ))}
    </ul>
  )
}

export default ProjectsList