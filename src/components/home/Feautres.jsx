import React from "react";
import Container from "../common/Container";
import Title from "../Title";

const Feautres = () => {
  return (
    <div>
      {/* Features Section */}
      <section className="py-20 ">
        <Container className="px-4">
          <div className="text-center mb-5">
            <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-4">
              Why Choose <span className="text-primary">Our Care</span>
            </h2>
            <Title
              description="We're committed to providing the highest quality care with
              compassion and professionalism"
              buttonText=""
              href="#"
            ></Title>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L4 16.586V19a1 1 0 001 1h2.414l8.586-8.586a2 2 0 000-2.828z"
                    />
                  </svg>
                ),
                title: "Certified Professionals",
                description:
                  "All our caregivers are fully certified and background-checked",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
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
                ),
                title: "24/7 Availability",
                description:
                  "Round-the-clock care services when you need them most",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Compassionate Care",
                description:
                  "We treat every client with dignity, respect, and genuine care",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
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
                ),
                title: "Trusted Service",
                description:
                  "Hundreds of satisfied families trust us with their loved ones",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-base-content mb-3">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Feautres;
