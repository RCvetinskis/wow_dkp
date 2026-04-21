import { Request, Response } from "express";
import prisma from "../db";

export const getGuilds = async (req: Request, res: Response) => {
  const guilds = await prisma.guild.findMany();
  res.json(guilds);
};

export const getGuildById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid guild id" });
  }

  const guild = await prisma.guild.findUnique({
    where: { id },
  });

  if (!guild) {
    return res.status(404).json({ message: "Guild not found" });
  }

  res.json(guild);
};

export const createGuild = async (req: Request, res: Response) => {
  const { name, faction } = req.body;

  const existingGuild = await prisma.guild.findUnique({
    where: { name },
  });

  if (existingGuild) {
    return res.status(400).json({
      message: "Guild name alredy exists",
    });
  }
  const guild = await prisma.guild.create({
    data: {
      name,
      faction,
    },
  });

  res.json(guild);
};
