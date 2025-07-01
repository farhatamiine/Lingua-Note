"use client";
import { Badge } from "@/components/ui/badge";
import { useAppNavbar } from "@/context/app-navbar-context";
import { formatted } from "@/lib/utils";
import { Notes } from "@/types";
import React, { useEffect } from "react";

export default function NoteDetails({ note }: { note: Notes }) {
  const { setTitle } = useAppNavbar();
  const title = `Note: ${note.learningText}`;

  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
  return (
    <div>
      <div className="bg-white dark:bg-transparent rounded-2xl p-6 shadow-md ">
        <div className="mb-4 space-y-1">
          <p className="text-2xl font-bold text-right">{note.learningText}</p>
          <p className="text-lg text-muted-foreground">{note.nativeText}</p>
          {note.pronunciation && (
            <p className="text-sm italic text-muted-foreground">
              Pronunciation: {note.pronunciation}
            </p>
          )}
        </div>

        {note.voiceUrl && (
          <div className="mb-4">
            <audio controls src={note.voiceUrl} className="w-full rounded" />
          </div>
        )}

        <div className="flex flex-wrap gap-2 text-sm">
          <Badge variant="outline">{note.noteType}</Badge>
          {note.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="text-xs text-muted-foreground mt-6 flex justify-between w-full ">
          <span>Created: {formatted(note.createdAt)}</span>
          <span>Last Updated: {formatted(note.updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}
