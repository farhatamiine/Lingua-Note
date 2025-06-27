import prisma from "@/lib/prisma";
import slugify from "slugify";

import { notesSeed } from "./sample-data";

async function main() {
  const langCode = "ar-dj";

  await prisma.notes.deleteMany();
  for (const note of notesSeed) {
    const slug = `${slugify(note.nativeText, {
      lower: true,
      strict: true,
    })}-${langCode}-${slugify(note.pronunciation, {
      lower: true,
      strict: true,
    })}`;
    console.log(slug);

    await prisma.notes.create({
      data: {
        ...note,
        slug,
      },
    });
  }
  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
