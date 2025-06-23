"use client";
import Image from "next/image";
import React from "react";

import notfound from "@/assets/notfound.gif";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        src={notfound}
        height={150}
        width={150}
        unoptimized={true}
        priority={true}
        alt="loading"
      />
      <div className="p-6 text-center">
        <h1 className="text-2xl font-medium mb-4 ">Not Found</h1>
        <p className="text-destructive">Could not find the requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          <ArrowLeft /> Back to Home Page
        </Button>
      </div>
    </div>
  );
}
