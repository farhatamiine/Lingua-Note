"use client";

import { AddFavoriteDialog } from "@/components/shared/add-favorite-dialog";
import { FloatingActionButton } from "@/components/shared/floating-action-button";
import NotesList from "@/components/shared/notes/notes-list";
import { Notes } from "@/lib/generated/prisma";
import React, { useState } from "react";

interface NoteViewProps {
  notes: Notes[];
}

export default function NoteView({ notes }: NoteViewProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      {isDialogOpen}
      <AddFavoriteDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={() => {}}
      />
      <NotesList notes={notes} />
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
    </div>
  );
}
