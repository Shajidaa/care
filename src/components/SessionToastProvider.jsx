"use client";
import { useSessionToast } from "@/hooks/useSessionToast";

const SessionToastProvider = ({ children }) => {
  useSessionToast();
  return <>{children}</>;
};

export default SessionToastProvider;