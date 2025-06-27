"use client";

import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

//import VoiceRecorder from "@/components/shared/voice-recorder";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface AddFavoriteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (favorite: {
    title: string;
    description: string;
    type: string;
  }) => void;
}

export function AddFavoriteDialog({
  isOpen,
  onClose,
  onAdd,
}: AddFavoriteDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedType, setSelectedType] = useState("note");
  //const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({
        title: title.trim(),
        description: description.trim(),
        type: selectedType,
      });
      setTitle("");
      setDescription("");
      setSelectedType("note");
      onClose();
    }
  };

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

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="native_text">Texte en français</Label>
            <Input id="native_text" placeholder="Texte en français" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="learning_text">Traduction en darija</Label>
            <Textarea
              id="learning_text"
              name="learning_text"
              placeholder="Traduction en darija"
            />
          </div>
          <div className="space-y-2">
            <Label>Note type</Label>
            <Select name="note_type">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Note type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="word">Word</SelectItem>
                <SelectItem value="phrase">Phrase</SelectItem>
                <SelectItem value="expression">Expression</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tag</Label>
            <Input placeholder="Enter a tag" />
          </div>

          <div className="space-y-2">
            <Label className="">
              Record Audio :{" "}
              <span className="font-light text-gray-700">{status}</span>
            </Label>
            {/**<VoiceRecorder onUpload={() => {}} setStatus={setStatus} />**/}
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Add Notes
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
