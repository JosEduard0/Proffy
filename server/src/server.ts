import Express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(routes);

app.listen(3333);