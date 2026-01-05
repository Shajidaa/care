"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import SessionToastProvider from "@/components/SessionToastProvider";

const NextAuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <SessionToastProvider>
        {children}
      </SessionToastProvider>
    </SessionProvider>
  );
};

export default NextAuthProvider;
