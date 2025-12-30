import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import Feautres from "@/components/home/Feautres";
import CTA from "@/components/home/CTA";
import Contact from "@/components/common/Contact";
import Client from "@/components/home/Client";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <ServiceSection></ServiceSection>
      <Contact></Contact>
      <Client></Client>
      <Feautres></Feautres>
      <CTA></CTA>
    </div>
  );
}
