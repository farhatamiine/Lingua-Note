/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Notes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Notes_slug_key" ON "Notes"("slug");
