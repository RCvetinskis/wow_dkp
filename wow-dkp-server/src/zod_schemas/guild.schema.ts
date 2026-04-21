import { z } from "zod";

export const createGuildSchema = z.object({
  name: z
    .string()
    .min(2, "Guild name too short")
    .max(30, "Guild name too long"),
  faction: z.enum(["ALLIANCE", "HORDE"]),
});

export type CreateGuildDTO = z.infer<typeof createGuildSchema>;
