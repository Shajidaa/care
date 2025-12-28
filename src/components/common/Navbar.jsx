import Link from "next/link";
import React from "react";
import Logout from "../Logout";
import Logo from "./Logo";
import Container from "./Container";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const links = (
    <>
      <Link 
        href={"/services"} 
        className="relative px-4 py-2 text-base font-medium transition-all duration-300 hover:text-primary hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      >
        Services
      </Link>
    </>
  );

  return (
    <div className="bg-base-100/95 backdrop-blur-md sticky z-50 top-0 right-0 left-0 border-b border-base-300/50">
      <Container className="navbar py-4">
        <div className="navbar-start">
          {/* Mobile menu button with enhanced styling */}
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-2xl z-[1] mt-3 w-56 p-3 shadow-xl border border-base-300/50 animate-in slide-in-from-top-2 duration-200"
            >
              <li className="mb-1">
                <Link 
                  href={"/services"} 
                  className="rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <Logo />
        </div>

        {/* Desktop navigation with enhanced styling */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>{links}</li>
          </ul>
        </div>

        {/* Right side with enhanced button styling */}
        <div className="navbar-end gap-2">
          <ThemeToggle />
          <Link 
            className="btn btn-primary btn-sm px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25" 
            href={"/register"}
          >
            Register
          </Link>
          <Logout />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
