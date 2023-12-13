import express, { Express } from 'express';
import { eventRouter } from './eventRouter';

export const router: Express = express();
router.use(express.json());

router.use('/events', eventRouter);