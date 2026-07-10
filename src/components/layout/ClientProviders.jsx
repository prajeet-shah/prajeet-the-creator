"use client";

import { StreamProvider } from "@/context/StreamContext";

export default function ClientProviders({ children }) {
  return <StreamProvider>{children}</StreamProvider>;
}