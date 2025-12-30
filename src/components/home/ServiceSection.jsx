import React from "react";
import Link from "next/link";
import Container from "../common/Container";
import ServiceCard from "../common/ServiceCard";
import Title from "../Title";
import CommonBtn from "../Buttons/CommonBtn";

async function getServices() {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/services.json`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error("Failed to fetch");
    const services = await response.json();
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

const ServiceSection = async () => {
  const services = await getServices();

  return (
    <section className="py-20 bg-base-200/50">
      <Container className="px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-1">
            What Services <span className="text-primary">We offer</span>
          </h2>
        </div>
        <Title
          description="  Comprehensive care solutions tailored to meet your family's
            unique needs. Our dedicated team provides compassionate support,
            ensuring comfort and well-being at every step."
          href="/services"
        ></Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.id || index} post={service} />
          ))}
        </div>
        <CommonBtn
          className="mt-8 mx-auto container block"
          href={"/services"}
          buttonText={"View all services"}
        ></CommonBtn>
      </Container>
    </section>
  );
};

export default ServiceSection;
