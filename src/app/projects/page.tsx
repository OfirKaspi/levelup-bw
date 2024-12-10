import { fetchProjectsPageData } from '@/lib/api/projects';
import ImageSection from '@/components/common/ImageSection';
import OurProjects from '@/components/projects/OurProjects';

const ProjectsPage = async () => {
  const { projectsCta, projectsDesc, projectsImage, projectsList } = await fetchProjectsPageData()

  return (
    <>
      <OurProjects projectsDesc={projectsDesc} projectsImage={projectsImage} projectsList={projectsList} />
      {/* CHANGE LATER TO A LEAVE DETAILS */}
      <ImageSection data={projectsCta} />
    </>
  );
}

export default ProjectsPage
