import { fetchHomePageData } from "@/lib/api/homePage";
import Hero from "@/components/home/Hero";
import ClientReviews from "@/components/home/ClientReviews";
import OurServices from "@/components/home/OurServices";
import OurTechs from "@/components/home/OurTechs";
import Questions from "@/components/home/Questions";
import Subscription from "@/components/common/Subscription";

const HomePage = async () => {
  const { ourServices, techs, ourClients, questions, subscription, hero } = await fetchHomePageData()
  return (
    <>
      <Hero data={hero} />
      <OurTechs data={techs} />
      <OurServices data={ourServices} />
      <ClientReviews data={ourClients} />
      <Questions data={questions} />
      <Subscription data={subscription} />
    </>
  );
}

export default HomePage