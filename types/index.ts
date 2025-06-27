import { z } from "zod";
import { insertNoteSchema } from "./validators";

export type Notes = z.infer<typeof insertNoteSchema> & {
  id: string;
};
