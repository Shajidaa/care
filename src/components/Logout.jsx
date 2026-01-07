"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { showSuccess, showLoading, closeLoading } from "@/lib/toast";

const ProfileDropdown = ({ isMobile = false, onClose }) => {
  const { data: session, status } = useSession();

  // Debug logging for mobile
  if (isMobile) {
    console.log('Mobile ProfileDropdown - Status:', status, 'Session:', session);
  }

  // Handle sign out with toast
  const handleSignOut = async () => {
    if (onClose) onClose();
    showLoading("Signing you out...");
    
    try {
      await signOut({ 
        redirect: true,
        callbackUrl: "/" 
      });
      
      closeLoading();
      showSuccess("Successfully signed out!");
    } catch (error) {
      closeLoading();
      console.error("Sign out error:", error);
    }
  };

  // Mobile version for the slide-out menu
  if (isMobile) {
    // Debug: Always show both states for testing
    return (
      <div className="space-y-6">
       

        {/* Show loading state */}
        {status === "loading" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-base-200/50 animate-pulse">
              <div className="w-12 h-12 rounded-full bg-base-300"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
                <div className="h-3 bg-base-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-10 bg-base-300 rounded animate-pulse"></div>
              <div className="h-10 bg-base-300 rounded animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Show authenticated user menu */}
        {(status === "authenticated" && session) && (
          <div className="space-y-4">
            {/* User Info Header */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <div className="w-12 h-12 rounded-full ring-2 ring-primary/30 overflow-hidden bg-primary/10">
                <img
                  src={session?.user?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(session?.user?.name || 'User')}&background=random`}
                  alt={session?.user?.name || "Profile"}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-base-content truncate text-sm">
                  {session?.user?.name || "User"}
                </p>
                <p className="text-xs text-base-content/60 truncate">
                  {session?.user?.email}
                </p>
              </div>
            </div>

            {/* Account Menu Items */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-base-content/70 uppercase tracking-wider px-2">
                Account
              </h3>
              
              <Link
                href="/profile"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>My Profile</span>
              </Link>

              <Link
                href="/myBookings"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>My Bookings</span>
              </Link>
            </div>
              <div className="pt-4 border-t border-base-300/50">
        
          <button
            onClick={handleSignOut}
            className="flex items-center justify-center gap-3 px-4 py-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 w-full border border-red-200 hover:border-red-300 shadow-sm hover:shadow-md active:scale-95"
          >
          
            <span>Sign Out </span>
          </button>
        </div>
          </div>
        )}


      

        {/* Show guest user options when not authenticated */}
        {status !== "authenticated" && (
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-base-content/70 uppercase tracking-wider px-2">
              Get Started
            </h3>
            <div className="space-y-3">
              <Link
                href="/login"
                onClick={onClose}
                className="btn btn-primary w-full rounded-xl font-semibold text-sm py-3 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="btn btn-outline btn-primary w-full rounded-xl font-semibold text-sm py-3 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop version
  return (
    <>
      {status === "authenticated" ? (
        <div className="dropdown dropdown-end">
          {/* Profile Avatar Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 p-1"
          >
            <div className="w-9 h-9 rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300 overflow-hidden">
              <img
                src={session?.user?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(session?.user?.name || 'User')}&background=random`}
                alt={session?.user?.name || "Profile"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100/98 backdrop-blur-xl rounded-2xl z-[100] mt-3 w-72 p-4 shadow-2xl border border-base-300/50"
          >
            {/* User Info Header */}
            <li className="mb-4 px-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-base-200/50">
                <div className="w-12 h-12 rounded-full ring-2 ring-primary/30 overflow-hidden">
                  <img
                    src={session?.user?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(session?.user?.name || 'User')}&background=random`}
                    alt={session?.user?.name || "Profile"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-base-content truncate">
                    {session?.user?.name || "User"}
                  </p>
                  <p className="text-sm text-base-content/60 truncate">
                    {session?.user?.email}
                  </p>
                </div>
              </div>
            </li>

            {/* Divider */}
            <li className="mb-2">
              <div className="h-px bg-base-300/50"></div>
            </li>

            {/* Profile Link */}
            <li className="mb-1">
              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-[1.02] active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>My Profile</span>
              </Link>
            </li>

            {/* My Bookings Link */}
            <li className="mb-3">
              <Link
                href="/myBookings"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-[1.02] active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>My Bookings</span>
              </Link>
            </li>

            {/* Divider */}
            <li className="mb-2">
              <div className="h-px bg-base-300/50"></div>
            </li>

            {/* Logout Button */}
            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-error/10 hover:text-error hover:scale-[1.02] active:scale-95 w-full text-left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className="btn btn-ghost btn-sm px-4 rounded-full font-semibold transition-all duration-300 hover:bg-primary/10 hover:text-primary"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn btn-primary btn-sm px-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
