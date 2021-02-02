import { Router, Request, Response } from "express";
import { InternshipEntry } from "../models/InternshipEntry";
import basicAuth from "express-basic-auth";

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

if (!username || !password) {
  throw new Error("Username or password not set");
}

const user: Record<string, string> = {};
user[username] = password;
const auth = basicAuth({
  users: user,
  unauthorizedResponse: (_: Request) => ({ message: "401 - Unauthorized request" }),
});

const router = Router();

router.get("/", async (_: Request, res: Response) => {
  const internshipEntries = await InternshipEntry.find().sort({ company: 1 });
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
  auth,
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
  auth,
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

router.delete(
  "/:id",
  auth,
  async (req: Request, res: Response, next: CallableFunction) => {
    try {
      const removedEntry = await InternshipEntry.findByIdAndRemove(
        req.params.id
      );
      res.status(200);
      res.json({ response: removedEntry });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
