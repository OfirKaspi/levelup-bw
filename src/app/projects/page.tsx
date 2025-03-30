import { fetchProjectsPageData } from '@/lib/api/projectsPage';
import ImageSection from '@/components/common/ImageSection';
import ProjectsList from '@/components/projects/ProjectsList';
import PageDesc from '@/components/common/PageDesc';

const ProjectsPage = async () => {
  const data = await fetchProjectsPageData();

  if (!data) {
    return <div>Failed to load Projects Page content. Please try again later.</div>;
  }

  const { projectsCta, projectsDesc, imageSection, projectsList } = data

  return (
    <>
      <ImageSection data={imageSection} />
      <PageDesc data={projectsDesc} />
      <ProjectsList data={projectsList} />
      {/* CHANGE LATER TO A LEAVE DETAILS */}
      <ImageSection data={projectsCta} />
    </>
  );
}

export default ProjectsPage
