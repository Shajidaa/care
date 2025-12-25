import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ post }) => {
  const { image, id, title, category } = post;

  return (
    <Link
      href={`/services/${id}`}
      className=" border  w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <figure className="relative">
        <Image
          width={400}
          height={192}
          src={image}
          alt={title}
          className="w-80 h-58 bg-cover "
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold mb-2">{category}</h2>
      </div>
    </Link>
  );
};

export default ServiceCard;
