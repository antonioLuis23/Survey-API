import { Express } from 'Express';
import { bodyParser } from '../middlewares/body-parser';

export default (app: Express): void => {
  app.use(bodyParser);
};
