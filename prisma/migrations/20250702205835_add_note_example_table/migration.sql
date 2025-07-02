-- CreateTable
CREATE TABLE "Notes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nativeText" TEXT NOT NULL,
    "learningText" TEXT NOT NULL,
    "pronunciation" TEXT,
    "voiceUrl" TEXT,
    "noteType" TEXT NOT NULL,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "lastReviewedAt" TIMESTAMP(3),
    "nextReviewAt" TIMESTAMP(3),
    "ease" INTEGER,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteExample" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "noteId" UUID NOT NULL,
    "native" TEXT NOT NULL,
    "learning" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NoteExample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notes_slug_key" ON "Notes"("slug");

-- AddForeignKey
ALTER TABLE "NoteExample" ADD CONSTRAINT "NoteExample_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Notes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
