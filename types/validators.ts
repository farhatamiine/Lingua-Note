import { z } from "zod";

export const insertNoteSchema = z.object({
  nativeText: z.string().min(2),
  learningText: z.string().min(2),
  pronunciation: z.string().optional(),
  voiceUrl: z.string().optional(),
  noteType: z.string(),
  tags: z.array(z.string()),
});

export const createAccountSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z.string().min(6),
});

export type AuthActionState = {
  email?: string;
  password?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};
