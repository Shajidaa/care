import React from "react";

const SubBanner = ({
  image,
  brand = "Care",
  page,
  title,
  description,
  height = "h-[400px] md:h-[500px]",
  showScroll = true,
}) => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className={`relative ${height} w-full overflow-hidden`}>
        <img
          src="https://i.ibb.co.com/PsHXfGKT/mother-holding-her-small-baby-260nw-2490288401.jpg"
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 dark:opacity-70 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 dark:to-black/60" />
      </div>

      {/* Content Card */}
      <div className="absolute inset-0 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-4 right-4 bottom-8 md:left-8 md:bottom-[-3rem] md:w-[500px] lg:w-[600px] z-10">
          <div className="bg-white dark:bg-gray-800 shadow-xl rounded-t-lg overflow-hidden transition-colors duration-300">
            <div className="p-8 md:p-10 lg:p-12">
              {/* Breadcrumb */}
              <nav className="flex items-center text-sm mb-4 font-medium">
                <span className="text-purple-700 dark:text-purple-300">
                  {brand}
                </span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-teal-500">{page}</span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 dark:text-white mb-6 leading-tight">
                {title}
              </h1>

              {/* Description */}
              {description && (
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* Accent Bar */}
            <div className="h-1.5 w-full bg-teal-500" />
          </div>
        </div>

        {/* Scroll Button */}
        {showScroll && (
          <div className="absolute right-8 bottom-[-1.5rem] md:right-20 md:bottom-[-2rem] z-20">
            <button
              aria-label="Scroll down"
              className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 transition focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              <span className="material-icons text-white text-2xl md:text-3xl">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubBanner;
