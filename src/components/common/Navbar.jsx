"use client";

import Link from "next/link";
import React from "react";

import NavLink from "./NavLink";
import ProfileDropdown from "../Logout";
import Logo from "./Logo";
import Container from "./Container";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-md border-b border-base-300/50 shadow-sm">
      <Container className="navbar  py-4">
        <div className="navbar-start">
          {/* Mobile menu button */}
          <div className="dropdown border">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-primary/10 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-2xl z-[1] mt-3 w-56 p-3 shadow-xl border border-base-300/50"
            >
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <ThemeToggle />

              <ProfileDropdown />
            </ul>
          </div>
          <Logo />
        </div>

        {/* Desktop navigation */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-6">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Right side */}
        <div className="navbar-end hidden lg:flex gap-2">
          <ThemeToggle />

          <ProfileDropdown />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
