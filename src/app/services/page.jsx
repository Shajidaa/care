"use client";
import Container from "@/components/common/Container";
import ServiceCard from "@/components/common/ServiceCard";
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
    <Container>
      <h1>Services</h1>

      <div className=" grid grid-cols-1 md:grid-cols-3">
        {posts.map((post, index) => (
          <ServiceCard key={index} post={post}></ServiceCard>
        ))}
      </div>
    </Container>
  );
};

export default ServicesPage;
