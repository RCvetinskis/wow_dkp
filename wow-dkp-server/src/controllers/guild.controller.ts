import { Request, Response } from "express";
import prisma from "../db";
import { AuthRequest } from "../types/general";

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

export const createGuild = async (req: AuthRequest, res: Response) => {
  const { name, faction } = req.body;

  const existingGuild = await prisma.guild.findUnique({
    where: { name },
  });

  if (existingGuild) {
    return res.status(400).json({
      message: "Guild name alredy exists",
    });
  }

  if (!req.user?.id) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const guild = await prisma.guild.create({
    data: {
      name,
      faction,
      guildMasterId: req.user.id,
    },
  });

  res.json(guild);
};

export const getUserGuilds = async (req: AuthRequest, res: Response) => {
  const id = req.user?.id;

  const guilds = await prisma.guild.findMany({
    where: {
      guildMasterId: id,
    },
  });
  res.json(guilds);
};
