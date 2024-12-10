import AboutUs from "@/components/about/AboutUs";
import AboutUsSummary from "@/components/about/AboutUsSummary";
import OurStory from "@/components/about/OurStory";
import { fetchAboutPageData } from "@/lib/api/aboutPage";

const AboutPage = async () => {
  const data = await fetchAboutPageData();

  if (!data) {
    return <div>Failed to load About Page content. Please try again later.</div>;
  }

  const { aboutUs, ourStory, aboutUsSummary } = data;

  return (
    <>
      <AboutUs data={aboutUs} />
      <OurStory data={ourStory} />
      <AboutUsSummary data={aboutUsSummary} />
    </>
  );
};

export default AboutPage;
