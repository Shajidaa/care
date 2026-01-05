"use client";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { showSuccess, showInfo } from "@/lib/toast";

export const useSessionToast = () => {
  const { data: session, status } = useSession();
  const previousStatus = useRef(status);
  const hasShownWelcome = useRef(false);

  useEffect(() => {
    // Show welcome toast when user signs in
    if (
      previousStatus.current === "unauthenticated" && 
      status === "authenticated" && 
      session?.user && 
      !hasShownWelcome.current
    ) {
      const userName = session.user.name || session.user.email || "User";
      showSuccess(`Welcome back, ${userName}!`);
      hasShownWelcome.current = true;
    }

    // Show goodbye toast when user signs out
    if (
      previousStatus.current === "authenticated" && 
      status === "unauthenticated"
    ) {
      showInfo("You have been signed out successfully");
      hasShownWelcome.current = false;
    }

    previousStatus.current = status;
  }, [status, session]);

  return { session, status };
};