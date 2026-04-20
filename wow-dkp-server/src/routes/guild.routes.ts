import express from "express";
import { getGuildById, getGuilds } from "../controllers/guild.controller";

const router = express.Router();

router.get("/", getGuilds);
router.get("/:id", getGuildById);

export default router;
