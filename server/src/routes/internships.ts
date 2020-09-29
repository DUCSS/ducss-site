import { Router, Request, Response } from "express";
import { InternshipEntry } from "../models/InternshipEntry";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const internshipEntries = await InternshipEntry.find();
  res.status(200);
  res.json({ response: internshipEntries });
});

router.get("/:id", async (req: Request, res: Response) => {
  const internshipEntry = await InternshipEntry.findById(req.params.id);
  res.status(200);
  res.json({ response: internshipEntry });
});

router.post(
  "/",
  async (req: Request, res: Response, next: CallableFunction) => {
    try {
      const internshipEntry = new InternshipEntry(req.body);
      const createdEntry = await internshipEntry.save();
      res.status(200);
      res.json({ response: createdEntry });
    } catch (error) {
      if (error.name === "ValidationError") res.status(400);
      next(error);
    }
  }
);

router.post(
  "/:id",
  async (req: Request, res: Response, next: CallableFunction) => {
    try {
      const internshipEntry = req.body;
      const updatedEntry = await InternshipEntry.findByIdAndUpdate(
        req.params.id,
        internshipEntry,
        { new: true }
      );
      res.status(200);
      res.json({ response: updatedEntry });
    } catch (error) {
      if (error.name === "ValidationError") res.status(400);
      next(error);
    }
  }
);

export default router;
