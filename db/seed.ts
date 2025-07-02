import slugify from "slugify";
import { notesSeed } from "./sample-data";
import { prisma } from "@/lib/prisma";

async function main() {
  const langCode = "ar-dj";

  await prisma.noteExample.deleteMany();
  await prisma.notes.deleteMany();

  for (const note of notesSeed) {
    const slug = `${slugify(note.nativeText, {
      lower: true,
      strict: true,
    })}-${langCode}-${slugify(note.pronunciation, {
      lower: true,
      strict: true,
    })}`;

    const createdNote = await prisma.notes.create({
      data: {
        ...note,
        slug,
      },
    });

    // Add example sentences for selected notes
    switch (note.nativeText) {
      case "Comment ça va ?":
        await prisma.noteExample.create({
          data: {
            noteId: createdNote.id,
            native: "Bonjour, comment ça va ?",
            learning: "صباح الخير، كيداير؟",
            pronunciation: "sbaḥ lkhir, kidayr?",
          },
        });
        break;

      case "Merci":
        await prisma.noteExample.create({
          data: {
            noteId: createdNote.id,
            native: "Merci pour ton aide !",
            learning: "شكرا على مساعدتك!",
            pronunciation: "shukran ʿla msaʿadtk!",
          },
        });
        break;

      case "Je ne comprends pas":
        await prisma.noteExample.create({
          data: {
            noteId: createdNote.id,
            native: "Désolé, je ne comprends pas ce que tu dis.",
            learning: "سمحلي، ما فهمتش شنو كتقول.",
            pronunciation: "smeh liya, ma fhmtch shnu katqul.",
          },
        });
        break;

      case "Combien ça coûte ?":
        await prisma.noteExample.create({
          data: {
            noteId: createdNote.id,
            native: "Combien ça coûte cette robe ?",
            learning: "بشحال هاد الكسوة؟",
            pronunciation: "bshḥal had lkswa?",
          },
        });
        break;
    }
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
