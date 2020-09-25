import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.json({
    response: "Hello world"
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
