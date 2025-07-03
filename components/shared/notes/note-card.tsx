"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useRouter } from "next/navigation";
import { Notes } from "@prisma/client";

interface NoteProps {
  note: Notes;
}

export default function NoteCard({ note }: NoteProps) {
  const {
    learningText,
    nativeText,
    pronunciation,
    voiceUrl,
    noteType,
    tags,
    slug,
  } = note;

  const router = useRouter();

  const handleNoteClick = () => {
    router.push(`/notes/${slug}`); // Change this to `/notes/${note.slug}` if you're using slugs
  };

  return (
    <Card
      data-testid="note-card"
      onClick={handleNoteClick}
      className="shadow-sm mb-2 w-full cursor-pointer transition-all hover:shadow-md hover:bg-muted active:scale-[0.98] active:opacity-90"
    >
      <CardContent className="pt-4 space-y-2">
        <div className="flex w-full flex-col">
          <div>
            <p className="text-lg font-semibold text-right">{learningText}</p>
            <p className="text-sm text-muted-foreground">{nativeText}</p>
            {pronunciation && (
              <p className="text-xs italic text-muted-foreground">
                Pronunciation: {pronunciation}
              </p>
            )}
          </div>

          {voiceUrl && <audio controls src={voiceUrl} className="w-28" />}
        </div>

        <div className="flex flex-wrap gap-1 text-xs">
          <Badge variant="outline">{noteType}</Badge>
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
