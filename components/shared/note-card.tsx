import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface NoteProps {
  note: {
    nativeText: string;
    learningText: string;
    pronunciation?: string;
    voiceUrl?: string;
    noteType: string;
    tags: string[];
  };
}

export default function NoteCard({ note }: NoteProps) {
  const { learningText, nativeText, pronunciation, voiceUrl, noteType, tags } =
    note;
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg font-semibold">{learningText}</p>
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
