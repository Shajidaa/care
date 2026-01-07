"use client";

import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import ProfileDropdown from "../Logout";
import Logo from "./Logo";
import Container from "./Container";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-base-100/98 backdrop-blur-xl border-b border-base-300/60 shadow-lg' 
            : 'bg-base-100/95 backdrop-blur-md border-b border-base-300/30 shadow-sm'
        }`}
      >
        <Container className={`transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <div className="w-px h-6 bg-base-300/50"></div>
              <ProfileDropdown />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden mobile-menu-container">
              <button
                onClick={toggleMobileMenu}
                className={`btn btn-ghost btn-sm p-2 transition-all duration-300 hover:bg-primary/10 ${
                  isMobileMenuOpen ? 'bg-primary/10' : ''
                }`}
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span 
                    className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-base-100/98 backdrop-blur-xl border-l border-base-300/50 shadow-2xl transform transition-transform duration-300 mobile-menu-container ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-base-300/30">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-ghost btn-sm btn-circle hover:bg-error/10 hover:text-error"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-6 ">
              <div className="space-y-1">
                <MobileNavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>
               
                  Services
                </MobileNavLink>
                
                <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              
                  About
                </MobileNavLink>
                
                <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
             
                  Contact
                </MobileNavLink>
              </div>

              {/* Divider */}
              <div className="h-px bg-base-300/50"></div>

              {/* Theme Toggle in Mobile */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-base-200/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  <span className="font-medium">Theme</span>
                </div>
                <ThemeToggle />
              </div>

              {/* Divider */}
              <div className="h-px bg-base-300/50"></div>

              {/* Profile Section in Mobile */}
              <ProfileDropdown isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <NavLink href={href}>
      <div 
        onClick={onClick}
        className="flex items-center px-4  rounded-xl hover:bg-primary/10 transition-all duration-200 group"
      >
        {children}
      </div>
    </NavLink>
  );
};

export default Navbar;
