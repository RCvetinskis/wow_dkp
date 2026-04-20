import { Request, Response } from "express";
import prisma from "../db";

export const getGuilds = async (req: Request, res: Response) => {
  const guilds = await prisma.guild.findMany();
  res.json(guilds);
};

export const getGuildById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid guild id" });
  }

  const guild = await prisma.guild.findUnique({
    where: { id },
  });

  if (!guild) {
    return res.status(404).json({ error: "Guild not found" });
  }

  res.json(guild);
};
