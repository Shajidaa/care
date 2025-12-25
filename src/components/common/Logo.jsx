import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="text-2xl font-bold">
        Care.io
      </Link>
    </div>
  );
};

export default Logo;
