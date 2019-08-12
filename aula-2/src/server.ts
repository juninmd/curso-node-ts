import * as dotEnv from 'dotenv';
import * as path from 'path';
import * as express from 'express';
import { getPeople } from './star-wars.api';

const caminho = path.resolve(__dirname, '../') + '/.env';
try {
  dotEnv.config({ path: caminho });
} catch (error) {
  console.log(error)
}

const app = express();

app.get('/people/:id', async (req: express.Request, res: express.Response, ) => {
  try {
    const people = await getPeople(req.params.id);
    res.send(people).status(200);
  } catch (error) {
    res.send({ error: 'Ocorreu uma falha' }).status(500);
  }
})

app.listen(8000, () => {
  console.log('Api rodando :) http://localhost:8000')
})