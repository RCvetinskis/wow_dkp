import { Request, Response } from "express";
import prisma from "../db";
import { AuthRequest } from "../types/general";

export const createChar = async (req: AuthRequest, res: Response) => {
  const { name, faction, guild } = req.body;

  const existingGuild = await prisma.guild.findUnique({
    where: { name: guild },
  });

  if (!existingGuild) {
    return res.status(400).json({
      message: "Guild is not found",
    });
  }

  if (!req.user?.id) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const newChar = prisma.character.create({
    data: {
      name,
      faction,
      guildId: existingGuild.id,
      class: "DEATH_KNIGHT",
      spec: "FROST_DK",
    },
  });

  res.json(newChar);
};
