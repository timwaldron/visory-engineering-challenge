import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from '../routes/router';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use('/api/v1', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});