import express, { Express } from 'express';
import { ticketRouter } from './ticketRouter';

export const router: Express = express();
router.use(express.json());

router.use('/tickets', ticketRouter);