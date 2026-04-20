import "dotenv/config";
import express from "express";
import guildRoutes from "./routes/guild.routes";

const app = express();

app.use(express.json());

app.use("/api/guild", guildRoutes);

app.get("/", (_req, res) => {
  res.send("DKP Server running");
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
