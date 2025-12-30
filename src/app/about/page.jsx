import CommonTitle from "@/components/common/CommonTitle";
import Container from "@/components/common/Container";
import Proud from "@/components/Proud";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: "👥" },
    { number: "50+", label: "Expert Staff", icon: "👨‍⚕️" },
    { number: "24/7", label: "Support Available", icon: "🕐" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
  ];

  const values = [
    {
      icon: "💝",
      title: "Compassionate Care",
      description:
        "We treat every client with dignity, respect, and genuine care, understanding that each person has unique needs and circumstances.",
    },
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "We strive for the highest standards in all our services, continuously improving and adapting to provide the best possible care.",
    },
    {
      icon: "🤝",
      title: "Trust & Reliability",
      description:
        "Building lasting relationships through consistent, dependable service and maintaining the highest levels of professional integrity.",
    },
    {
      icon: "🌟",
      title: "Innovation",
      description:
        "Embracing new technologies and methodologies to enhance the quality and accessibility of our healthcare services.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <CommonTitle
        className={"pt-30"}
        heading="About Us"
        des="Learn more about our mission, values, and story"
      ></CommonTitle>

      {/* Our Story Section */}
      <section className="py-20 bg-base-100">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
                  Our Story
                </h2>
                <div className="w-16 h-1  rounded-full mb-6"></div>
              </div>

              <p className="text-lg text-base-content/80 leading-relaxed">
                Founded with a vision to revolutionize healthcare delivery, we
                began our journey recognizing the growing need for personalized,
                accessible healthcare services. Our founders, healthcare
                professionals with decades of combined experience, identified
                gaps in traditional healthcare systems.
              </p>

              <p className="text-lg text-base-content/80 leading-relaxed">
                Today, we&apos;ve grown into a trusted healthcare partner,
                serving hundreds of families across the region. Our commitment
                remains unchanged: delivering exceptional care that puts
                patients first, combining medical expertise with genuine
                compassion.
              </p>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="btn btn-primary hover:btn-secondary btn-lg rounded-full px-8 hover:scale-105 transition-transform duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="https://media.istockphoto.com/id/494543697/photo/baby-girl-in-nature.jpg?s=612x612&w=0&k=20&c=zk92DHEPwwHU3bsQbrenu0KLGgp5BU3H06HqNEC8zis="
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      <Proud></Proud>
    </div>
  );
};

export default AboutPage;
