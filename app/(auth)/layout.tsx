import React, { ReactNode } from "react";

export default function Authlayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
