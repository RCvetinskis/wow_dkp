import "dotenv/config";
import express from "express";
import cors from "cors";
import guildRoutes from "./routes/guild.routes";
import authRoutes from "./routes/auth.routes";
import { getClasses } from "./controllers/data.controller";
const app = express();
const PORT = 3000;
const FRONT_PORT = 5173;
app.use(
  cors({
    origin: `http://localhost:${FRONT_PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/guild", guildRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/data/classes", getClasses);

app.get("/", (_req, res) => {
  res.send("DKP Server running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
