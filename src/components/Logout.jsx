"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Logout = () => {
  const session = useSession();
  console.log("session", session);

  return (
    <>
      {session.status == "authenticated" ? (
        <div className="flex items-center gap-2">
          <Link 
            className="btn btn-ghost btn-sm rounded-full font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105" 
            href={"/profile"}
          >
            Profile
          </Link>
          <button 
            onClick={() => signOut()} 
            className="btn btn-outline btn-sm rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link 
          href={"/login"} 
          className="btn btn-outline btn-primary btn-sm px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default Logout;
