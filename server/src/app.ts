import express, { Request, Response } from "express";
import { notFoundError, errorHandler } from "./middlewares";
import internships from "./routes/internships";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

mongoose.connect(String(process.env.MONGODB_URL), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN_URL,
  })
);
app.use(express.json());

app.use("/api/internships", internships);

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    response: "Hello world",
  });
});

app.use(notFoundError);
app.use(errorHandler);

const PORT = process.env.SERVER_PORT;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
