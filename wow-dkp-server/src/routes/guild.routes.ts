import express from "express";
import {
  createGuild,
  getGuildById,
  getGuilds,
} from "../controllers/guild.controller";
import { validate } from "../validators/validator";
import { createGuildSchema } from "../zod_schemas/guild.schema";

const router = express.Router();

router.get("/", getGuilds);
router.get("/:id", getGuildById);
router.post("/", validate(createGuildSchema), createGuild);

export default router;
