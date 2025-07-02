"use client";

import type React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddNoteForm from "../add-note-form";

interface AddNewNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (favorite: {
    title: string;
    description: string;
    type: string;
  }) => void;
}

export function AddNewNoteDialog({ isOpen, onClose }: AddNewNoteDialogProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 bg-background rounded-lg border shadow-lg max-w-md mx-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Add Notes</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <AddNoteForm />
      </div>
    </>
  );
}
