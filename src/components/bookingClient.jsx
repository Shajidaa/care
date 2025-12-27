"use client";

import { handleBooking } from "@/action/service";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BookingClient = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const session = useSession();
  const [serviceCenters, setServiceCenters] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

  // Fetch service center data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/serviceCenter.json");
        const data = await response.json();
        setServiceCenters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Get unique regions
  const regions = [...new Set(serviceCenters.map((center) => center.region))];

  // Get districts by selected region
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  // Get service areas by selected district
  const serviceAreasByDistrict = (district) => {
    const districtCenter = serviceCenters.find((c) => c.district === district);
    return districtCenter ? districtCenter.covered_area : [];
  };

  // Handle region change
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedDistrict(""); // Reset district when region changes
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    console.log("Booking Details:", bookingDetails);
    if (bookingDetails.region != "Dhaka") {
      bookingDetails.cost = Number(bookingDetails.cost) + 200;
    }
    const finalCost = bookingDetails.cost;
    const finalData = {
      ...bookingDetails,
      cost: finalCost,
      serviceId: data?._id,
      serviceTitle: data?.title,
      status: "pending",
      bookedAt: new Date(),
    };
    Swal.fire({
      title: "Agree with the Cost ?",
      text: `You will be charged ${bookingDetails.cost}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //send the data to mongodb

        // const response = await handleBooking(finalData);

        // if (response.success) {
        //   Swal.fire("Success!", "Your booking has been confirmed.", "success");
        //   e.target.reset();
        // } else {
        //   Swal.fire("Error", "Something went wrong. Try again.", "error");
        // }
        // console.log(result);
        try {
          const response = await axios.post("/api/booking", finalData);

          if (response.data.success) {
            Swal.fire(
              "Success!",
              "Your booking has been confirmed.",
              "success"
            );
            e.target.reset();
          }
        } catch (error) {
          console.error("Axios Error:", error);
          Swal.fire(
            "Error",
            error.response?.data?.message || "Something went wrong",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-4h8v4z"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Book Your Service
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Experience premium care with our professional service booking
            platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Enhanced Selected Service Card */}
        {data && (
          <div className="card bg-gradient-to-r from-base-100 to-base-100/80 shadow-2xl mb-10 border border-primary/20 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="card-body relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="badge badge-primary badge-lg shadow-lg animate-pulse">
                    ✨ Selected Service
                  </div>
                  <div className="badge badge-success badge-outline">
                    Available Now
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ৳{data.cost?.toLocaleString()}
                  </div>
                  <div className="text-sm text-base-content/60 font-medium">
                    Starting Price
                  </div>
                </div>
              </div>

              <h3 className="card-title text-3xl text-primary mb-3 relative z-10">
                {data.title}
              </h3>
              <p className="text-base-content/80 text-lg leading-relaxed mb-4 relative z-10">
                {data.description}
              </p>

              <div className="flex items-center p-3 bg-info/10 rounded-lg border border-info/20 relative z-10">
                <svg
                  className="w-5 h-5 mr-3 text-info flex-shrink-0"
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
                <span className="text-sm text-base-content/70">
                  Final cost may vary based on location, duration, and specific
                  requirements
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Main Form Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm">
          <div className="card-body p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {/* Enhanced Customer Details Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-content font-bold shadow-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-base-content">
                        Customer Details
                      </h3>
                      <p className="text-sm text-base-content/60">
                        Tell us about yourself
                      </p>
                    </div>
                  </div>

                  <div className="form-control group">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Customer Name
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full focus:input-primary transition-all duration-300 group-hover:border-primary/50"
                      placeholder="Enter your full name"
                      name="name"
                      defaultValue={session.data?.user?.name || ""}
                      required
                    />
                  </div>

                  <div className="form-control group">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered w-full focus:input-primary transition-all duration-300 group-hover:border-primary/50"
                      placeholder="your@email.com"
                      name="email"
                      defaultValue={session.data?.user?.email || ""}
                      required
                    />
                  </div>

                  <div className="form-control group">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full focus:input-primary transition-all duration-300 group-hover:border-primary/50"
                      placeholder="01XXXXXXXXX"
                      name="phone"
                      required
                    />
                  </div>

                  {/* Enhanced Location Selection */}
                  <div className="space-y-6 p-6 bg-gradient-to-r from-base-200/50 to-base-300/30 rounded-xl border border-base-300/50">
                    <h4 className="font-bold text-lg text-base-content flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-secondary-content"
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
                      </div>
                      Service Location
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Region</span>
                        </label>
                        <select
                          className="select select-bordered w-full focus:select-primary transition-all duration-300"
                          value={selectedRegion}
                          name="region"
                          onChange={handleRegionChange}
                          required
                        >
                          <option value="">Choose your region</option>
                          {regions.map((region, i) => (
                            <option key={i} value={region}>
                              {region}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">
                            District
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full focus:select-primary transition-all duration-300"
                          value={selectedDistrict}
                          onChange={handleDistrictChange}
                          name="district"
                          disabled={!selectedRegion}
                          required
                        >
                          <option value="">Choose your district</option>
                          {selectedRegion &&
                            districtsByRegion(selectedRegion).map(
                              (district, i) => (
                                <option key={i} value={district}>
                                  {district}
                                </option>
                              )
                            )}
                        </select>
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Service Area
                        </span>
                      </label>
                      <select
                        className="select select-bordered w-full focus:select-primary transition-all duration-300"
                        name="serviceArea"
                        disabled={!selectedDistrict}
                        required
                      >
                        <option value="">Choose service area</option>
                        {selectedDistrict &&
                          serviceAreasByDistrict(selectedDistrict).map(
                            (area, i) => (
                              <option key={i} value={area}>
                                {area}
                              </option>
                            )
                          )}
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Detailed Address
                        </span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered w-full focus:textarea-primary transition-all duration-300 resize-none"
                        placeholder="House/Flat number, Street, Landmark..."
                        name="address"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Enhanced Service Details Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-secondary/80 rounded-full flex items-center justify-center text-secondary-content font-bold shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-base-content">
                        Service Details
                      </h3>
                      <p className="text-sm text-base-content/60">
                        Schedule and preferences
                      </p>
                    </div>
                  </div>

                  <div className="form-control group">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                        Service Cost
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        readOnly
                        className="input input-bordered w-full bg-base-200/50 font-bold text-primary"
                        name="cost"
                        value={data?.cost || 0}
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <span className="text-xs text-base-content/60">
                          BDT
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control group">
                      <label className="label">
                        <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                              d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-4h8v4z"
                            />
                          </svg>
                          Preferred Date
                        </span>
                      </label>
                      <input
                        type="date"
                        className="input input-bordered w-full focus:input-primary transition-all duration-300 group-hover:border-primary/50"
                        name="preferredDate"
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    <div className="form-control group">
                      <label className="label">
                        <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Preferred Time
                        </span>
                      </label>
                      <select
                        className="select select-bordered w-full focus:select-primary transition-all duration-300 group-hover:border-primary/50"
                        name="preferredTime"
                        required
                      >
                        <option value="">Select preferred time</option>
                        <option value="09:00">🌅 9:00 AM</option>
                        <option value="10:00">🌅 10:00 AM</option>
                        <option value="11:00">🌅 11:00 AM</option>
                        <option value="12:00">☀️ 12:00 PM</option>
                        <option value="13:00">☀️ 1:00 PM</option>
                        <option value="14:00">☀️ 2:00 PM</option>
                        <option value="15:00">🌤️ 3:00 PM</option>
                        <option value="16:00">🌤️ 4:00 PM</option>
                        <option value="17:00">🌤️ 5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-control group">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/90 flex items-center gap-2">
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
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        Additional Notes
                      </span>
                      <span className="label-text-alt text-xs opacity-70 ml-auto">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered w-full focus:textarea-primary transition-all duration-300 group-hover:border-primary/50 resize-none"
                      placeholder="Any special instructions, requirements, or preferences..."
                      name="notes"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Enhanced Pricing Info Card */}
                  <div className="card bg-gradient-to-r from-success/10 to-info/10 border border-success/20 shadow-lg">
                    <div className="card-body p-6">
                      <h4 className="font-bold text-lg text-base-content mb-4 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-success"
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
                        Pricing Information
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-base-content/70">
                            Base Service Cost:
                          </span>
                          <span className="font-bold text-primary">
                            ৳{data?.cost?.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-base-content/70">
                            Outside Dhaka Surcharge:
                          </span>
                          <span className="font-medium text-warning">
                            {selectedRegion && selectedRegion !== "Dhaka"
                              ? "+৳200"
                              : "৳0"}
                          </span>
                        </div>
                        <div className="divider my-2"></div>
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span>Estimated Total:</span>
                          <span className="text-primary">
                            ৳
                            {(
                              (data?.cost || 0) +
                              (selectedRegion && selectedRegion !== "Dhaka"
                                ? 200
                                : 0)
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-info/10 rounded-lg border border-info/20">
                        <div className="flex items-start text-xs text-base-content/70">
                          <svg
                            className="w-4 h-4 mr-2 mt-0.5 text-info flex-shrink-0"
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
                          <span>
                            Final amount will be confirmed after service
                            assessment and may vary based on actual
                            requirements.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="form-control mt-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full h-16 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 border-none"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-4h8v4z"
                    />
                  </svg>
                  Confirm Booking & Proceed
                  <svg
                    className="w-5 h-5 ml-3"
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
                </button>
              </div>

              {/* Enhanced Terms */}
              <div className="text-center p-6 bg-base-200/50 rounded-xl border border-base-300/50">
                <div className="text-sm text-base-content/70 leading-relaxed">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L4 16.586V19a1 1 0 001 1h2.414l8.586-8.586a2 2 0 000-2.828z"
                      />
                    </svg>
                    <span className="font-medium">
                      Secure & Trusted Booking
                    </span>
                  </div>
                  By confirming this booking, you agree to our{" "}
                  <a
                    href="#"
                    className="link link-primary font-medium hover:link-secondary transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="link link-primary font-medium hover:link-secondary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <br />
                  <span className="text-xs opacity-60 mt-1 block">
                    Your data is protected and will only be used for service
                    delivery purposes.
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingClient;
