import NoteDetails from "@/components/shared/notes/note-details";
import { getNoteDetails } from "@/lib/actions/notes.action";
import { notFound } from "next/navigation";
import React from "react";

export default async function NoteDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const note = await getNoteDetails(slug);

  if (!note) {
    return notFound();
  }

  return (
    <div>
      <NoteDetails
        note={{
          ...note,
          pronunciation: note.pronunciation ?? undefined,
          voiceUrl: note.voiceUrl ?? undefined,
        }}
      />
    </div>
  );
}
