/*
  Warnings:

  - Added the required column `class` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spec` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Guild` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Expansion" AS ENUM ('WRATH_OF_THE_LICH_KING');

-- CreateEnum
CREATE TYPE "Class" AS ENUM ('WARRIOR', 'PALADIN', 'HUNTER', 'ROGUE', 'PRIEST', 'DEATH_KNIGHT', 'SHAMAN', 'MAGE', 'WARLOCK', 'DRUID');

-- CreateEnum
CREATE TYPE "Specialization" AS ENUM ('ARMS', 'FURY', 'PROTECTION_WARRIOR', 'HOLY_PALADIN', 'PROTECTION_PALADIN', 'RETRIBUTION', 'BEAST_MASTERY', 'MARKSMANSHIP', 'SURVIVAL', 'ASSASSINATION', 'COMBAT', 'SUBTLETY', 'DISCIPLINE', 'HOLY_PRIEST', 'SHADOW', 'BLOOD', 'FROST_DK', 'UNHOLY', 'ELEMENTAL', 'ENHANCEMENT', 'RESTORATION_SHAMAN', 'ARCANE', 'FIRE', 'FROST_MAGE', 'AFFLICTION', 'DEMONOLOGY', 'DESTRUCTION', 'BALANCE', 'FERAL_DPS', 'FERAL_TANK', 'RESTORATION_DRUID');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "class" "Class" NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gearscore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "spec" "Specialization" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
