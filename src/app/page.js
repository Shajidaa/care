import Link from "next/link";
import Container from "@/components/common/Container";
import Hero from "@/components/home/Hero";
import ServiceCard from "@/components/common/ServiceCard";
import ServiceSection from "@/components/home/ServiceSection";
import Feautres from "@/components/home/Feautres";
import CTA from "@/components/home/CTA";
import Banner from "@/components/home/Banner";
import Contact from "@/components/common/Contact";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero></Hero>
      <ServiceSection></ServiceSection>
<Contact></Contact>
      <Feautres></Feautres>
      <CTA></CTA>
    </div>
  );
}
