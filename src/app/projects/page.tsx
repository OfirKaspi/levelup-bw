import { fetchProjectsPageData } from '@/lib/api/projectsPage';
import ImageSection from '@/components/common/ImageSection';
import ProjectsDesc from '@/components/projects/ProjectsDesc';
import ProjectsList from '@/components/projects/ProjectsList';

const ProjectsPage = async () => {
  const data = await fetchProjectsPageData();

  if (!data) {
    return <div>Failed to load Projects Page content. Please try again later.</div>;
  }

  const { projectsCta, projectsDesc, imageSection, projectsList } = data

  return (
    <>
      <ImageSection data={imageSection} />
      <ProjectsDesc data={projectsDesc} />
      <ProjectsList data={projectsList} />
      {/* CHANGE LATER TO A LEAVE DETAILS */}
      <ImageSection data={projectsCta} />
    </>
  );
}

export default ProjectsPage
