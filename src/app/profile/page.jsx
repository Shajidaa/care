"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import Title from "@/components/Title";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    nid: "",
    image: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",

        image: session.user.image || "",
      });
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-200/30 pt-24 pb-12">
      <Container className="px-4">
        <div className="max-w-4xl mx-auto">
          <Title>My Profile</Title>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="avatar">
                    <div className="w-32 h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={formData.image || "/default-avatar.png"}
                        alt={formData.name}
                        className="rounded-full object-cover "
                        readonly
                      />
                    </div>
                  </div>
                  <h2 className="card-title text-2xl mt-4">{formData.name}</h2>
                  <p className="text-base-content/70">{formData.email}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                  <h3 className="card-title text-lg">Account Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base-content/70">Member Since</span>
                      <span className="font-medium">Jan 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base-content/70">
                        Total Bookings
                      </span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base-content/70">Status</span>
                      <div className="badge badge-success">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="card-title text-xl">Personal Information</h3>
                  </div>

                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className={`input input-bordered w-full `}
                      required
                      readonly
                    />
                  </div>

                  {/* Email & NID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">
                          Email Address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className={`input input-bordered w-full `}
                        required
                        readonly
                      />
                    </div>
                  </div>

                  {/* Profile Image URL */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Profile Image URL
                      </span>
                      <span className="label-text-alt text-xs opacity-70">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      className={`input input-bordered w-full `}
                      readonly
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;
