import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`container px-5 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
