import Link from "next/link";

const Title = ({ description, buttonText, href }) => {
  return (
    <section className="relative overflow-hidden ">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Mobile-first responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Decorative line - responsive positioning */}
          <div className="shrink-0 order-1 lg:order-1">
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
          </div>

          {/* Description text - responsive typography */}
          <div className="flex-1 order-2 lg:order-2">
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium leading-relaxed text-base-content/80 dark:text-base-content/90 tracking-wide">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                {description?.split(" ").slice(0, 2).join(" ")}
              </span>
              {description?.split(" ").length > 2 && (
                <span className="ml-1">
                  {description.split(" ").slice(2).join(" ")}
                </span>
              )}
            </p>
          </div>

          {/* CTA Button - responsive sizing */}
          <div className="shrink-0 order-3 lg:order-3 w-full sm:w-auto">
            <Link
              href={href}
              className="group inline-flex items-center hover:bg-secondary justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-primary  rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/25"
            >
              <span className="mr-2">{buttonText}</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
