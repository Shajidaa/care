"use client";

import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import { postUser } from "@/action/server/auth";
const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      contactNo: form.contactNo.value,
      nid: form.nid.value,
      password: form.password.value,
      image: form.image.value,
    };

    console.log("Submitted Data:", formData);
    const result = await postUser(formData);
    if (result.acknowledged) {
      alert("successfully register done");

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });
    } else {
      return alert("something is wrong");
    }
  };

  return (
    <div className="card w-full max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your official name"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Email & NID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">NID Number</span>
              </label>
              <input
                type="number"
                name="nid"
                placeholder="0345**********"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Contact & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Contact Number</span>
              </label>
              <input
                type="tel"
                name="contactNo"
                placeholder="01XXXXXXXXX"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Profile Image URL</span>
              <span className="label-text-alt text-xs opacity-70">
                (Optional)
              </span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-medium">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
