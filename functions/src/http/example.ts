import * as express from 'express';
import { helloWorld } from '@ng-starter/shared';

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
  try {
    return res.status(200).send({ status: helloWorld() });
  } catch (e) {
    return res.sendStatus(500);
  }
});

export default app;
