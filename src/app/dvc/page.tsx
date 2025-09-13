import { fetchDvcPageData } from '@/lib/api/dvcPage';
import ImageSection from '@/components/common/ImageSection';
import DvcList from '@/components/dvc/DvcList';
import PageDesc from '@/components/common/PageDesc';

const DvcPage = async () => {
  const data = await fetchDvcPageData();

  if (!data) {
    return <div>Failed to load Dvc Page content. Please try again later.</div>;
  }

  const { dvcCta, dvcDesc, imageSection, dvcList } = data

  return (
    <>
      <ImageSection data={imageSection} />
      <PageDesc data={dvcDesc} />
      <DvcList data={dvcList} />
      {/* CHANGE LATER TO A LEAVE DETAILS */}
      <ImageSection data={dvcCta} />
    </>
  );
}

export default DvcPage
