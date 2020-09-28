import { Router, Request, Response } from "express";
import { InternshipEntry } from "../models/InternshipEntry";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    message: "Hello world! 🌍",
  });
});

router.post("/", async (req: Request, res: Response, next: CallableFunction) => {
  try {
    const internshipEntry = new InternshipEntry(req.body);
    const createdEntry = await internshipEntry.save();
    res.json(createdEntry);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

export default router;
