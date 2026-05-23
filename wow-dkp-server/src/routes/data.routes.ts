import express from "express";
import { getClasses } from "../controllers/data.controller";

const router = express.Router();

router.get("/", getClasses);

export default router;
