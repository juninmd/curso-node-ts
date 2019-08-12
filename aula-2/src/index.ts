import * as dotEnv from 'dotenv';
import * as path from 'path';
import { getPeople } from './star-wars.api';

const caminho = path.resolve(__dirname, '../') + '/.env';
try {
  dotEnv.config({ path: caminho });
} catch (error) {
  console.log(error)
}

(async () => {
  try {
    const people = await getPeople();
    console.log(people);
  } catch (error) {
    console.log('OH não, deu algo errado');
  }
})();