"use client";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BookingClient = () => {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const session = useSession();
  const [serviceCenters, setServiceCenters] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const data = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;
  console.log(data);

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
  };
  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-base-content mb-2">Book Your Service</h1>
          <p className="text-base-content/70">Fill out the form below to schedule your service</p>
        </div>

        {/* Selected Service Card */}
        {data && (
          <div className="card bg-base-100 shadow-xl mb-8">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="badge badge-primary badge-lg">Selected Service</div>
              </div>
              <h3 className="card-title text-2xl text-primary">{data.title}</h3>
              <p className="text-base-content/70">{data.description}</p>
            </div>
          </div>
        )}

        {/* Main Form Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Customer Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-content font-bold">1</div>
                    <h3 className="text-xl font-bold text-base-content">Customer Details</h3>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Customer Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      placeholder="Enter your full name"
                      name="name"
                      defaultValue={session.data?.user?.name || ""}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Email Address</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered w-full"
                      placeholder="your@email.com"
                      name="email"
                      defaultValue={session.data?.user?.email || ""}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      className="input input-bordered w-full"
                      placeholder="01XXXXXXXXX"
                      name="phone"
                      required
                    />
                  </div>

                  {/* Location Selection */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-base-content flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Service Location
                    </h4>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Region</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
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
                        <span className="label-text font-medium">District</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        name="district"
                        disabled={!selectedRegion}
                        required
                      >
                        <option value="">Choose your district</option>
                        {selectedRegion &&
                          districtsByRegion(selectedRegion).map((district, i) => (
                            <option key={i} value={district}>
                              {district}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Service Area</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        name="serviceArea"
                        disabled={!selectedDistrict}
                        required
                      >
                        <option value="">Choose service area</option>
                        {selectedDistrict &&
                          serviceAreasByDistrict(selectedDistrict).map((area, i) => (
                            <option key={i} value={area}>
                              {area}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Detailed Address</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="House/Flat number, Street, Landmark..."
                        name="address"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Service Details Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-content font-bold">2</div>
                    <h3 className="text-xl font-bold text-base-content">Service Details</h3>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Preferred Date</span>
                    </label>
                    <input 
                      type="date" 
                      className="input input-bordered w-full" 
                      name="preferredDate" 
                      min={new Date().toISOString().split('T')[0]}
                      required 
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Preferred Time</span>
                    </label>
                    <select className="select select-bordered w-full" name="preferredTime" required>
                      <option value="">Select preferred time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Additional Notes</span>
                      <span className="label-text-alt text-xs opacity-70">(Optional)</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered w-full"
                      placeholder="Any special instructions or requirements..."
                      name="notes"
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Service Summary Card */}
                  <div className="card bg-base-200 border border-base-300">
                    <div className="card-body p-4">
                      <h4 className="font-semibold text-base-content mb-2">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-base-content/70">Service:</span>
                          <span className="font-medium">{data?.title || 'Selected Service'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-base-content/70">Location:</span>
                          <span className="font-medium">
                            {selectedRegion && selectedDistrict 
                              ? `${selectedDistrict}, ${selectedRegion}` 
                              : 'Not selected'}
                          </span>
                        </div>
                        <div className="divider my-2"></div>
                        <div className="flex justify-between font-semibold">
                          <span>Status:</span>
                          <span className="badge badge-warning">Pending Confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-4h8v4z" />
                  </svg>
                  Confirm Booking
                </button>
              </div>

              {/* Terms */}
              <div className="text-center text-sm text-base-content/60">
                By booking this service, you agree to our{" "}
                <a href="#" className="link link-primary">Terms of Service</a> and{" "}
                <a href="#" className="link link-primary">Privacy Policy</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingClient;
