import React from "react";

const CommonTitle = ({ heading, className, des }) => {
  return (
    <div className={`text-center pt-5 mb-12 animate-fade-in ${className}`}>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
        {heading}
      </h1>
      <p className="text-lg text-base-content/70 max-w-2xl mx-auto">{des}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default CommonTitle;
