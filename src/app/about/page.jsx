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
      <section className="relative  overflow-hidden">
        {" "}
        <div className="absolute inset-0">
          <Image
            src="https://i.ibb.co.com/PsHXfGKT/mother-holding-her-small-baby-260nw-2490288401.jpg"
            alt="About Professional Care Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/10"></div>
          <div className="absolute inset-0 "></div>
        </div>
        <Container className="relative z-10 pt-10  px-6 lg:px-8">
          <div className="flex items-center min-h-[40vh] py-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block text-secondary">About</span>
              </h1>
              {/* Breadcrumbs */}
              <div className="breadcrumbs text-sm mb-6 text-white/80">
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-primary">About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
                  className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl"></div>
              <div className="absolute -bottom-6 -right-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years Serving</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Proud></Proud>
      {/* Stats Section */}
      <section className="py-16 ">
        <Container className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust
              our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-base-content/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
