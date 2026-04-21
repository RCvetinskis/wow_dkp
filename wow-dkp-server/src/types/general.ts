import { Request } from "express";

import { User } from "../../prisma/generated/client";

export type AuthRequest = Request & {
  user?: User;
};
