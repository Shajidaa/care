"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { postUser } from "@/action/server/auth";
import { showSuccess, showError, showLoading, closeLoading } from "@/lib/toast";

const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

    // Show loading toast
    showLoading("Creating your account...");

    try {
      const result = await postUser(formData);
      
      if (result.acknowledged) {
        showSuccess("Registration successful! Signing you in...");

        // Auto sign in after successful registration
        const signInResult = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
          callbackUrl: "/",
        });

        closeLoading();

        if (signInResult?.error) {
          showError("Registration successful but auto-login failed. Please login manually.");
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        } else {
          // Let the session hook handle the welcome toast
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      } else {
        closeLoading();
        showError("Registration failed. Please check your information and try again.");
      }
    } catch (error) {
      closeLoading();
      showError("An unexpected error occurred. Please try again.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-8">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body space-y-8">
          <h2 className="card-title text-2xl font-bold text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    required
                    className="input input-bordered w-full pr-12"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/60 hover:text-base-content transition-colors duration-200"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
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
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full">
                Create Account
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="link link-primary font-medium">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;