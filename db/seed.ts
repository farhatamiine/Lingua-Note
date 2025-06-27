import prisma from "@/lib/prisma";

import { notesSeed } from "./sample-data";

async function main() {
  await prisma.notes.deleteMany();
  await prisma.notes.createMany({
    data: notesSeed,
  });
  console.log("Database seeded successfully!");
}

main();
