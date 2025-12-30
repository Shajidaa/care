import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import Link from "next/link";
import ServiceBook from "@/components/Buttons/ServiceBook";

async function getService(id) {
  try {
    const response = await fetch(`${"http://localhost:3000"}/services.json`);
    const services = await response.json();
    return services.find((service) => service.id === parseInt(id));
  } catch (error) {}
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    notFound();
  }

  const {
    image,
    title,
    description,
    category,
    features,
    availability,
    staff_qualification,
    cost,
  } = service;

  return (
    <div className="min-h-screen pt-15 bg-base-200">
      <Container className="py-8">
        {/* Breadcrumb */}
        <div className="breadcrumbs text-sm mb-6">
          <ul>
            <li>
              <Link href="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="link link-hover">
                Services
              </Link>
            </li>
            <li className="opacity-70">{title}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-11/12 object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="badge badge-primary badge-lg font-medium">
                  {category}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-base-content mb-4">
                {title}
              </h1>
              <p className="text-base-content/80 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Service Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    Availability
                  </h3>
                  <p className="text-sm">{availability}</p>
                </div>
              </div>
              <div className="card bg-base-100 shadow-md">
                <div className="card-body p-4">
                  <h3 className="font-semibold text-primary mb-2">
                    Staff Qualification
                  </h3>
                  <p className="text-sm">{staff_qualification}</p>
                </div>
              </div>
            </div>

            {/* Cost Card */}
            <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-lg">
              <div className="card-body p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">
                      Service Cost
                    </h3>
                    <p className="text-base-content/70 text-sm">
                      Starting price for this service
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      ৳{cost}
                    </div>
                    <div className="text-sm text-base-content/60">
                      per service
                    </div>
                  </div>
                </div>
                <div className="divider my-2"></div>
                <div className="flex items-center text-sm text-base-content/70">
                  <svg
                    className="w-4 h-4 mr-2 text-info"
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
                  Final cost may vary based on specific requirements and
                  duration
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ServiceBook id={id} data={service}></ServiceBook>
              <button className="btn  btn-outline btn-lg">
                <svg
                  className="w-5 h-5 mr-2"
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
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="card bg-base-100 mt-5 shadow-md">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">Service Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-success mt-0.5 mr-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base-content/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Additional Information */}
        <div className="mt-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                Why Choose Our {category} Service?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">
                    Certified Professionals
                  </h3>
                  <p className="text-sm text-base-content/70">
                    All our staff are fully certified and background-checked
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-base-content/70">
                    Available when you need us most
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Compassionate Care</h3>
                  <p className="text-sm text-base-content/70">
                    We treat every client like family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
