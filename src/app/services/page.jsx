"use client";
import CommonTitle from "@/components/common/CommonTitle";
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
      <CommonTitle
        className={"pt-30"}
        heading="Our Services"
        des="Explore our range of professional care services"
      ></CommonTitle>
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
