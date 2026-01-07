import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        href={"/"}
        className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
      >
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <svg 
              className="w-5 h-5 text-white" 
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
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <span className="">Care.io</span>
      </Link>
    </div>
  );
};

export default Logo;
