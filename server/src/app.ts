import express, { Request, Response } from "express";
import { notFoundError, errorHandler } from "./middlewares";
import internships from "./routes/internships";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import http from "http";
import https from "https";
import fs from "fs";

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

app.use("/api/v1/internships", internships);

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

if (process.env.NODE_ENV === "development") {
  http.createServer(app).listen(PORT, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
  });
} else {
  const letsencryptPath = `/etc/letsencrypt/live${HOST}`;
  const httpsOptions = {
    key: fs.readFileSync(`${letsencryptPath}/privkey.pem`),
    cert: fs.readFileSync(`${letsencryptPath}/fullchain.pem`),
  }
  https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`Listening at https://${HOST}:${PORT}`);
  });
}
