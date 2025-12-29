"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const ProfileDropdown = () => {
  const { data: session, status } = useSession();

  // Generate avatar from user's name or email
  const getAvatarUrl = (user) => {
    if (user?.image) return user.image;
  };

  return (
    <>
      {status === "authenticated" ? (
        <div className="dropdown dropdown-end">
          {/* Profile Avatar Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <div className="w-10 h-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
              <img
                src={session?.user?.image}
                alt={session?.user?.name || "Profile"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100/95 backdrop-blur-md rounded-2xl z-[1] mt-3 w-64 p-4 shadow-2xl border border-base-300/50 animate-in slide-in-from-top-2 duration-200"
          >
            {/* User Info Header */}
            <li className="mb-3 px-2">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-base-200/50">
                <div className="w-12 h-12 rounded-full ring-2 ring-primary/30">
                  <img
                    src={session?.user?.image}
                    alt={session?.user?.name || "Profile"}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-base-content truncate">
                    {session?.user?.name || "User"}
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
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
                <span>My Profile</span>
              </Link>
            </li>

            {/* My Bookings Link */}
            <li className="mb-1">
              <Link
                href="/myBookings"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>My Bookings</span>
              </Link>
            </li>

            {/* Settings Link */}
            {/* <li className="mb-3">
              <Link
                href="/settings"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Settings</span>
              </Link>
            </li> */}

            {/* Divider */}
            <li className="mb-2">
              <div className="h-px bg-base-300/50"></div>
            </li>

            {/* Logout Button */}
            <li>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-error/10 hover:text-error hover:scale-105 w-full text-left"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="btn btn-outline btn-primary btn-sm px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn btn-outline btn-primary btn-sm px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Register
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileDropdown;
