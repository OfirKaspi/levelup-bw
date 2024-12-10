import { ImageSectionType, Project, CtaParagraph } from "@/types/types"
import ProjectsDesc from "@/components/projects/ProjectsDesc"
import ProjectsList from "@/components/projects/ProjectsList"
import ImageSection from "@/components/common/ImageSection"

interface OurProjectsProps {
  projectsDesc: CtaParagraph
  projectsImage: ImageSectionType
  projectsList: Project[]
}

const OurProjects = ({ projectsDesc, projectsImage, projectsList }: OurProjectsProps) => {
  return (
    <>
      <ImageSection data={projectsImage} />
      <ProjectsDesc data={projectsDesc} />
      <ProjectsList data={projectsList} />
    </>
  )
}

export default OurProjects