"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-base font-medium transition-all duration-300 hover:text-primary group ${
        isActive ? "text-primary" : "text-base-content/80"
      } ${className}`}
    >
      {children}
      {/* Active/Hover bottom border for desktop */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
