import Link from "next/link";
import React from "react";

const CommonBtn = ({ href, buttonText }) => {
  return (
    <div className="shrink-0 order-3 lg:order-3 w-full sm:w-auto">
      <Link
        href={href}
        className="group inline-flex items-center hover:bg-secondary justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-primary  rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/25"
      >
        <span className="mr-2">{buttonText}</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
      </Link>
    </div>
  );
};

export default CommonBtn;
