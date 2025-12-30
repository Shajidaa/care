import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        href={"/"}
        className="text-2xl font-bold bg-primary  bg-clip-text text-transparent hover:scale-105 transition-all duration-300 flex items-center gap-2"
      >
        Care.io
      </Link>
    </div>
  );
};

export default Logo;
