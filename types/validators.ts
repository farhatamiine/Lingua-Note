import { z } from "zod";

// Schema for inserting notes

export const insertNoteSchema = z.object({
  nativeText: z.string().min(2),
  learningText: z.string().min(2),
  pronunciation: z.string().optional(),
  voiceUrl: z.string().optional(),
  noteType: z.string(),
  tags: z.array(z.string()),
});
