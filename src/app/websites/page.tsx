import { fetchWebsitesPageData } from '@/lib/api/websitesPage';
import ImageSection from '@/components/common/ImageSection';
import WebsitesList from '@/components/websites/WebsitesList';
import PageDesc from '@/components/common/PageDesc';

const WebsitesPage = async () => {
  const data = await fetchWebsitesPageData();

  if (!data) {
    return <div>Failed to load Websites Page content. Please try again later.</div>;
  }

  const { websitesCta, websitesDesc, imageSection, websitesList } = data

  return (
    <>
      <ImageSection data={imageSection} />
      <PageDesc data={websitesDesc} />
      <WebsitesList data={websitesList} />
      {/* CHANGE LATER TO A LEAVE DETAILS */}
      <ImageSection data={websitesCta} />
    </>
  );
}

export default WebsitesPage
