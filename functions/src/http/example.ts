import * as express from 'express';

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).send({ status: 'Up and running' });
  } catch (e) {
    return res.sendStatus(500);
  }
});

export default app;
