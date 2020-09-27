import express, { Request, Response } from "express";
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    response: "Hello world",
  });
});

const PORT = process.env.API_PORT;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
