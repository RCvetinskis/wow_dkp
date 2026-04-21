import express from "express";
import {
  createGuild,
  getGuildById,
  getGuilds,
  getUserGuilds,
} from "../controllers/guild.controller";
import { validate } from "../validators/validator";
import { createGuildSchema } from "../zod_schemas/guild.schema";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", getGuilds);
router.get("/me", authMiddleware, getUserGuilds);
router.get("/:id", getGuildById);
router.post("/", authMiddleware, validate(createGuildSchema), createGuild);

export default router;
