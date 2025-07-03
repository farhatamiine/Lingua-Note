import React from "react";
import NoteCard from "./note-card";
import { Book } from "lucide-react";
import { Notes } from "@prisma/client";

interface NotesListProps {
  notes: Notes[];
}

export default function NotesList({ notes }: NotesListProps) {
  return (
    <div
      className={
        notes.length === 0
          ? "h-screen flex items-center justify-center"
          : "mt-5"
      }
    >
      {notes.length > 0 ? (
        <div className="mx-2">
          {notes.map((note) => (
            <NoteCard note={note} key={note.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  rounded-xl py-10 px-6 text-center">
          <Book className="text-gray-700 dark:text-gray-200 mb-3" size={40} />
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Aucune note pour le moment
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">
            Ajoutez une nouvelle note pour commencer à apprendre.
          </p>
        </div>
      )}
    </div>
  );
}
