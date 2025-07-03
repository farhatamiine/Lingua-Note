import NoteView from "@/components/shared/notes/notes-view";
import { getAllNotes } from "@/lib/actions/notes.action";

export default async function NotePage() {
  const notes = await getAllNotes();

  return (
    <section>
      <NoteView notes={notes} />
    </section>
  );
}
