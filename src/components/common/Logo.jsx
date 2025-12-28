import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link 
        href={"/"} 
        className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
          <svg 
            className="w-5 h-5 text-white" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
        Care.io
      </Link>
    </div>
  );
};

export default Logo;
