import express, { Request, Response } from 'express';
import {notFoundError, errorHandler } from './middlewares'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN_URL,
}))

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    response: "Hello world",
  });
});

app.use(notFoundError);
app.use(errorHandler);

const PORT = process.env.API_PORT;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
