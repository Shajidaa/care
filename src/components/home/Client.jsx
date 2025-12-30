"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import Title from "../Title";
import Image from "next/image";

const Client = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Daughter of Resident",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Exceptional care! The team treats my mother like their own family. Their patience and kindness have made her transition into assisted living so much easier. Highly recommend.",
      service: "Elderly Care",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Family Member",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Outstanding support during my father's recovery. The caregivers were professional, punctual, and truly attentive to his medical needs. We felt very safe with them.",
      service: "Post-Surgical Care",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Working Parent",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "I've used many agencies, but this one stands out. Their communication is top-notch, and the caregiver they matched us with is an absolute blessing to our home.",
      service: "In-Home Caregiving",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Son",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      review:
        "Great experience with the respite care team. They were very flexible with our tight schedule and gave me the peace of mind I needed to take a much-needed break.",
      service: "Respite Care",
      date: "1 week ago",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Social Worker",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "As a social worker, I appreciate their attention to detail and personalized care plans. They truly listen to the clients' needs and respect their dignity.",
      service: "Care Coordination",
      date: "2 months ago",
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Guardian",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Reliable, efficient, and deeply compassionate. They've been our go-to provider for specialized care for over a year. Always satisfied with the quality of staff.",
      service: "Specialized Dementia Care",
      date: "1 month ago",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-base-100 to-base-200/50">
      <Container>
        <div className="text-center mb-16">
          <div className="text-center mb-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-1">
              What Our <span className="text-primary"> Clients Say</span>
            </h2>
          </div>

          <Title
            description={
              " Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our services."
            }
          ></Title>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300/50 cursor-pointer ${
                index === activeTestimonial ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="card-body p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <Image
                        fill
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base-content">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-base-content/70">
                      {testimonial.role}
                    </div>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>

                <p className="text-base-content/80 mb-4 line-clamp-3">
                  "{testimonial.review}"
                </p>

                <div className="flex justify-between items-center">
                  <div className="badge badge-primary badge-outline badge-sm">
                    {testimonial.service}
                  </div>
                  <div className="text-xs text-base-content/60">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Client;
