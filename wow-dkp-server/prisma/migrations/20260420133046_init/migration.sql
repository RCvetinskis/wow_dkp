-- CreateEnum
CREATE TYPE "Faction" AS ENUM ('ALLIANCE', 'HORDE');

-- CreateTable
CREATE TABLE "Guild" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "faction" "Faction" NOT NULL,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "faction" "Faction" NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT true,
    "guildId" INTEGER NOT NULL,
    "mainId" INTEGER,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guild_name_key" ON "Guild"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_mainId_fkey" FOREIGN KEY ("mainId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
