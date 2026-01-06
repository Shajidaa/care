import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../common/Container";

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ibb.co.com/Wp0nKDwg/Screenshot-2025-12-29-180900.jpg"
          alt="Professional Care Services - Compassionate healthcare at your doorstep"
          fill
          className="object-contain"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 "></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Overlay */}
      <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="max-w-4xl space-y-8 text-white">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Professional</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Care Services
                </span>
                <span className="block">At Your Door</span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Experience premium healthcare and companion services delivered
              with
              <span className="text-primary font-semibold">
                {" "}
                compassion
              </span>{" "}
              and
              <span className="text-secondary font-semibold">
                {" "}
                professionalism
              </span>
              . Your comfort and well-being are our top priorities.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/services"
                className="group relative btn btn-primary btn-lg px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border-0"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-110"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></div>

                <span className="relative flex items-center gap-2 text-white">
                  Explore Services
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </Link>

              <Link
                href="/register"
                className="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
