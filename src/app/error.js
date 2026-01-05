"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="min-h-screen py-25 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        {/* Error Icon */}
        <div className="relative">
          <div className="text-8xl md:text-9xl font-bold text-error/20 select-none">
            ⚠️
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-error to-warning rounded-full"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Something went wrong!
          </h2>
          <p className="text-lg text-base-content/70 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
          </p>
          
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="btn btn-outline px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Return Home
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-base-300">
          <p className="text-sm text-base-content/60 mb-4">
            Need help? Try these:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Contact Support
            </Link>
            <Link 
              href="/services" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Our Services
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}