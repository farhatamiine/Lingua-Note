// scripts/seed.ts
import slugify from "slugify";
import { notesSeed } from "./sample-data";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
const userId = "9642eb03-152b-4101-a587-3c3919d486cf"; // Replace with your actual Supabase user id
const langCode = "ar-dj";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
async function main() {
  // Optional: clean old data
  await supabase.from("NoteExample").delete();
  await supabase.from("Notes").delete();

  for (const note of notesSeed) {
    const slug = `${slugify(note.nativeText, {
      lower: true,
      strict: true,
    })}-${langCode}-${slugify(note.pronunciation ?? "", {
      lower: true,
      strict: true,
    })}`;

    const { data: noteData, error: insertError } = await supabase
      .from("Notes")
      .insert([
        {
          ...note,
          user_id: userId,
          slug,
          updatedAt: new Date(), // ✅ Add this
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Failed to insert note:", note.nativeText);
      console.error(
        "→",
        insertError.message,
        insertError.details,
        insertError.hint
      );
    }
    // Insert examples based on the nativeText
    let example: {
      native: string;
      learning: string;
      pronunciation: string;
    } | null = null;

    switch (note.nativeText) {
      case "Comment ça va ?":
        example = {
          native: "Bonjour, comment ça va ?",
          learning: "صباح الخير، كيداير؟",
          pronunciation: "sbaḥ lkhir, kidayr?",
        };
        break;
      case "Merci":
        example = {
          native: "Merci pour ton aide !",
          learning: "شكرا على مساعدتك!",
          pronunciation: "shukran ʿla msaʿadtk!",
        };
        break;
      case "Je ne comprends pas":
        example = {
          native: "Désolé, je ne comprends pas ce que tu dis.",
          learning: "سمحلي، ما فهمتش شنو كتقول.",
          pronunciation: "smeh liya, ma fhmtch shnu katqul.",
        };
        break;
      case "Combien ça coûte ?":
        example = {
          native: "Combien ça coûte cette robe ?",
          learning: "بشحال هاد الكسوة؟",
          pronunciation: "bshḥal had lkswa?",
        };
        break;
    }

    if (example) {
      const { error: exErr } = await supabase.from("NoteExample").insert([
        {
          noteId: noteData.id,
          native: example.native,
          learning: example.learning,
          pronunciation: example.pronunciation,
          updatedAt: new Date(), // ✅ Add this
        },
      ]);

      if (exErr) {
        console.error(`Failed to add example for ${note.nativeText}`, exErr);
      }
    }
  }

  console.log("✅ Supabase seeded successfully.");
}

main().catch((err) => console.error(err));
