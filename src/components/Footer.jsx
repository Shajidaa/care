import React from "react";
import Link from "next/link";
import Container from "./common/Container";
import Logo from "./common/Logo";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-base-300 to-base-200 bottom-0 border-t border-base-300/50">
      {/* Main Footer Content */}
      <Container className="px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo></Logo>

            <p className="text-base-content/70 leading-relaxed">
              Professional, compassionate care services for your loved ones. We
              provide quality care with dignity, respect, and genuine
              compassion.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-base-content/70">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 text-base-content/70">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+880 1XXX-XXXXXX</span>
              </div>

              <div className="flex items-center gap-3 text-base-content/70">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@careservices.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-base-content flex items-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Quick Links
            </h4>

            <nav className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Book Service", href: "/services" },
                { name: "Emergency Care", href: "/emergency" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base-content/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-base-content flex items-center gap-2">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Our Services
            </h4>

            <nav className="space-y-3">
              {[
                { name: "Baby Care", href: "/services/1" },
                { name: "Elderly Care", href: "/services/2" },
                { name: "Patient Care", href: "/services/3" },
                { name: "Home Nursing", href: "/services" },
                { name: "Companion Care", href: "/services" },
                { name: "Respite Care", href: "/services" },
              ].map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-base-content/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-base-content flex items-center gap-2">
              <svg
                className="w-5 h-5 text-info"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Stay Connected
            </h4>

            <div className="space-y-4">
              <p className="text-base-content/70 text-sm">
                Subscribe to our newsletter for care tips and updates.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered input-sm flex-1 focus:input-primary"
                />
                <button className="btn btn-primary btn-sm px-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Social Media Links */}
             <div className="space-y-3">
              <div className="uppercase text-sky-600 dark:text-sky-400">
                Follow Us
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61564677698432"
                  title="Facebook"
                  target="blank"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/Shajidadev"
                  title="Twitter"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/Shajidaa"
                  title="github"
                  target="blank"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/shajida-akter-lopa-42660b325"
                  target="blank"
                  title="LinkedIn"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            

            {/* Certifications */}
            <div className="space-y-3">
              <h5 className="font-semibold text-base-content">
                Certifications
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-sm">Licensed</span>
                <span className="badge badge-secondary badge-sm">Insured</span>
                <span className="badge badge-accent badge-sm">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-base-300/50 bg-base-300/30">
        <Container className="px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-base-content/70 text-sm">
              © {currentYear} Care Services. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-base-content/70 hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
            </div>

            <div className="flex items-center gap-2 text-base-content/70 text-sm">
              <span>Made with</span>
              <svg
                className="w-4 h-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>in Bangladesh</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
