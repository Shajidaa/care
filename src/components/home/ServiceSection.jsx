import React from "react";
import Link from "next/link"; // Import kora chhilo na
import Container from "../common/Container";
import ServiceCard from "../common/ServiceCard";

async function getServices() {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/services.json`,
      { cache: "no-store" } // Fresh data-r jonno
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
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-4">
            Our <span className="text-primary">Care Services</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Comprehensive care solutions tailored to meet your family&apos;s
            unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id || index} post={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn btn-outline btn-lg px-8 hover:btn-secondary transition-all duration-300"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
