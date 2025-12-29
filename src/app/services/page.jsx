"use client";
import Container from "@/components/common/Container";
import ServiceCard from "@/components/common/ServiceCard";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const ServicesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/services.json");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
                <span className="block text-secondary">Service</span>
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
                  <li className="text-primary">Service</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <div className=" grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {posts.map((post, index) => (
            <ServiceCard key={index} post={post}></ServiceCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;
