import Link from "next/link";
import Container from "@/components/common/Container";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Page Not Found
          </h2>
          <p className="text-lg text-base-content/70 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="btn btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn btn-outline px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-base-300">
          <p className="text-sm text-base-content/60 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/services" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Our Services
            </Link>
            <Link 
              href="/about" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-primary hover:text-primary/80 transition-colors underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}