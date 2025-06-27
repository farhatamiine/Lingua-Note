import NoteView from "@/components/shared/notes-view";
import { getAllNotes } from "@/lib/actions/notes.action";

export default async function NotePage() {
  const notes = await getAllNotes();

  return (
    <div>
      <NoteView notes={notes} />
    </div>
  );
}
