"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import dynamic from "next/dynamic";

const VoiceRecorder = dynamic(
  () => import("@/components/shared/voice-recorder"),
  {
    ssr: false,
  }
);

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function AddNoteForm() {
  const [status, setStatus] = useState("");
  return (
    <form className="p-4 space-y-4">
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
        <VoiceRecorder onUpload={() => {}} setStatus={setStatus} />
      </div>
      <div className="flex gap-2 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {}}
          className="flex-1"
        >
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          Add Notes
        </Button>
      </div>
    </form>
  );
}
