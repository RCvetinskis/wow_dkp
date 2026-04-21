/*
  Warnings:

  - Added the required column `guildMasterId` to the `Guild` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GuildRank" AS ENUM ('GUILD_MASTER', 'GUILD_OFFICER', 'RECRUITER', 'CORE_RAIDER', 'RAIDER');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "guildRank" "GuildRank" NOT NULL DEFAULT 'RAIDER';

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "description" TEXT,
ADD COLUMN     "guildMasterId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Guild" ADD CONSTRAINT "Guild_guildMasterId_fkey" FOREIGN KEY ("guildMasterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
