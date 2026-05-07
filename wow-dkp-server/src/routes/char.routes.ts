import express from "express";
import {
  createGuild,
  getGuildById,
  getGuilds,
  getUserGuilds,
} from "../controllers/guild.controller";
import { validate } from "../validators/validator";
import { authMiddleware } from "../middleware/auth.middleware";
import { createChar } from "../controllers/char.controller";
import { createCharSchema } from "../zod_schemas/char.schema";

const router = express.Router();

router.post("/", authMiddleware, validate(createCharSchema), createChar);

export default router;
