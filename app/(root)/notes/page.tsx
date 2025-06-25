"use client";

import { AddFavoriteDialog } from "@/components/shared/add-favorite-dialog";
import { FloatingActionButton } from "@/components/shared/floating-action-button";
import React, { useState } from "react";

export default function NotePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      {isDialogOpen}
      <AddFavoriteDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={() => {}}
      />

      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
    </div>
  );
}
