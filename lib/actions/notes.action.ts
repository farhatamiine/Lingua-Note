"use server";

import prisma from "@/lib/prisma";

//Get All Notes
export async function getAllNotes() {
  const data = await prisma.notes.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
