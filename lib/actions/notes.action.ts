"use server";

import prisma from "@/lib/prisma";

//Get All Notes
export async function getAllNotes() {
  const data = await prisma.notes.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export async function saveNote() {}
