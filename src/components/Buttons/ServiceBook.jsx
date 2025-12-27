"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ServiceBook = ({ id, data }) => {
  const router = useRouter();
  const handleClick = () => {
    // Convert object to JSON string for URL
    const dataString = encodeURIComponent(JSON.stringify(data));

    // Pass data as query parameter
    router.push(`/booking/${id}?data=${dataString}`);
  };
  return (
    <button onClick={handleClick} className="btn btn-primary btn-lg flex-1">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Book This Service
    </button>
  );
};

export default ServiceBook;
