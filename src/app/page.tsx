import { fetchHomePageData } from "@/lib/api/homePage";
import Hero from "@/components/home/Hero";
import ClientReviews from "@/components/home/ClientReviews";
import OurServices from "@/components/home/OurServices";
import OurTechs from "@/components/home/OurTechs";
import FAQ from "@/components/home/FAQ";
import Subscription from "@/components/common/Subscription";

const HomePage = async () => {
  const data = await fetchHomePageData();

  if (!data) {
    return <div>Failed to load Home Page content. Please try again later.</div>;
  }

  const { ourServices, techs, clientReviews, questions, subscription, hero } = data
  return (
    <>
      <Hero data={hero} />
      <OurTechs data={techs} />
      <OurServices data={ourServices} />
      <ClientReviews data={clientReviews} />
      <FAQ data={questions} />
      <Subscription data={subscription} />
    </>
  );
}

export default HomePage