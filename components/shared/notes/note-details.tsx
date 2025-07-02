"use client";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAppNavbar } from "@/context/app-navbar-context";
import { formatted } from "@/lib/utils";
import { Notes } from "@/types";
import { NoteExample } from "@prisma/client";
import React, { useEffect } from "react";

export default function NoteDetails({ note }: { note: Notes }) {
  const { setTitle } = useAppNavbar();
  const title = `${note.learningText}`;

  console.log(note.examples);

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
        <Separator className="my-4" />
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Examples
          </h2>

          {note.examples && note.examples.length > 0 ? (
            <div className="space-y-2">
              {note.examples.map((noteExample: NoteExample) => (
                <div
                  key={noteExample.id}
                  className="rounded-xl border p-4 bg-muted/40 shadow-sm transition hover:shadow-md"
                >
                  <div className="text-sm text-muted-foreground">Native:</div>
                  <p className="font-medium">{noteExample.native}</p>

                  <div className="text-sm text-muted-foreground mt-2">
                    Learning:
                  </div>
                  <p className="font-medium text-right">
                    {noteExample.learning}
                  </p>

                  <div className="text-sm text-muted-foreground mt-2 italic text-left">
                    {noteExample.pronunciation}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No examples available.
            </p>
          )}
        </div>

        <div className="text-xs text-muted-foreground mt-6 flex justify-between w-full ">
          <span>Created: {formatted(note.createdAt)}</span>
          <span>Last Updated: {formatted(note.updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}
