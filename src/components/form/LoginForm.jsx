"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { showError, showLoading, closeLoading } from "@/lib/toast";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // Show loading toast
    showLoading("Signing you in...");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl:
          new URLSearchParams(window.location.search).get("callbackUrl") || "/",
      });

      closeLoading();

      if (result?.error) {
        showError("Login failed: " + result.error);
      } else {
        // Let the session hook handle the success toast
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = result.url || "/";
        }, 500);
      }
    } catch (error) {
      closeLoading();
      showError("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-8">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body space-y-6">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full pr-12"
                  required
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

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link href={`/register`} className="link link-primary">
              Register
            </Link>
           
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
