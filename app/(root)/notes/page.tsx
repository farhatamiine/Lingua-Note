"use client";

import { FloatingActionButton } from "@/components/shared/floating-action-button";
import React, { useState } from "react";

export default function NotePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      {isDialogOpen}
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
    </div>
  );
}
