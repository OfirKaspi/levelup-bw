import AboutUs from "@/components/about/AboutUs";
import AboutUsSummary from "@/components/about/AboutUsSummary";
import OurStory from "@/components/about/OurStory";
import { fetchAboutPageData } from "@/lib/api/aboutPage";

const AboutPage = async () => {
  const { aboutUs, ourStory, aboutUsSummary } = await fetchAboutPageData()
  return (
    <>
      <AboutUs data={aboutUs} />
      <OurStory data={ourStory} />
      <AboutUsSummary data={aboutUsSummary} />
    </>
  )
}
export default AboutPage