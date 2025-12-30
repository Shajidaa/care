import Link from "next/link";

const Title = ({ description, buttonText, href }) => {
  return (
    <section className="relative overflow-hidden ">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Mobile-first responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Decorative line - responsive positioning */}
          <div className="shrink-0 order-1 lg:order-1">
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-secondary rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
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
        </div>
      </div>
    </section>
  );
};

export default Title;
