import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";
import CommonBtn from "../Buttons/CommonBtn";

const Hero = () => {
  return (
    <section className="relative pt-10 overflow-hidden">
      <Container className="relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent">
                  Care
                </span>
                <br />
                <span className="text-base-content">That Matters</span>
              </h1>

              <p className="text-xl lg:text-2xl text-base-content/70 leading-relaxed max-w-2xl">
                Professional, compassionate care services for your loved ones.
                From baby care to elderly support, we are here when you need us
                most.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CommonBtn
                href="/services"
                buttonText="Explore Services"
              ></CommonBtn>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-base-300/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-base-content/60">
                  Happy Families
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-base-content/60">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-base-content/60">
                  Certified Staff
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.ibb.co.com/B2LT8mc7/vitaly-gariev-BD8i-K0lmqc0-unsplash.jpg"
                  alt="Professional Care Services"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-300/50 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base-content text-sm">
                    Certified
                  </div>
                  <div className="text-xs text-base-content/60">
                    Professional Staff
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-300/50 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base-content text-sm">
                    24/7
                  </div>
                  <div className="text-xs text-base-content/60">
                    Available Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
