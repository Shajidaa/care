"use client";
import Image from "next/image";
import React, { useState } from "react";

const Proud = () => {
  const [activeTab, setActiveTab] = useState("history");

  const tabContent = {
    history: {
      title: "Our proud history",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          <div className="space-y-8">
            <p className="relative pl-4 border-l-2 border-[var(--color-secondary)]/30">
              It all began in 1986 when Multiple Sclerosis Limited (MSL)
              identified the need for high-quality care services for people
              living with this chronic disease.
            </p>
            <p>
              By 1999, MSL recognised the time had come to establish NanoCare as
              a separate legal entity. A savvy and experienced Board was
              appointed and we were firmly on the path to growth.
            </p>
            <p>
              This growth was boosted by a series of acquisitions within the
              care sector between 2001 and 2008.
            </p>
          </div>
          <div className="space-y-8">
            <p>
              In 2010, the purchase and integration of Nationwide Health & Aged
              Care Services represented a major milestone in our growth.
            </p>
            <p>
              In 2013, NanoCare acquired Healthcare at Home, a nurse-led service
              offering a safe alternative to hospital care.
            </p>
            <p className="font-medium text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
              Today, we proudly continue as a wholly-owned not-for-profit
              subsidiary of MSL.
            </p>
          </div>
        </div>
      ),
    },
    mission: {
      title: "Our mission and vision",
      content: (
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To provide compassionate, high-quality care services that enhance
              the dignity, independence, and quality of life for seniors and
              individuals with chronic conditions. We are committed to
              delivering personalized care that respects individual choices and
              promotes wellbeing.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-8">
              Our Vision
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To be the leading provider of innovative care services, creating
              communities where every individual can age with grace, maintain
              their independence, and live life to the fullest. We envision a
              world where quality care is accessible to all who need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-[var(--color-primary)]/10 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-4">
                Compassion
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We approach every interaction with empathy and understanding
              </p>
            </div>
            <div className="text-center p-6 bg-[var(--color-primary)]/10 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for the highest standards in all our services
              </p>
            </div>
            <div className="text-center p-6 bg-[var(--color-primary)]/10 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously improve and adapt to meet evolving needs
              </p>
            </div>
          </div>
        </div>
      ),
    },
    leadership: {
      title: "Our leadership team",
      content: (
        <div className="space-y-12">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our experienced leadership team brings together decades of
              expertise in healthcare, senior care, and community services to
              guide our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  JD
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                John Doe
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Chief Executive Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                With over 20 years in healthcare management, John leads our
                organization with vision and compassion.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  JS
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                Jane Smith
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Director of Care Services
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Jane oversees all care operations, ensuring the highest quality
                standards across our services.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  MB
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                Michael Brown
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Chief Medical Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Dr. Brown brings extensive clinical expertise to ensure medical
                excellence in all our programs.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  SW
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                Sarah Wilson
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Head of Community Relations
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Sarah builds strong relationships with families and communities
                to expand our reach and impact.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  DL
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                David Lee
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Chief Financial Officer
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                David ensures financial sustainability while maintaining our
                commitment to accessible care.
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="w-24 h-24 bg-[var(--color-primary)]/20 dark:bg-[var(--color-primary)]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--color-secondary)] dark:text-[var(--color-primary)]">
                  ET
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-2">
                Emily Taylor
              </h3>
              <p className="text-[var(--color-secondary)]/80 dark:text-[var(--color-primary)]/80 mb-3">
                Director of Innovation
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Emily leads our technology initiatives and innovative care
                solutions for the future.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-[400px] overflow-hidden">
        <Image
          fill
          src="https://www.kew.org/sites/default/files/styles/social/public/2025-01/Nature-Unlocked-carbon-research-Jim-Holden-C-RBG-Kew-43.jpg.webp?itok=Jvs1DSii"
          alt="Nature and care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-end">
              <div className="w-full md:w-1/3 max-w-sm">
                <button
                  onClick={() => setActiveTab("history")}
                  className={`w-full py-4 px-6 text-center font-medium text-lg shadow-lg rounded-t-lg md:rounded-t-none border-t-4 transition-all duration-300 ${
                    activeTab === "history"
                      ? "bg-white text-[var(--color-secondary)] border-[var(--color-secondary)]"
                      : "bg-[var(--color-secondary)]/90 hover:bg-[var(--color-secondary)] text-white border-[var(--color-secondary)]/70"
                  }`}
                >
                  Our proud history
                </button>
              </div>

              <div className="w-full md:w-1/3 max-w-sm">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`w-full py-4 px-6 text-center text-lg transition-all duration-300 ${
                    activeTab === "mission"
                      ? "bg-white text-[var(--color-secondary)] border-t-4 border-[var(--color-secondary)]"
                      : "bg-[var(--color-secondary)]/90 hover:bg-[var(--color-secondary)] text-white"
                  }`}
                >
                  Our mission and vision
                </button>
              </div>

              <div className="w-full md:w-1/3 max-w-sm">
                <button
                  onClick={() => setActiveTab("leadership")}
                  className={`w-full py-4 px-6 text-center text-lg rounded-tr-lg md:rounded-tr-none transition-all duration-300 ${
                    activeTab === "leadership"
                      ? "bg-white text-[var(--color-secondary)] border-t-4 border-[var(--color-secondary)]"
                      : "bg-[var(--color-secondary)]/90 hover:bg-[var(--color-secondary)] text-white"
                  }`}
                >
                  Our leadership team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-[var(--color-secondary)] dark:text-[var(--color-primary)] mb-4">
              {tabContent[activeTab].title}
            </h1>
            <div className="h-1 w-24 bg-[var(--color-secondary)]/20 mx-auto rounded-full" />
          </div>

          {/* Dynamic Content */}
          <div className="transition-all duration-500 ease-in-out">
            {tabContent[activeTab].content}
          </div>
        </div>
      </main>
    </>
  );
};

export default Proud;
