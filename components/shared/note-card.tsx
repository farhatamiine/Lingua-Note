import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Notes } from "@/lib/generated/prisma";

interface NoteProps {
  note: Notes;
}

export default function NoteCard({ note }: NoteProps) {
  const { learningText, nativeText, pronunciation, voiceUrl, noteType, tags } =
    note;
  return (
    <Card className="shadow-sm mb-2 w-full">
      <CardContent className="pt-4 space-y-2">
        <div className="flex w-full flex-col">
          <div>
            <p className="text-lg font-semibold text-right">{learningText}</p>
            <p className="text-sm text-muted-foreground">{nativeText}</p>
            {pronunciation && (
              <p className="text-xs italic text-muted-foreground">
                Prononciation: {pronunciation}
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
