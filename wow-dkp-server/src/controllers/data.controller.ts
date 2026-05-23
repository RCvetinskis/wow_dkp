import { Request, Response } from "express";

import { classes } from "../data/classes";

export const getClasses = async (req: Request, res: Response) => {
  res.status(200).json(classes);
};
