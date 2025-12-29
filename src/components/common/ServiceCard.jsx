import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ post }) => {
  const { image, id, title, category } = post;

  return (
    <Link
      href={`/services/${id}`}
      className="w-80  bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image */}
      <figure className="relative  overflow-hidden">
        <Image
          width={400}
          height={192}
          src={image}
          alt={title}
          className="w-80 h-58 bg-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col justify-center items-center text-white rounded-t-lg">
          <h3 className="text-xl font-bold mb-4 text-center px-4">{title}</h3>
        </div>
      </figure>

      {/* Card Body */}
      <div className=" relative card-body">
        <h2 className="card-title text-lg font-bold mb-2">{category}</h2>

        <div className="absolute inset-0 bg-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col justify-center items-center text-white ">
          <button className="bottom-0  rounded-full px-6">Learn More</button>
        </div>
      </div>
      {/* Hover Overlay */}
    </Link>
  );
};

export default ServiceCard;
