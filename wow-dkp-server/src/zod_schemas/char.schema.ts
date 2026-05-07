import { z } from "zod";

export const createCharSchema = z.object({
  name: z
    .string()
    .min(2, "Username too short")
    .max(30, "Username name too long"),
  faction: z.enum(["ALLIANCE", "HORDE"]),
});

export type CreateGuildDTO = z.infer<typeof createCharSchema>;
