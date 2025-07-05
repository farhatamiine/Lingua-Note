"use server";

import { prisma } from "@/lib/prisma";
import { createClient } from "../supabase/server";

//Get All Notes
export async function getAllNotes() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: notes, error } = await supabase
    .from("Notes")
    .select("*")
    .eq("user_id", user?.id);

  if (error) {
    console.error("Error fetching todos:", error.message);
    return [];
  }

  console.log("Notes :", notes);

  return notes;
}

export async function saveNote() {}

export async function getNoteDetails(slug: string) {
  const data = await prisma.notes.findFirst({
    where: {
      slug: slug,
    },
    include: {
      examples: true,
    },
  });
  return data;
}
