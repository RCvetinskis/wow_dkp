import { Request, Response } from "express";
import prisma from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
export const registerUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const existing = await prisma.user.findUnique({
    where: {
      name,
    },
  });

  if (existing) {
    return res.status(400).json({ message: "Username alredy exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
    },
  });

  return res.status(201).json({
    id: user.id,
    name: user.name,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { name },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  });
};
