import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import OurTechs from "@/components/OurTechs";
import Questions from "@/components/Questions";
import Subscription from "@/components/Subscription";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurTechs />
      <OurServices />
      <OurClients />
      <Questions />
      <Subscription />
    </>
  );
}
