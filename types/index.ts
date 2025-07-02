import { z } from "zod";
import { insertNoteSchema } from "./validators";
import { NoteExample } from "@prisma/client";

export type Notes = z.infer<typeof insertNoteSchema> & {
  id: string;
  examples: NoteExample[];
  createdAt: Date;
  updatedAt: Date;
};
