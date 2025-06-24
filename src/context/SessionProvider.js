"use client";
import { SessionProvider } from "@/context/SessionContext";

export default function SessionProviderInitial({ session, children }) {
  return <SessionProvider value={{...session}}>{children}</SessionProvider>;
}
